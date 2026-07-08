<template lang="pug">
main(class="min-h-screen bg-slate-300")

  div(class="w-full px-8 py-8")

    // Welcome Banner
    section(
      class="bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-3xl shadow-xl p-8 mb-8"
    )

      h2(class="text-4xl font-bold")
        | Welcome Back 👋

      p(class="mt-3 text-lg")
        | Track your moods, nutrition, hydration, supplements, and daily wellness habits.

    // Dashboard Summary Cards
    section(class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8")

      div(class="bg-white rounded-3xl shadow-lg p-6")
        h3(class="text-lg font-semibold text-slate-500") Today's Mood
        p(class="text-4xl mt-3") 😀

      div(class="bg-white rounded-3xl shadow-lg p-6")
        h3(class="text-lg font-semibold text-slate-500") Water Intake
        p(class="text-4xl mt-3") 💧 6 / 8

      div(class="bg-white rounded-3xl shadow-lg p-6")
        h3(class="text-lg font-semibold text-slate-500") Meals Logged
        p(class="text-4xl mt-3") 🍎 3

      div(class="bg-white rounded-3xl shadow-lg p-6")
        h3(class="text-lg font-semibold text-slate-500") Supplements
        p(class="text-4xl mt-3") 💊 4

    // Dashboard Grid
    section(class="grid grid-cols-1 xl:grid-cols-3 gap-6")

      // Mood Tracker
      div(class="bg-white rounded-3xl shadow-xl p-6")

        h2(class="text-2xl font-bold mb-6")
          | Mood Tracker

        input(
          type="text"
          placeholder="Enter your name"
          class="w-full border rounded-xl p-3 mb-4"
        )

        select(class="w-full border rounded-xl p-3 mb-4")
          option 7am
          option 11am
          option 3pm
          option 7pm

        select(class="w-full border rounded-xl p-3 mb-6")
          option Happy 😀
          option Neutral 😑
          option Sad 😒

        button(
          class="w-full bg-purple-700 text-white rounded-xl py-3 hover:bg-purple-800"
        )
          | Record Mood

      // Mood Chart
      div(class="bg-white rounded-3xl shadow-xl p-6 xl:col-span-2")

        h2(class="text-2xl font-bold mb-4")
          | Mood Trends

        div(class="h-80 rounded-xl bg-slate-100 flex items-center justify-center")

          p(class="text-slate-500")
            | MoodChart.vue will be displayed here

      // Food Tracker
      div(class="bg-white rounded-3xl shadow-xl p-6")

        h2(class="text-2xl font-bold mb-4")
          | Food Intake

        input(
          type="text"
          placeholder="Breakfast"
          class="w-full border rounded-xl p-3 mb-3"
        )

        input(
          type="text"
          placeholder="Lunch"
          class="w-full border rounded-xl p-3 mb-3"
        )

        input(
          type="text"
          placeholder="Dinner"
          class="w-full border rounded-xl p-3"
        )

      // Water Tracker
      div(class="bg-white rounded-3xl shadow-xl p-6")

        h2(class="text-2xl font-bold mb-4")
          | Water Intake

        p(class="text-lg mb-4")
          | 6 of 8 glasses

        div(class="bg-slate-200 rounded-full h-5")

          div(
            class="bg-blue-500 rounded-full h-5"
            style="width:75%"
          )

      // Supplements
      div(class="bg-white rounded-3xl shadow-xl p-6")

        h2(class="text-2xl font-bold mb-4")
          | Supplements

        label(class="block mb-3")
          input(type="checkbox" class="mr-2")
          | Multivitamin

        label(class="block mb-3")
          input(type="checkbox" class="mr-2")
          | Vitamin D

        label(class="block mb-3")
          input(type="checkbox" class="mr-2")
          | Omega 3

        label(class="block")
          input(type="checkbox" class="mr-2")
          | Magnesium

      // Journal
      div(class="bg-white rounded-3xl shadow-xl p-6 xl:col-span-2")

        h2(class="text-2xl font-bold mb-4")
          | Daily Journal

        textarea(
          rows="8"
          placeholder="Write about your day..."
          class="w-full border rounded-xl p-4"
        )

    // Daily Insights
    section(class="bg-white rounded-3xl shadow-xl p-6 mt-8")

      h2(class="text-2xl font-bold mb-6")
        | Daily Insights

      div(class="grid md:grid-cols-2 gap-4")

        div(class="bg-purple-50 rounded-xl p-4")
          h3(class="font-semibold mb-2")
            | Mood Trend
          p Mood improved throughout the day.

        div(class="bg-blue-50 rounded-xl p-4")
          h3(class="font-semibold mb-2")
            | Hydration
          p Water goal is 75% complete.

        div(class="bg-green-50 rounded-xl p-4")
          h3(class="font-semibold mb-2")
            | Nutrition
          p Three meals have been recorded today.

        div(class="bg-yellow-50 rounded-xl p-4")
          h3(class="font-semibold mb-2")
            | Supplements
          p All scheduled supplements have been logged.
</template>

<script setup>
// Later you can import:
//
// import MoodChart from '../components/MoodChart.vue'
// import { useMoodStore } from '../stores/moodStore'
//
// Replace the placeholder with <MoodChart /> when ready.
</script>