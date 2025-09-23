<script setup>
import { ref, watch, onMounted } from 'vue'
import { Chart, BarController, BarElement, LinearScale, CategoryScale, Title } from 'chart.js'

// Register Chart.js
Chart.register(BarController, BarElement, LinearScale, CategoryScale, Title)

// Fixed time slots
const timeSlots = ['7 AM', '11 AM', '3 PM', '7 PM']

// Mood entries for slots
const moods = ref(timeSlots.map(slot => ({ slot, v: null })))

const chartCanvas = ref(null)
let chartInstance = null

// Log mood
function logMood(value) {
  const hour = new Date().getHours()
  let slotIndex = 0
  if (hour >= 6 && hour < 9) slotIndex = 0   // 7 AM
  else if (hour >= 9 && hour < 14) slotIndex = 1 // 11 AM
  else if (hour >= 14 && hour < 17) slotIndex = 2 // 3 PM
  else slotIndex = 3 // 7 PM

  moods.value[slotIndex].v = value
}

// Journals
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
            callback: (val) =>
              val === 1 ? 'Positive' :
              val === 0 ? 'Neutral' :
              val === -1 ? 'Negative' : ''
          }
        },
        x: {
          title: { display: true, text: 'Time of Day' }
        }
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
main.app
  header.navbar
    h1 The Affect Tracker

  //- About Section
  section.card
    h2 About
    p This app helps you track your daily moods and journal your reflections.
    p Log your mood at fixed times (7 AM, 11 AM, 3 PM, 7 PM). Over time, you’ll see patterns in your affect.

  //- Mood Chart Section
  section.card
    h2 Mood Chart
    p Use the buttons to log your current mood. Your responses will update the chart below.
    .mood-buttons
      button(@click="logMood(1)") 🙂 Positive
      button(@click="logMood(0)") 😐 Neutral
      button(@click="logMood(-1)") 🙁 Negative
    canvas(ref="chartCanvas")

  //- Journal Section
  section.card
    h2 Journal
    p Reflect on how you feel throughout the day.
    form(@submit.prevent="addJournal")
      textarea(v-model="newEntry" placeholder="Write your thoughts...")
      button(type="submit") Add Entry
    ul.journals
      li(v-for="j in journals" :key="j.id")
        strong {{ j.time }}:
        span {{ j.text }}
</template>

<style scoped>
.app {
  max-width: 700px;
  margin: 0 auto;
  font-family: sans-serif;
  padding: 1rem;
}
h1 { 
  color: orange; 
  text-align: center; 
  margin-bottom: 1.5rem;
}
.card {
  background: #fff8f0;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  margin: 1.5rem 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.mood-buttons {
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #ff9800;
  color: white;
  font-weight: bold;
}
button:hover { opacity: 0.9; }
textarea {
  width: 100%;
  min-height: 60px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.journals {
  list-style: none;
  padding: 0;
}
.journals li {
  margin-bottom: 0.5rem;
}
</style>
