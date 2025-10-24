<script setup lang="ts">
import type { Project } from "./projectCard.vue"
import ProjectCard from "./projectCard.vue"
import BlurReveal from "../ui/blur-reveal/BlurReveal.vue"

const props = defineProps<{
  projects: Project[]
}>()
</script>
<template>
  <div class="px-12 md:px-64 min-h-screen">
    <BlurReveal :delay="0.2" :duration="0.75">
      <h1 class="text-4xl font-bold">
        my <span class="text-pink-gradient">projects</span>
      </h1>
      <div class="my-8 flex flex-col gap-8">
        <ProjectCard v-for="project in projects" :project="project" />
      </div>
    </BlurReveal>
  </div>
</template>
<style lang="scss" scoped></style>
