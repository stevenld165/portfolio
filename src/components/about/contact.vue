<script setup lang="ts">
import BlurReveal from "../ui/blur-reveal/BlurReveal.vue"
import { Icon } from "@iconify/vue"
import { PERSONAL_INFO } from "@/global/constInfo"
</script>
<template>
  <div>
    <BlurReveal :delay="0.2" :duration="0.75">
      <hr />
      <div class="min-h-96 flex flex-col gap-8 items-center justify-center">
        <h2 class="text-4xl font-bold text-pink-gradient">contact me!</h2>
        <a
          class="flex gap-2 items-center text-3xl font-light"
          :href="`mailto:${PERSONAL_INFO.email}`"
          ><Icon
            icon="material-symbols:mail-rounded"
            class="text-(--dark-color) text-4xl"
          />stevenld165@gmail.com
        </a>
      </div>
    </BlurReveal>
  </div>
</template>
<style lang="scss" scoped></style>
