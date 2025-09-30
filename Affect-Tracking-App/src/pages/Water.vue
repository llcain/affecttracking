<script setup>
import { ref } from 'vue'

// State
const waterLog = ref([])
const totalML = ref(0)

// Predefined quick add options (you can customize)
const quickAmounts = [250, 500, 1000]

// Add a new water entry
function addWater(amount) {
  const entry = {
    amount,
    time: new Date().toLocaleTimeString()
  }

  waterLog.value.push(entry)
  totalML.value += amount
}
</script>

<template lang="pug">
section.max-w-md.mx-auto.p-4.bg-white.shadow-md.rounded-md
  h2.text-xl.font-semibold.mb-4 Track Water Intake

  div.flex.space-x-2.mb-4
    button(
      v-for="amount in quickAmounts"
      :key="amount"
      @click="addWater(amount)"
      class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
    ) +{{ amount }}ml

  div.text-gray-800.font-medium.mb-4
    span Total Today:
    span.text-blue-600.font-bold {{ totalML }}ml

  hr.my-4

  h3.text-lg.font-semibold.mb-2 Today's Water Log
  ul.space-y-2
    li(
      v-for="(entry, index) in waterLog"
      :key="index"
      class="text-sm bg-gray-100 p-2 rounded"
    )
      span.font-semibold {{ entry.time }}:
      |  Drank {{ entry.amount }}ml
</template>
