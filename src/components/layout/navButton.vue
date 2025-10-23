<script setup lang="ts">
const { isSelected = false } = defineProps<{
  path: string
  isSelected?: boolean
}>()
</script>
<template>
  <a
    class="rounded-full py-2 px-4 text-base font-bold text-(--white-color)"
    :class="{ 'bg-dark-gradient': !isSelected, 'bg-pink-gradient': isSelected }"
    :href="path"
  >
    <slot>text</slot>
  </a>
</template>
<style lang="scss" scoped>
a {
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 0 0 4px #f39a9d;
  }
}
</style>
