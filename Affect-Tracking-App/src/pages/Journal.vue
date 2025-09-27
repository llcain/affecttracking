<script setup>
import { ref } from 'vue'

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
</script>

<template lang="pug">
section.bg-orange-50.p-6.rounded-2xl.shadow.max-w-3xl.mx-auto.my-8
  h2.text-2xl.font-bold.text-orange-600.mb-4 Journal
  p.text-gray-700.mb-4 Reflect on how you feel throughout the day.
  form.flex.flex-col.space-y-2(@submit.prevent="addJournal")
    textarea.w-full.p-2.border.rounded-lg(v-model="newEntry" placeholder="Write your thoughts...")
    button.px-4.py-2.bg-orange-500.text-white.font-bold.rounded-lg.hover:opacity-90(type="submit") Add Entry
  ul.mt-4.space-y-2
    li.p-2.bg-white.rounded-lg.shadow(v-for="j in journals" :key="j.id")
      strong.text-gray-600 {{ j.time }}:
      span.ml-2 {{ j.text }}
</template>
