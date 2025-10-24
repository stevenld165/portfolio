<script setup lang="ts">
import CardBody from "../ui/card-3d/CardBody.vue"
import CardContainer from "../ui/card-3d/CardContainer.vue"
import CardItem from "../ui/card-3d/CardItem.vue"

const getKirby = async (): Promise<{ ability: string; img: string }> => {
  try {
    const response = await fetch("https://mathisfun.unibutton.com/api")

    if (!response.ok) throw new Error(`Response status: ${response.status}`)

    return await response.json()
  } catch (err) {
    console.error(err)

    return {
      ability: "",
      img: "",
    }
  }
}

const kirby = await getKirby()
</script>
<template>
  <a href="https://kirbyotd.netlify.app/" target="_blank">
    <CardContainer>
      <CardBody
        class="group/card relative size-auto p-8 bg-pink-gradient rounded-2xl flex flex-col items-center gap-4 shadow-lg"
      >
        <div class="flex items-center gap-2">
          <CardItem
            as="h3"
            :translate-z="15"
            class="text-2xl text-(--white-color) font-medium"
          >
            today's
          </CardItem>
          <CardItem
            as="h3"
            :translate-z="25"
            class="text-2xl text-dark-gradient font-bold"
          >
            kirby of the day
          </CardItem>
        </div>
        <CardItem
          :translate-z="70"
          class="max-w-sm max-h-xs bg-(--white-color) rounded-2xl overflow-hidden shadow-md"
        >
          <img :src="kirby.img" />
        </CardItem>
        <CardItem
          as="p"
          :translate-z="75"
          class="text-base text-(--white-color) font-bold"
        >
          {{ kirby.ability.toLowerCase() }} kirby
        </CardItem>
      </CardBody>
    </CardContainer>
  </a>
</template>
<style lang="scss" scoped>
div {
  transform-style: preserve-3d;
}
</style>
