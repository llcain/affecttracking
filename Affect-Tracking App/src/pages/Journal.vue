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

<template>
  <section class="card">
    <h2>Journal</h2>
    <p>Reflect on how you feel throughout the day.</p>
    <form @submit.prevent="addJournal">
      <textarea v-model="newEntry" placeholder="Write your thoughts..."></textarea>
      <button type="submit">Add Entry</button>
    </form>
    <ul class="journals">
      <li v-for="j in journals" :key="j.id">
        <strong>{{ j.time }}:</strong> <span>{{ j.text }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.card { background: #fff8f0; padding: 1rem; border-radius: 12px; margin: 1.5rem 0; }
textarea { width: 100%; min-height: 60px; margin-bottom: 0.5rem; padding: 0.5rem; border-radius: 6px; border: 1px solid #ccc; }
button { padding: 0.5rem 1rem; border: none; border-radius: 8px; cursor: pointer; background: #ff9800; color: white; font-weight: bold; }
button:hover { opacity: 0.9; }
.journals { list-style: none; padding: 0; }
.journals li { margin-bottom: 0.5rem; }
</style>
