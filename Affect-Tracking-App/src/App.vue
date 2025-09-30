<template>
  <main class="app">
    <header class="navbar">
      <h1>The Affect Tracker</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/chart">Mood Chart</router-link>
        <router-link to="/food">Food Chart</router-link>
        <router-link to="/water">Water Chart</router-link>
        <router-link to="/supplement">Supplement Chart</router-link>
        <router-link to="/journal">Journal</router-link>
      </nav>
    </header>

    <!-- Pages render here -->
    <router-view />
  </main>
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
