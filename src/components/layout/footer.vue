<script setup lang="ts">
import { PERSONAL_INFO } from "@/global/constInfo"
import { Icon } from "@iconify/vue"
</script>
<template>
  <footer
    class="w-full bg-dark-gradient px-12 py-8 font-light text-(--white-color) flex justify-between items-center"
  >
    <div class="sm:flex-1"></div>
    <div class="flex-5 flex items-center justify-center gap-2">
      created by <span class="font-normal">steven duong</span>
    </div>
    <div
      class="flex-1 float-right flex gap-2 items-center justify-end text-2xl"
    >
      <a :href="PERSONAL_INFO.github"><Icon icon="uil:github" /></a>
      <a :href="PERSONAL_INFO.linkedin"><Icon icon="mdi:linkedin" /></a>
      <a :href="`mailto:${PERSONAL_INFO.email}`"
        ><Icon icon="material-symbols:mail-rounded"
      /></a>
    </div>
  </footer>
</template>
<style lang="scss" scoped></style>
