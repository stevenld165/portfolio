<script setup lang="ts">
import TechnologyDisplay from "../technologies/technologyDisplay.vue"
import { PERSONAL_TECHNOLOGIES } from "@/global/constInfo"
</script>

<template>
  <div
    class="bg-dark-gradient px-12 py-24 flex justify-evenly flex-wrap gap-8 items-center text-(--white-color)"
  >
    <TechnologyDisplay :technologies="PERSONAL_TECHNOLOGIES" />
    <div class="text-2xl max-w-xl text-center font-light">
      "asdlkfjasdlfkjasdiofj awsesladj jklas ofjiaskljf owisef kljsdfj iosefkl
      jasdiojfoiesla jlisdjfio jselakjsdfoj oeiasjkldf iojesodjf ioe"
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
