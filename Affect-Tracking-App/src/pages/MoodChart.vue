<script setup>
import { reactive, ref, computed } from 'vue'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

import { Line } from 'vue-chartjs'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

const form = reactive({
  name: '',
  time: '7am',
  mood: '3'
})

const moodEntries = ref([])

function submitMood() {
  moodEntries.value.push({
    name: form.name,
    time: form.time,
    mood: Number(form.mood)
  })

  form.name = ''
}

const chartData = computed(() => ({
  labels: moodEntries.value.map(entry => entry.time),

  datasets: [
    {
      label: 'Mood Tracking',
      data: moodEntries.value.map(entry => entry.mood),
      tension: 0.4
    }
  ]
}))

const chartOptions = {
  responsive: true,

  scales: {
    y: {
      min: 1,
      max: 3,

      ticks: {
        stepSize: 1,

        callback: function(value) {
          const moods = {
            1: 'Sad',
            2: 'Neutral',
            3: 'Happy'
          }

          return moods[value]
        }
      }
    }
  }
}
</script>

<template lang="pug">
div(class="min-h-screen bg-gray-100 p-8")

  div(class="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6")

    h1(class="text-3xl font-bold text-center mb-6")
      | Affect Tracking App

    //- Legend
    div(class="mb-6")

      h2(class="text-xl font-semibold mb-3")
        | Legend

      ul(class="space-y-2")

        li(class="flex items-center gap-2")
          span(class="text-2xl") 😀😀😀
          span Happy

        li(class="flex items-center gap-2")
          span(class="text-2xl") 😑😑😑
          span Neutral

        li(class="flex items-center gap-2")
          span(class="text-2xl") 😒😒😒
          span Sad

    //- Form
    form(
      @submit.prevent="submitMood"
      class="space-y-4 mb-8"
    )

      div
        label(class="block mb-1 font-medium")
          | Name

        input(
          v-model="form.name"
          type="text"
          placeholder="Enter your name"
          class="w-full border rounded-lg px-4 py-2"
        )

      div
        label(class="block mb-1 font-medium")
          | Time of Day

        select(
          v-model="form.time"
          class="w-full border rounded-lg px-4 py-2"
        )
          option(value="7am") 7am
          option(value="11am") 11am
          option(value="3pm") 3pm
          option(value="7pm") 7pm

      div
        label(class="block mb-1 font-medium")
          | Mood

        select(
          v-model="form.mood"
          class="w-full border rounded-lg px-4 py-2"
        )
          option(value="3") Happy 😀
          option(value="2") Neutral 😑
          option(value="1") Sad 😒

      button(
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      )
        | Submit Mood

    //- Chart
    div(class="bg-gray-50 rounded-2xl p-4")
      Line(
        :data="chartData"
        :options="chartOptions"
      )

    //- Mood Entries
    div(
      v-if="moodEntries.length"
      class="mt-8"
    )

      h2(class="text-xl font-semibold mb-4")
        | Mood Entries

      ul(class="space-y-2")

        li(
          v-for="entry in moodEntries"
          :key="entry.name + entry.time"
          class="bg-gray-100 rounded-lg p-3"
        )

          span(class="font-semibold")
            | {{ entry.name }}

          span(v-if="entry.mood === 3")
            |  is 😀 Happy

          span(v-else-if="entry.mood === 2")
            |  is 😑 Neutral

          span(v-else)
            |  is 😒 Sad

          |  at {{ entry.time }}
</template>