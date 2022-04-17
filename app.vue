<template>
  <div class="flex flex-col min-h-screen">
    <Header :header="webConfig.header" />
    <main class="container mx-auto grow my-5">
      <NuxtPage />
    </main>
    <Footer :footer="webConfig.footer" />
  </div>
</template>

<script setup lang="ts">
import "tailwindcss/tailwind.css";

const { data: webConfig } = await useKenticoWebConfig();

useHead({
  link: [
    {
      rel: "icon",
      type: webConfig.value.header.favicon.type,
      href: webConfig.value.header.favicon.url,
    },
  ],
});
</script>
