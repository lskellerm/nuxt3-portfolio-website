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

<style>
.page-slide-enter-active {
  transition: all 0.3s ease-out;
}

.page-slide-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.page-slide-enter-from,
.page-slide-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.layout-fade-enter-active,
.layout-fade-leave-active {
  transition: all 0.4s;
}
.layout-fade-enter-from,
.layout-fade-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
