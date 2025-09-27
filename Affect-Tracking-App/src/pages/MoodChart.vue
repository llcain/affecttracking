<script setup>
import { ref, watch, onMounted, computed } from 'vue'
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Title } from 'chart.js'

// Register Chart.js
Chart.register(BarController, BarElement, LinearScale, CategoryScale, Title)

// Current user (can be replaced by real auth or input)
const currentUser = ref('Bob Evan')

// Time slots and moods
const timeSlots = ['7 AM', '11 AM', '3 PM', '7 PM']
const moods = ref(timeSlots.map(slot => ({
  slot,
  v: null,
  user: null
})))

const chartCanvas = ref(null)
let chartInstance = null

// Helper to get mood label
function moodLabel(value) {
  if (value === 1) return '🙂 Positive'
  if (value === 0) return '😐 Neutral'
  if (value === -1) return '🙁 Negative'
  return ''
}

// Mood logging
function logMood(value) {
  const hour = new Date().getHours()
  let slotIndex = null

  if (hour >= 6 && hour < 8) slotIndex = 0     // 7 AM
  else if (hour >= 9 && hour < 12) slotIndex = 1 // 11 AM
  else if (hour >= 13 && hour < 16) slotIndex = 2 // 3 PM
  else if (hour >= 17 && hour < 20) slotIndex = 3 // 7 PM

  if (slotIndex !== null) {
    moods.value[slotIndex].v = value
    moods.value[slotIndex].user = currentUser.value
  } else {
    alert('⏰ You can only log your mood at 7 AM, 11 AM, 3 PM, or 7 PM.')
  }
}

// Only allow logging during valid slots
const isLoggingAllowed = computed(() => {
  const hour = new Date().getHours()
  return (
    (hour >= 6 && hour < 8) ||
    (hour >= 9 && hour < 12) ||
    (hour >= 13 && hour < 16) ||
    (hour >= 17 && hour < 20)
  )
})

// Initialize chart
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

  p.text-gray-700.mb-2 Enter your name:
  input(
    v-model="currentUser"
    placeholder="Your name"
    class="mb-4 p-2 border rounded w-full"
  )

  p.text-gray-700.mb-4 Use the buttons to log your current mood at scheduled times.

  div.flex.gap-4.mb-6
    button(
      @click="logMood(1)"
      :disabled="!isLoggingAllowed"
      class="px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
    ) 🙂 Positive

    button(
      @click="logMood(0)"
      :disabled="!isLoggingAllowed"
      class="px-4 py-2 bg-yellow-400 text-white font-bold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
    ) 😐 Neutral

    button(
      @click="logMood(-1)"
      :disabled="!isLoggingAllowed"
      class="px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
    ) 🙁 Negative

  canvas(ref="chartCanvas").mb-6

  h3.text-lg.font-semibold.text-gray-800.mb-2 Logged Moods
  ul.space-y-2
    li.p-2.bg-white.rounded.shadow.flex.justify-between.items-center(
      v-for="(m, index) in moods"
      :key="index"
    )
      span.font-medium {{ m.slot }}
      span.text-sm.text-gray-700
        span(v-if="m.v !== null") {{ moodLabel(m.v) + ' by ' + m.user }}
        span(v-else)
          em.text-gray-400 Not yet logged

</template>
