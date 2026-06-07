<template lang="pug">
main.app

  header.navbar

    h1 Affect Tracking Dashboard

    nav
      router-link(to="/") Dashboard
      router-link(to="/chart") Mood
      router-link(to="/food") Food
      router-link(to="/water") Water
      router-link(to="/supplement") Supplements
      router-link(to="/journal") Journal
      router-link(to="/about") About

  router-view
</template>

<script setup>
// No imports needed here.
// Pages are loaded through Vue Router.
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: #f8fafc;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem 2rem;

  background: white;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h1 {
  margin: 0;
  color: #7c3aed;
  font-size: 2rem;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  color: #475569;
  font-weight: 600;
}

nav a.router-link-exact-active {
  color: #7c3aed;
}
</style>