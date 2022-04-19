<template>
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div v-for="item in items" class="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img :src="item.poster" alt="Movie" class="h-full object-cover" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">New movie is released!</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Watch</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { GridSectionDTO } from "@origins-digital/types/ott";

const props = defineProps<{
  items: GridSectionDTO["items"];
}>();
</script>
