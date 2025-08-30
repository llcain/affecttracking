<script setup>
import { ref } from 'vue'

// Mood entries (for chart)
const moods = ref([])

// Journal entries
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
main.app
  header.navbar
    h1 The Affect Tracker
    ul.nav
      li Home
      li Chart
      li Journal

  section.card
    h2 About
    p Welcome! Track your mood, water, and supplements. 
      | Start by logging your mood throughout the day.

  section.card
    h2 Chart
    p Mood logging chart will go here.
    //- Placeholder chart
    div.chart-box Mood Chart Placeholder

  section.card
    h2 Journal
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
  max-width: 600px;
  margin: 0 auto;
  font-family: sans-serif;
  padding: 1rem;
}
h1 { color: orange; }
.nav { display: flex; gap: 1rem; list-style: none; padding: 0; }
.card {
  background: #fff8f0;
  padding: 1rem;
  border-radius: 12px;
  margin: 1rem 0;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.chart-box {
  height: 150px;
  background: #eee;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
textarea {
  width: 100%;
  min-height: 60px;
  margin-bottom: 0.5rem;
}
.journals { list-style: none; padding: 0; }
</style>
