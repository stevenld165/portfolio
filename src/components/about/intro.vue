<script setup lang="ts">
import BlurReveal from "../ui/blur-reveal/BlurReveal.vue"
import GradientButton from "../ui/gradient-button/GradientButton.vue"
import { Icon } from "@iconify/vue"

import { PERSONAL_INFO } from "@/global/constInfo"
</script>

<template>
  <div class="mt-48 min-h-72">
    <BlurReveal :delay="0.2" :duration="0.75">
      <div class="flex items-baseline gap-2">
        <h1 class="text-5xl">hi, i'm</h1>
        <h1 words="steven duong" class="text-5xl text-pink-gradient font-bold">
          steven duong
        </h1>
      </div>

      <p class="text-3xl max-w-xl font-light mt-2">
        a software engineering student at UTD graduating in spring of 2026
      </p>
      <a :href="PERSONAL_INFO.github" target="_blank" class="inline-block">
        <GradientButton
          bg-color="var(--dark-gradient)"
          :border-radius="50"
          class="text-(--white-color) font-medium mt-8 cursor-pointer"
        >
          my github <Icon icon="uil:github" class="ml-2 text-(--white-color)" />
        </GradientButton>
      </a>
    </BlurReveal>
  </div>
</template>

<style lang="scss" scoped></style>
