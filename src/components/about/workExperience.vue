<script setup lang="ts">
import BlurReveal from "../ui/blur-reveal/BlurReveal.vue"
import { PERSONAL_WORK_EXPERIENCE } from "@/global/constInfo"
import Timeline from "../ui/timeline/Timeline.vue"
import { computed } from "vue"

const data = computed(() =>
  PERSONAL_WORK_EXPERIENCE.map((item) => ({
    id: item.employer + item.title,
    ...item,
  }))
)

import { marked } from "marked"
</script>
<template>
  <div class="">
    <BlurReveal :delay="0.2" :duration="0.75">
      <h2 class="text-4xl">
        my <span class="font-bold text-pink-gradient">experience</span>
      </h2>

      <div class="mt-4">
        <Timeline :items="data" class="bg-(--white-color)">
          <template
            v-for="(item, index) in data"
            :key="item.id + 'template'"
            #[index]
          >
            <div class="flex flex-col">
              <h3 class="text-2xl text-pink-gradient">{{ item.title }}</h3>
              <h4 class="text-xl">{{ item.employer }}</h4>
              <p class="text-xl font-normal">
                {{ item.start }} - {{ item.end }}
              </p>
            </div>
          </template>
          <template
            v-for="(item, index) in data"
            :key="item.id + 'template'"
            #[item.id]
          >
            <p class="">
              <span
                class="work-experience-desc"
                v-html="marked.parse(item.desc)"
              >
              </span>
            </p>
          </template>
        </Timeline>
      </div>
    </BlurReveal>
  </div>
</template>
<style lang="scss">
.work-experience-desc ul {
  list-style: unset;
  margin-left: 1rem;
}
</style>
