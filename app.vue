<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <UNotifications />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Luis Kellermann | Software Engineer Portfolio Website`
      : 'Luis Kellermann | Software Engineer Portfolio Website';
  }
});
</script>
