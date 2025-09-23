<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

// Register Chart.js modules
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Example mood data (you can replace this later with dynamic data)
const chartData = {
  labels: ['7 AM', '11 AM', '3 PM', '7 PM'],
  datasets: [
    {
      label: 'Mood Levels',
      data: [3, 4, 2, 5], // 1–5 scale for moods
      backgroundColor: ['#60a5fa', '#f87171', '#fbbf24', '#34d399']
    }
  ]
}

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'Mood Tracker - Today'
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 5,
      ticks: {
        stepSize: 1
      }
    }
  }
}
</script>

<template>
  <div class="p-4 bg-white rounded-2xl shadow">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>
