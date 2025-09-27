<script setup>
import { ref, watch, onMounted } from 'vue'
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Title } from 'chart.js'

// Register Chart.js
Chart.register(BarController, BarElement, LinearScale, CategoryScale, Title)

// Time slots and moods
const timeSlots = ['7 AM', '11 AM', '3 PM', '7 PM']
const moods = ref(timeSlots.map(slot => ({ slot, v: null })))

const chartCanvas = ref(null)
let chartInstance = null

// Log mood
function logMood(value) {
  const hour = new Date().getHours()
  let slotIndex = 0
  if (hour >= 6 && hour < 9) slotIndex = 0
  else if (hour >= 9 && hour < 14) slotIndex = 1
  else if (hour >= 14 && hour < 17) slotIndex = 2
  else slotIndex = 3
  moods.value[slotIndex].v = value
}

// Init chart
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
            callback: val =>
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

// Update chart when moods change
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
section.bg-orange-50.p-6.rounded-2xl.shadow.max-w-3xl.mx-auto.my-8
  h2.text-2xl.font-bold.text-orange-600.mb-4 Mood Chart
  p.text-gray-700.mb-4 Use the buttons to log your current mood. The chart will update below.
  div.flex.gap-4.mb-4
    button.px-4.py-2.bg-orange-500.text-white.font-bold.rounded-lg.hover:opacity-90(@click="logMood(1)") 🙂 Positive
    button.px-4.py-2.bg-orange-500.text-white.font-bold.rounded-lg.hover:opacity-90(@click="logMood(0)") 😐 Neutral
    button.px-4.py-2.bg-orange-500.text-white.font-bold.rounded-lg.hover:opacity-90(@click="logMood(-1)") 🙁 Negative
  canvas(ref="chartCanvas")
</template>
