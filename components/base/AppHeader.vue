<template>
  <header class="flex flex-col items-center p-5">
    <h1 class="w-full text-center text-3xl">{{ props.heading }}</h1>
  </header>
</template>
<script setup lang="ts">
const props = defineProps<{
  heading: string;
  subheading?: string;
}>();
</script>
