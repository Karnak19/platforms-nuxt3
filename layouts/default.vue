<template>
  <div class="flex flex-col">
    <Header :header="webConfig.header" />
    <main class="grow container mx-auto">
      <slot />
    </main>
    <Footer :footer="webConfig.footer" />
  </div>
</template>

<script setup>
import "tailwindcss/tailwind.css";

const { data: webConfig } = await useKenticoWebConfig();
</script>
