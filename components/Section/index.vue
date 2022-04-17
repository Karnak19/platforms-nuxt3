<template>
  <div class="my-5">
    <SectionCarousel
      v-if="section._kenticoItemType === 'section_static_carousel'"
      :items="section.items"
      :title="section.title"
    />

    <SectionSlider
      v-else-if="section._kenticoItemType === 'section_static_slider'"
      :items="section.items"
    />

    <SectionAd
      v-else-if="section._kenticoItemType === 'section_static_ad'"
      :image="section.image"
    />

    <SectionCustomText
      v-else-if="section._kenticoItemType === 'section_custom_text'"
      :text="section.text"
    />

    <div v-else class="text-xs overflow-hidden border-2 border-primary">
      <pre>
      {{ JSON.stringify(section, null, 2) }}
    </pre
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SectionContent } from "@origins-digital/types/ott";

const { section } = defineProps<{
  section: SectionContent;
}>();
</script>
