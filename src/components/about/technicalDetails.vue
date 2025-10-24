<script setup lang="ts">
import TechnologyDisplay from "../technologies/technologyDisplay.vue"
import { PERSONAL_TECHNOLOGIES } from "@/global/constInfo"
</script>

<template>
  <div
    class="bg-dark-gradient px-12 py-24 flex justify-evenly flex-wrap gap-8 items-center text-(--white-color)"
  >
    <div class="rounded-3xl bg-(--white-color) p-8">
      <h2 class="text-3xl font-bold text-pink-gradient">technical skills</h2>
      <TechnologyDisplay class="mt-4" :technologies="PERSONAL_TECHNOLOGIES" />
    </div>

    <div class="text-2xl max-w-xl text-center font-light flex flex-col gap-4">
      <p>
        i'm a <span class="font-bold">fast-learning</span>,
        <span class="font-bold">curious </span>software engineer with interests
        in full-stack development.
      </p>
      <p>
        i love <span class="font-bold">problem solving</span> and exposing
        myself to new technologies and experiences when i can.
      </p>
      <p>
        most experienced with <span class="font-bold">vue</span> and
        <span class="font-bold">.net</span> development, but also have
        experience with react, java, python, php, and more!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
