<script setup>
import {ref} from 'vue';

const userName = ref('');
const moods = ref(['😀😀😀']);
const names = ref([]);

const addMood = () => {
  return moods;
}


</script>

<template lang="pug">
// create legend

h1 Legend

ul.legend
  li Happy 😀😀😀
  li Neutral 😑😑😑
  li Sad 😒😒😒


button(@click="addMood") Mood
p {{moods}}


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