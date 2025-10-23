<script setup lang="ts">
import BlurReveal from "../ui/blur-reveal/BlurReveal.vue"
</script>
<template>
  <div>
    <BlurReveal :delay="0.2" :duration="0.75">
      <div class="flex items-baseline gap-4">
        <h2 class="text-4xl">
          my <span class="font-bold text-pink-gradient">projects</span>
        </h2>
        <span class="font-light text-sm">view more...</span>
      </div>
      <div class="mt-4">project item</div>
    </BlurReveal>
  </div>
</template>
<style lang="scss" scoped></style>
