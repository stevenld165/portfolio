<script setup lang="ts">
import TechnologyTile from "./technologyTile.vue"
import { TECHNOLOGIES } from "@/global/constInfo"

const props = defineProps<{
  technologies: string[]
}>()
</script>
<template>
  <div class="rounded-3xl bg-(--white-color) p-8">
    <h2 class="text-3xl font-bold text-(--dark-color)">tech stack</h2>
    <div class="flex flex-wrap gap-2 mt-4 max-w-3xl">
      <TechnologyTile
        v-for="technology in technologies"
        :technology="TECHNOLOGIES[technology] ?? TECHNOLOGIES['java']"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
