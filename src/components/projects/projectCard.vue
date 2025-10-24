<script setup lang="ts">
import { Icon } from "@iconify/vue"
import TechnologyDisplay from "../technologies/technologyDisplay.vue"
import GradientButton from "../ui/gradient-button/GradientButton.vue"
import { computed, ref } from "vue"

export interface Project {
  id: string
  data: {
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
}

const props = defineProps<{
  project: Project
  isSmall?: boolean
}>()

const projDateRef = ref<HTMLElement | null>(null)

const formattedDate = computed(() => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: "UTC",
    month: "short",
    year: "numeric",
  }
  return new Intl.DateTimeFormat("en-US", options)
    .format(props.project.data.pubDate)
    .toLowerCase()
})
</script>
<template>
  <div
    ref="projDateRef"
    @mouseover="projDateRef.style.transform = `translatey(-0.25rem)`"
    @mouseleave="projDateRef.style.transform = `translatey(0rem)`"
    class="transition-all duration-200 ease-in-out"
  >
    <p class="font-bold text-dark-gradient ml-4">
      {{ formattedDate }}
    </p>
    <div
      class="border-pink-gradient rounded-3xl flex items-center gap-4 flex-col"
      :class="isSmall ? ' max-w-sm p-4' : ' md:flex-row p-6'"
    >
      <div class="flex-2 flex flex-col items-baseline gap-4">
        <div class="flex items-center gap-2 text-xl font-bold">
          <a
            :href="`/projects/${project.id}`"
            class="text-pink-gradient underline"
            >{{ project.data.title }}</a
          >
          <a :href="project.data.github" target="_blank" class="inline-block"
            ><Icon icon="uil:github"
          /></a>
          <a
            v-if="project.data.url && isSmall"
            :href="project.data.url"
            target="_blank"
            class="inline-block"
          >
            <Icon icon="famicons:open" />
          </a>
        </div>
        <div>
          <TechnologyDisplay
            :technologies="project.data.technologies"
            class="text-base"
            :is-small="isSmall"
          />
        </div>
        <div class="max-w-xs my-4">
          {{ project.data.description }}
        </div>
        <a
          v-if="project.data.url && !isSmall"
          :href="project.data.url"
          target="_blank"
          class="inline-block"
        >
          <GradientButton
            bg-color="var(--dark-gradient)"
            :border-radius="50"
            class="text-(--white-color) font-medium cursor-pointer"
            >view live demo</GradientButton
          >
        </a>
      </div>
      <div class="flex-3 rounded-3xl h-fit overflow-hidden shadow-md">
        <img :src="project.data.image.url" :alt="project.data.image.alt" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
a {
  transition: all 0.2s ease;
  &:hover {
    filter: drop-shadow(0 0 4px #f39a9d69);
  }
}
</style>
