<script lang="ts">
export default {
  layout: "default",
};
</script>
<script lang="ts" setup>
import { SectionContent } from "@origins-digital/types/ott";

const { section } = defineProps<{
  section: SectionContent;
}>();
</script>

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

    <SectionGrid
      v-else-if="section._kenticoItemType === 'section_dynamic_grid'"
      :items="section.items"
    />

    <div v-else class="text-xs overflow-hidden border-2 border-primary">
      <pre>
        {{ section }}
      </pre>
    </div>
  </div>
</template>
