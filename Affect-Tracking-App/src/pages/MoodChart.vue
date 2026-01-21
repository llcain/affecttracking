<script setup>
import {ref} from 'vue';

const username = ref('');
const moods = ref(['happy', 'nuetral', 'sad']);

handler = () => {
  let value = "";
  document.getElementById('list').value = "";
  
}

</script>

<template lang="pug">
// create legend

ul.legend
  li Happy 😀😀😀
  li Neutral 😑😑😑
  li Sad 😒😒😒

  div.max-w-submit
    label.block.text-sm.font-medium.text-gray-700.mb-1 User Name:
    input(
      type="text"
      v-model="username"
      placeholder="Enter your name"
      value=""
    )
    button(@click="handler") Add User
    div.container
      div#list
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