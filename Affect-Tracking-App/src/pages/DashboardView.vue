<template lang="pug">
main(class="min-h-screen bg-slate-300 w-full")

  div(class="w-full px-6 py-8")

    // Header
    section(
      class="bg-purple-700 text-white rounded-2xl shadow-lg p-8 mb-8"
    )

      h1(class="text-5xl font-bold")
        | Affect Tracking Dashboard

      p(class="mt-3 text-lg opacity-90")
        | Track moods, nutrition, hydration, supplements, and wellness habits.

    // Dashboard Grid
    section(class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8")

      // Mood Tracker
      div(class="bg-white rounded-2xl shadow-lg p-6 min-h-[300px]")

        h2(class="text-2xl font-bold mb-4")
          | Mood Tracker

        input(
          type="text"
          placeholder="Enter your name"
          class="w-full border rounded-lg p-3 mb-4"
        )

        select(class="w-full border rounded-lg p-3 mb-4")
          option(value="7am") 7am
          option(value="11am") 11am
          option(value="3pm") 3pm
          option(value="7pm") 7pm

        select(class="w-full border rounded-lg p-3 mb-4")
          option(value="happy") Happy 😀
          option(value="neutral") Neutral 😑
          option(value="sad") Sad 😒

        button(
          class="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700"
        )
          | Record Mood

      // Mood Legend
      div(class="bg-white rounded-2xl shadow-lg p-6 min-h-[300px]")

        h2(class="text-2xl font-bold mb-4")
          | Mood Legend

        ul(class="space-y-4")

          li(class="flex items-center gap-4")
            span(class="text-3xl") 😀😀😀
            span(class="font-medium") Happy

          li(class="flex items-center gap-4")
            span(class="text-3xl") 😑😑😑
            span(class="font-medium") Neutral

          li(class="flex items-center gap-4")
            span(class="text-3xl") 😒😒😒
            span(class="font-medium") Sad

      // Food Tracker
      div(class="bg-white rounded-2xl shadow-lg p-6 min-h-[300px]")

        h2(class="text-2xl font-bold mb-4")
          | Food Intake

        input(
          type="text"
          placeholder="Breakfast"
          class="w-full border rounded-lg p-3 mb-3"
        )

        input(
          type="text"
          placeholder="Lunch"
          class="w-full border rounded-lg p-3 mb-3"
        )

        input(
          type="text"
          placeholder="Dinner"
          class="w-full border rounded-lg p-3"
        )

      // Water Tracker
      div(class="bg-white rounded-2xl shadow-lg p-6 min-h-[300px]")

        h2(class="text-2xl font-bold mb-4")
          | Water Intake

        p(class="text-lg font-medium mb-4")
          | 6 / 8 Glasses

        div(class="w-full bg-slate-200 rounded-full h-5")
          div(
            class="bg-blue-500 h-5 rounded-full"
            style="width:75%"
          )

      // Supplements
      div(class="bg-white rounded-2xl shadow-lg p-6 min-h-[300px]")

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
      div(class="bg-white rounded-2xl shadow-lg p-6 min-h-[300px]")

        h2(class="text-2xl font-bold mb-4")
          | Journal

        textarea(
          rows="8"
          placeholder="How are you feeling today?"
          class="w-full border rounded-lg p-4"
        )

    // Daily Insights
    section(
      class="bg-white rounded-2xl shadow-lg p-6 mt-8"
    )

      h2(class="text-2xl font-bold mb-4")
        | Daily Insights

      ul(class="space-y-3")

        li(class="bg-purple-50 p-4 rounded-lg")
          | Highest mood recorded at 7pm

        li(class="bg-purple-50 p-4 rounded-lg")
          | Water intake goal nearly reached

        li(class="bg-purple-50 p-4 rounded-lg")
          | Mood improved throughout the day

        li(class="bg-purple-50 p-4 rounded-lg")
          | Supplements recorded successfully
</template>

<script setup>
// Dashboard page
</script>