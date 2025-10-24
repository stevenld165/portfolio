<script setup lang="ts">
import { Icon } from "@iconify/vue"

import type { TechnologyItem } from "@/global/constInfo"

const props = defineProps<{
  technology: TechnologyItem
  isSmall?: boolean
}>()
</script>
<template>
  <div
    class="technology-tile border-dark-gradient rounded-full text-(--dark-color) font-bold max-w-fit flex items-center p-2"
    :class="isSmall ? ' text-xs gap-1' : 'text-sm gap-2'"
  >
    <Icon
      :icon="technology.iconName"
      :class="technology.className ?? ''"
      class="text-lg"
    />
    <span>{{ technology.name }}</span>
  </div>
</template>
<style lang="scss" scoped>
.technology-tile {
  transition: all 0.3s ease;
  &:hover {
    padding: calc(var(--spacing) * 2) calc(var(--spacing) * 3);
  }
}
</style>
