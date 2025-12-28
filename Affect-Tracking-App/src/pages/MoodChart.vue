<script setup>
import {ref} from 'vue'

const username = ref('')
const moods = ref(['happy', 'nuetral', 'sad'])
</script>

<template lang="pug">
// create legend

ul.legend
  li Happy 😀😀😀
  li Neutral 😑😑😑
  li Sad 😒😒😒

  div.max-w-submit
    label.block.text-sm.font-medium.text-gray-700.mb-1 User Name
    input(
      type="text"
      v-model="username"
      placeholder="Enter your name"
    div.container
      li#list
    )
</template>

<style scoped>
ul.legend {
  backgroundColor: blue;
}

ul.legend li {
  list-style: none;
}
</style>