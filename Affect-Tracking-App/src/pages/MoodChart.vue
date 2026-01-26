<script setup>
import {ref} from 'vue';

const userName = ref('');
const moods = ref(['happy', 'nuetral', 'sad']);
const names = ref([]);

const addName = () => {
  if (!userName.value.trim()) return

  names.value.push(userName.value)
  userName.value = ''
}


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
  v-model="userName"
  placeholder="Enter Your Name"
)
button(@click="addName") Add User

div#mood-container
  h2 Moods

  div#moodList
    ul
      li(v-for="(name, index) in names" :key="index")
        {{ name }}

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