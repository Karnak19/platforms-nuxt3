<template>
  <div>
    <img :src="image[0].image.url" alt="" class="w-full" />
  </div>
</template>

<script lang="ts" setup>
import { AdvertisementSection } from "@origins-digital/types/ott";

const { image } = defineProps<{
  image: AdvertisementSection["image"];
}>();
</script>
