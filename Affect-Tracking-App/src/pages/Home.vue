<script setup>
import { ref, watch, onMounted } from 'vue'
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Title } from 'chart.js'

Chart.register(BarController, BarElement, LinearScale, CategoryScale, Title)

const timeSlots = ['7 AM', '11 AM', '3 PM', '7 PM']
const moods = ref(timeSlots.map(slot => ({ slot, v: null })))
const chartCanvas = ref(null)
let chartInstance = null

function logMood(value) {
  const hour = new Date().getHours()
  let slotIndex = 0
  if (hour >= 6 && hour < 9) slotIndex = 0
  else if (hour >= 9 && hour < 14) slotIndex = 1
  else if (hour >= 14 && hour < 17) slotIndex = 2
  else slotIndex = 3
  moods.value[slotIndex].v = value
}

const journals = ref([])
const newEntry = ref('')

function addJournal() {
  if (newEntry.value.trim()) {
    journals.value.push({
      id: Date.now(),
      text: newEntry.value,
      time: new Date().toLocaleString()
    })
    newEntry.value = ''
  }
}

onMounted(() => {
  chartInstance = new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels: timeSlots,
      datasets: [{
        label: 'Mood',
        data: moods.value.map(m => m.v),
        backgroundColor: moods.value.map(m =>
          m.v === 1 ? '#22c55e' :
          m.v === 0 ? '#facc15' :
          m.v === -1 ? '#ef4444' :
          '#e5e7eb'
        )
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          min: -1,
          max: 1,
          ticks: {
            stepSize: 1,
            callback: (val) =>
              val === 1 ? 'Positive' :
              val === 0 ? 'Neutral' :
              val === -1 ? 'Negative' : ''
          }
        },
        x: { title: { display: true, text: 'Time of Day' } }
      }
    }
  })
})

watch(moods, () => {
  if (chartInstance) {
    chartInstance.data.datasets[0].data = moods.value.map(m => m.v)
    chartInstance.data.datasets[0].backgroundColor = moods.value.map(m =>
      m.v === 1 ? '#22c55e' :
      m.v === 0 ? '#facc15' :
      m.v === -1 ? '#ef4444' :
      '#e5e7eb'
    )
    chartInstance.update()
  }
}, { deep: true })
</script>

<template lang="pug">
main.max-w-4xl.mx-auto.p-6.space-y-8
  // About Section
  section.bg-orange-50.p-6.rounded-2xl.shadow
    h2.text-2xl.font-bold.text-orange-600.mb-2 About
    p.text-gray-700 This app helps you track your daily moods and journal your reflections.
    p.text-gray-700 Log your mood at fixed times (7 AM, 11 AM, 3 PM, 7 PM). Over time, you’ll see patterns in your affect.

  // Mood Chart Section
  section.bg-orange-50.p-6.rounded-2xl.shadow
    h2.text-2xl.font-bold.text-orange-600.mb-2 Mood Chart
    p.text-gray-700 Use the buttons to log your current mood. Your responses will update the chart below.
    .flex.gap-4.my-4
      button(@click="logMood(1)" class="px-4 py-2 bg-green-500 text-white rounded-lg hover:opacity-90") 🙂 Positive
      button(@click="logMood(0)" class="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:opacity-90") 😐 Neutral
      button(@click="logMood(-1)" class="px-4 py-2 bg-red-500 text-white rounded-lg hover:opacity-90") 🙁 Negative

    canvas.w-full.h-64(ref="chartCanvas")

  // Journal 
  section.bg-orange-50.p-6.rounded-2xl.shadow
    h2.text-2xl.font-bold.text-orange-600.mb-2 Journal
    p.text-gray-700 Reflect on how you feel throughout the day.
    form.space-y-2(@submit.prevent="addJournal")
      textarea.w-full.p-2.border.rounded-lg(v-model="newEntry" placeholder="Write your thoughts...")
      button(type="submit" class="px-4 py-2 bg-orange-500 text-white rounded-lg hover:opacity-90") Add Entry

    ul.mt-4.space-y-2
      li.p-2.bg-white.rounded-lg.shadow(v-for="j in journals" :key="j.id")
        strong.text-gray-600 {{ j.time }}:
        span.ml-2 {{ j.text }}
</template>
