<script setup lang="ts">
import { Icon } from "@iconify/vue"

import type { TechnologyItem } from "@/global/constInfo"

const props = defineProps<{
  technology: TechnologyItem
}>()
</script>
<template>
  <div
    class="border-dark-gradient rounded-full p-2 text-base text-(--dark-color) font-bold max-w-fit flex items-center gap-2"
  >
    <Icon
      :icon="technology.iconName"
      :class="technology.className ?? ''"
      class="text-xl"
    />
    <span>{{ technology.name }}</span>
  </div>
</template>
<style lang="scss" scoped></style>
