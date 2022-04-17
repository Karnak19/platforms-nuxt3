<template>
  <div v-html="text"></div>
</template>

<script lang="ts" setup>
import { SectionCustomText } from "@origins-digital/types/ott";

type Props = {
  text: SectionCustomText["text"];
};
const { text } = defineProps<Props>();
</script>
