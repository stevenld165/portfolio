<script setup lang="ts">
import { computed } from "vue"
import NavButton from "./navButton.vue"

const props = defineProps<{
  page: string
}>()

interface Page {
  pageName: string
  path: string
}

const PAGES: Page[] = [
  {
    pageName: "about",
    path: "/",
  },
  {
    pageName: "projects",
    path: "/projects",
  },
]

const navButtons = computed(() =>
  PAGES.map((page) => ({
    isSelected: page.pageName == props.page ? true : false,
    ...page,
  }))
)
</script>
<template>
  <header class="w-full py-4 px-24 flex items-center justify-end gap-2">
    <NavButton
      v-for="button in navButtons"
      :is-selected="button.isSelected"
      :path="button.path"
      >{{ button.pageName }}</NavButton
    >
  </header>
</template>
<style lang="scss" scoped></style>
