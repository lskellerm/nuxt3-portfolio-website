<template>
  <header class="flex flex-col items-center mt-10 gap-y-2">
    <h1 class="font-heading text-3xl lg:text-5xl">{{ props.heading }}</h1>
    <h2
      v-if="props.subheading"
      class="text-center text-sm font-sans lg:tracking-wider"
    >
      {{ props.subheading }}
    </h2>
  </header>
</template>
<script setup lang="ts">
const props = defineProps<{
  heading: string;
  subheading?: string;
}>();
</script>
