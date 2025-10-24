<script setup lang="ts">
import TechnologyDisplay from "../technologies/technologyDisplay.vue";
import { PERSONAL_TECHNOLOGIES } from "@/global/constInfo";
</script>

<template>
  <div
    class="bg-dark-gradient px-12 py-24 flex justify-evenly flex-wrap gap-8 items-center text-(--white-color)"
  >
    <div class="rounded-3xl bg-(--white-color) p-8">
      <h2 class="text-3xl font-bold text-pink-gradient">technical skills</h2>
      <TechnologyDisplay class="mt-4" :technologies="PERSONAL_TECHNOLOGIES" />
    </div>

    <div class="text-2xl max-w-xl text-center font-light">
      "asdlkfjasdlfkjasdiofj awsesladj jklas ofjiaskljf owisef kljsdfj iosefkl
      jasdiojfoiesla jlisdjfio jselakjsdfoj oeiasjkldf iojesodjf ioe"
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
