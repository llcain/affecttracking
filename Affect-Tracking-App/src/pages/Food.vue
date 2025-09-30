<script setup>
import { ref } from 'vue'

const foodItem = ref('')
const mealType = ref('Breakfast')
const calories = ref('')
const foodLog = ref([])

function submitFood() {
  const entry = {
    foodItem: foodItem.value,
    mealType: mealType.value,
    calories: calories.value || 0,
    time: new Date().toLocaleTimeString(),
  }

  foodLog.value.push(entry)

  // Reset form
  foodItem.value = ''
  mealType.value = 'Breakfast'
  calories.value = ''
}
</script>

<template lang="pug">
section.max-w-md.mx-auto.p-4.bg-white.shadow-md.rounded-md
  h2.text-xl.font-semibold.mb-4 Track Food

  form(@submit.prevent="submitFood" class="space-y-4")
    div
      label.block.text-sm.font-medium.text-gray-700 Food Item
      input(v-model="foodItem" type="text" placeholder="e.g. Chicken Salad" required class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2")

    div
      label.block.text-sm.font-medium.text-gray-700 Meal Type
      select(v-model="mealType" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2")
        option(value="Breakfast") Breakfast
        option(value="Lunch") Lunch
        option(value="Dinner") Dinner
        option(value="Snack") Snack

    div
      label.block.text-sm.font-medium.text-gray-700 Calories
      input(v-model="calories" type="number" min="0" class="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2")

    button(type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition") Add Food

  hr.my-6

  h3.text-lg.font-semibold.mb-2 Today's Food Log
  ul.space-y-2
    li(v-for="(entry, index) in foodLog" :key="index" class="text-sm bg-gray-100 p-2 rounded")
      span.font-semibold {{ entry.time }}:
      |  {{ entry.mealType }} - {{ entry.foodItem }} ({{ entry.calories }} cal)
</template>
