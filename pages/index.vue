<template>
  <div>
    <NuxtLayout name="landing">
      <HomepageHeader />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
  layoutTransition: {
    name: 'layout-fade'
  }
});

useServerSeoMeta({
  title: null,
  ogTitle: null,
  description:
    'This is my personal Portfolio Website. I’m a software engineer based in Raleigh, NC specializing in building Full-Stack applications, transforming complex problems into elegant solutions. Currently working with Vue, Nuxt, Python, and AWS.',
  ogDescription:
    'This is my personal Portfolio Website. I’m a software engineer based in Raleigh, NC specializing in building Full-Stack applications, transforming complex problems into elegant solutions. Currently working with Vue, Nuxt, Python, and AWS.',
  ogImage: 'https://luis-kellermann.com/favicon.ico',
  robots: 'index, follow'
});
</script>
