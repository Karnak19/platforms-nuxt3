<template>
  <div>
    <Head>
      <Title>
        {{ home.title }}
      </Title>
    </Head>
    <Section
      v-if="home"
      v-for="section in home.components"
      :section="section"
    />
    <div v-else class="alert alert-error shadow-lg">
      <div>
        <span>Error! can't load the page.</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { params } = useRoute();
const { data: home } = await useKenticoPage(params.codename as string);
</script>
