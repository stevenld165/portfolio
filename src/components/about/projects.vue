<script setup lang="ts">
import type { Project } from "../projects/projectCard.vue"
import ProjectCard from "../projects/projectCard.vue"
import BlurReveal from "../ui/blur-reveal/BlurReveal.vue"

const props = defineProps<{
  projects: Project[]
}>()
</script>
<template>
  <div>
    <BlurReveal :delay="0.2" :duration="0.75">
      <div class="flex items-baseline gap-4">
        <h2 class="text-4xl">
          my <span class="font-bold text-pink-gradient">newest projects</span>
        </h2>
        <a class="font-light text-sm" href="/projects">view more...</a>
      </div>
      <div class="mt-4 flex items-center justify-evenly flex-wrap gap-2">
        <ProjectCard v-for="project in projects" :project="project" is-small />
      </div>
    </BlurReveal>
  </div>
</template>
<style lang="scss" scoped></style>
