<template>
  <Section v-for="section in home.components" :section="section" />
</template>

<script setup lang="ts">
const { data: home } = await useKenticoPage("home");
</script>
