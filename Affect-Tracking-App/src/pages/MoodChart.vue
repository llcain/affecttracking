<script setup>
import {ref} from 'vue';

const username = ref('');
const moods = ref(['happy', 'nuetral', 'sad']);

</script>

<template lang="pug">
// create legend

h1 Legend
ul.legend
  li Happy 😀😀😀
  li Neutral 😑😑😑
  li Sad 😒😒😒

  input(
    type="text"
    placeholder="Enter Your Name"
    )
  button Add User

  div#mood-container
    h2 Moods
    div.moodList
</template>

<style scoped>

ul.legend li {
  background-color: blue;
  color: white;
  list-style: none;
  width: 150px;
}

ul.legend li:nth-child(3) {
  margin-bottom: 20px;
}
</style>