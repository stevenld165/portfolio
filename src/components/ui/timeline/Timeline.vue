<template>
  <div
    ref="timelineContainerRef"
    class="hidden md:block w-full md:px-10 dark:bg-neutral-950"
  >
    <div ref="timelineRef" class="relative z-0 mx-auto max-w-5xl pb-20">
      <div
        v-for="(item, index) in props.items"
        :key="item.id + index"
        class="flex justify-start pt-10 md:gap-10 md:pt-30 flex-wrap"
      >
        <div
          class="sticky top-40 z-40 flex flex-col items-center self-start md:flex-row flex-2"
        >
          <div
            class="absolute left-3 flex size-10 items-center justify-center rounded-full md:left-3 dark:bg-black"
          >
            <div
              class="size-4 rounded-full border border-neutral-300 bg-(--dark-color) p-2 dark:border-neutral-700 dark:bg-neutral-800"
            />
          </div>
          <h3 class="text-xl font-bold 0 md:block md:pl-20 md:text-5xl">
            <slot :name="index"></slot>
          </h3>
        </div>
        <div class="flex-3">
          <slot :name="item.id"></slot>
        </div>
      </div>
      <div
        :style="{
          height: height + 'px',
        }"
        class="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
      >
        <Motion
          as="div"
          :style="{
            height: heightTransform,
            opacity: opacityTransform,
          }"
          class="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-[#F39A9D] from-0% via-[#713DB1] via-10% to-transparent"
        >
        </Motion>
      </div>
    </div>
  </div>
  <div class="block md:hidden">
    <div
      v-for="(item, index) in props.items"
      :key="item.id + index"
      class="flex justify-start pt-10 gap-4 md:gap-10 md:pt-40 flex-wrap"
    >
      <h3 class="text-xl font-bold 0 md:block md:pl-20 md:text-5xl">
        <slot :name="index"></slot>
      </h3>
      <div class="flex-3">
        <slot :name="item.id"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Motion, useScroll, useTransform } from "motion-v"
import { nextTick, onMounted, ref, watch, type HTMLAttributes } from "vue"

interface Props {
  containerClass?: HTMLAttributes["class"]
  class?: HTMLAttributes["class"]
  items?: {
    id: string
    label?: string
  }[]
  title?: string
  description?: string
}

const props = withDefaults(defineProps<Props>(), {
  items: () => [],
})

const timelineContainerRef = ref<HTMLElement | null>(null)
const timelineRef = ref<HTMLElement | null>(null)
const height = ref(0)

onMounted(async () => {
  await nextTick()
  if (timelineRef.value) {
    const rect = timelineRef.value.getBoundingClientRect()
    height.value = rect.height
  }
})

const { scrollYProgress } = useScroll({
  target: timelineRef,
  offset: ["start 10%", "end 50%"],
})

const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])
const heightTransform = ref(useTransform(scrollYProgress, [0, 1], [0, 0]))

watch(height, (newHeight) => {
  heightTransform.value = useTransform(scrollYProgress, [0, 1], [0, newHeight])
})
</script>
