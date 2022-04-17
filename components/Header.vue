<template>
  <div class="navbar bg-neutral text-neutral-content">
    <div class="flex-1">
      <NuxtLink
        to="/"
        class="btn btn-ghost normal-case text-xl"
        title="homepage"
      >
        <img :src="header.logo.url" class="h-6" />
      </NuxtLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li v-for="item in header.menuItems">
          <NuxtLink
            active-class="bg-primary text-primary-content"
            :to="item.redirectionTarget"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Header } from "@origins-digital/types/ott";

const { header } = defineProps<{
  header: Header;
}>();
</script>
