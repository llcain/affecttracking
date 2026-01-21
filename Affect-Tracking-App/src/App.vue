

<template lang="pug">
  main.app
    header.navbar
      h1 The Affect Tracker
        nav
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/chart">Mood</router-link>
          <router-link to="/food">Food</router-link>
          <router-link to="/water">Water</router-link>
          <router-link to="/supplement">Supplement</router-link>
          <router-link to="/journal">Journal</router-link>
         
      
    

    // Pages render here
    <router-view />
  
</template>

<style scoped>
.app {
  max-width: 700px;
  margin: 0 auto;
  font-family: sans-serif;
  padding: 1rem;
}
h1 { 
  color: red; 
  text-align: center; 
  margin-bottom: 1.5rem;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
nav {
  display: flex;
  gap: 1rem;
}
nav a {
  color: #ff9800;
  font-weight: bold;
  text-decoration: none;
}
nav a.router-link-exact-active {
  text-decoration: underline;
}
</style>

<script setup>

import MoodChart from "./pages/MoodChart.vue"
</script>