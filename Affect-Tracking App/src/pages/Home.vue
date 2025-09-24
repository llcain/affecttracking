<script setup>
import { ref, watch, onMounted } from 'vue'
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Title } from 'chart.js'

// Register Chart.js
Chart.register(BarController, BarElement, LinearScale, CategoryScale, Title)

// Fixed time slots
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
        y: { min: -1, max: 1, ticks: { stepSize: 1, callback: val => val === 1 ? 'Positive' : val === 0 ? 'Neutral' : val === -1 ? 'Negative' : '' } },
        x: { title: { display: true, text: 'Time of Day' } }
      }
    }
  })
})

watch(moods, () => {
  if (chartInstance) {
    chartInstance.data.datasets[0].data = moods.value.map(m => m.v)
    chartInstance.data.datasets[0].backgroundColor = moods.value.map(m =>
      m.v === 1 ? '#22c55e' : m.v === 0 ? '#facc15' : m.v === -1 ? '#ef4444' : '#e5e7eb'
    )
    chartInstance.update()
  }
}, { deep: true })
</script>

<template lang="pug">
main
  // About Section
  section.card
    h2 About
    p This app helps you track your daily moods and journal your reflections.
    p Log your mood at fixed times (7 AM, 11 AM, 3 PM, 7 PM). Over time, you’ll see patterns in your affect.

  // Mood Chart Section
  section.card
    h2 Mood Chart
    .mood-buttons
      button(@click="logMood(1)") 🙂 Positive
      button(@click="logMood(0)") 😐 Neutral
      button(@click="logMood(-1)") 🙁 Negative
    canvas(ref="chartCanvas")

  // Journal Section
  section.card
    h2 Journal
    form(@submit.prevent="addJournal")
      textarea(v-model="newEntry" placeholder="Write your thoughts...")
      button(type="submit") Add Entry
    ul.journals
      li(v-for="j in journals" :key="j.id")
        strong {{ j.time }}:
        span {{ j.text }}
</template>
