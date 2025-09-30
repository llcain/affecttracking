<script setup>
import { ref } from 'vue'

// State
const supplementName = ref('')
const dosage = ref('')
const supplementLog = ref([])

// Add supplement entry
function submitSupplement() {
  if (!supplementName.value) return

  supplementLog.value.push({
    name: supplementName.value,
    dosage: dosage.value || 'N/A',
    time: new Date().toLocaleTimeString(),
  })

  // Reset form
  supplementName.value = ''
  dosage.value = ''
}
</script>

<template lang="pug">
section.max-w-md.mx-auto.p-4.bg-white.shadow-md.rounded-md
  h2.text-xl.font-semibold.mb-4 Track Supplement Intake

  form(@submit.prevent="submitSupplement" class="space-y-4")
    div
      label.block.text-sm.font-medium.text-gray-700 Supplement Name
      input(
        v-model="supplementName"
        type="text"
        placeholder="e.g. Vitamin D"
        required
        class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
      )

    div
      label.block.text-sm.font-medium.text-gray-700 Dosage
      input(
        v-model="dosage"
        type="text"
        placeholder="e.g. 1000 IU"
        class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
      )

    button(
      type="submit"
      class="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
    ) Add Supplement

  hr.my-6

  h3.text-lg.font-semibold.mb-2 Today's Supplement Log
  ul.space-y-2
    li(
      v-for="(entry, index) in supplementLog"
      :key="index"
      class="text-sm bg-gray-100 p-2 rounded"
    )
      span.font-semibold {{ entry.time }}:
      |  {{ entry.name }} ({{ entry.dosage }})
</template>
