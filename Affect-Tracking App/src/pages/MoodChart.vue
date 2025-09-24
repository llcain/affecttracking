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

<template>
  <section class="card">
    <h2>Mood Chart</h2>
    <p>Use the buttons to log your current mood. The chart will update below.</p>
    <div class="mood-buttons">
      <button @click="logMood(1)">🙂 Positive</button>
      <button @click="logMood(0)">😐 Neutral</button>
      <button @click="logMood(-1)">🙁 Negative</button>
    </div>
    <canvas ref="chartCanvas"></canvas>
  </section>
</template>

<style scoped>
.card { background: #fff8f0; padding: 1rem; border-radius: 12px; margin: 1.5rem 0; }
.mood-buttons { display: flex; gap: 1rem; margin: 1rem 0; }
button { padding: 0.5rem 1rem; border: none; border-radius: 8px; cursor: pointer; background: #ff9800; color: white; font-weight: bold; }
button:hover { opacity: 0.9; }
</style>
