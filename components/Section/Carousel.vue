<template>
  <div>
    <div class="py-5">
      <h2 class="text-6xl uppercase font-bold text-primary-focus">
        {{ title }}
      </h2>
    </div>
    <div class="carousel gap-2 p-2 h-96">
      <div
        v-for="item in items"
        :key="item._kenticoId"
        class="card w-96 bg-base-100 shadow-xl image-full carousel-item"
      >
        <figure>
          <img :src="item.poster" :alt="item.name" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ item.name }}</h2>
          <p>
            {{ item.description }}
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { CarouselSectionDTO } from "@origins-digital/types/ott";

type Props = {
  items: CarouselSectionDTO["items"];
  title: CarouselSectionDTO["title"];
};

const { items, title } = defineProps<Props>();
</script>
