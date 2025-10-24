<script setup lang="ts">
import TechnologyDisplay from "../technologies/technologyDisplay.vue"
import { Icon } from "@iconify/vue"

interface ProjectFrontmatter {
  title: string
  pubDate: Date
  description: string
  technologies: string[]
  image: {
    url: string
    alt: string
  }
  github: string
  url?: string
}

const { frontmatter } = defineProps<{
  frontmatter: ProjectFrontmatter
}>()

console.log(frontmatter)
</script>
<template>
  <div class="border-pink-gradient p-6 rounded-2xl flex flex-col gap-4 mb-8">
    <div class="flex items-center gap-4 text-3xl">
      <h1 class="text-3xl text-pink-gradient font-bold">
        {{ frontmatter.title }}
      </h1>
      <a :href="frontmatter.github" target="_blank" class="inline-block"
        ><Icon icon="uil:github"
      /></a>
      <a
        v-if="frontmatter.url"
        :href="frontmatter.url"
        target="_blank"
        class="inline-block"
      >
        <Icon icon="famicons:open" />
      </a>
    </div>

    <TechnologyDisplay :technologies="frontmatter.technologies" />
    <img
      :src="frontmatter.image.url"
      :alt="frontmatter.image.alt"
      class="rounded-2xl max-w-3xl shadow-md"
    />
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
h2 {
  font-size: x-large;
  font-weight: bold;
  margin-top: 2rem;
}

p {
  margin-top: 1rem;
}

em {
  font-weight: light;
}

a {
  font-weight: medium;
  transition: all 0.2s ease;
  &:hover {
    filter: drop-shadow(0 0 4px #f39a9d69);
  }
}

ul {
  list-style: circle;
  margin-left: 3rem;
}
</style>
