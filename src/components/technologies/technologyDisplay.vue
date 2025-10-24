<script setup lang="ts">
import TechnologyTile from "./technologyTile.vue";
import { TECHNOLOGIES } from "@/global/constInfo";

const props = defineProps<{
  technologies: string[];
  isSmall?: boolean;
}>();
</script>
<template>
  <div class="flex flex-wrap gap-2 max-w-3xl">
    <TechnologyTile
      v-for="technology in technologies"
      :technology="TECHNOLOGIES[technology] ?? TECHNOLOGIES['java']"
      :is-small="isSmall"
    />
  </div>
</template>
<style lang="scss" scoped></style>
