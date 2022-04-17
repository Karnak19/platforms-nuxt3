<template>
  <div class="carousel w-full">
    <div v-for="item in items" :id="item.itemId" class="carousel-item w-full">
      <img :src="item.poster" class="w-full" />
    </div>
  </div>
  <div class="flex justify-center w-full py-2 gap-2">
    <a
      v-for="(item, i) in items"
      :href="'#' + item.itemId"
      class="btn btn-xs"
      >{{ i }}</a
    >
  </div>
</template>

<script lang="ts" setup>
import { OriginsVideoCard, SlideSection } from "@origins-digital/types/ott";

const { items } = defineProps<{
  // items: SlideSection["items"];
  items: OriginsVideoCard[];
}>();
</script>
