<template>
  <div class="flex flex-col justify-center items-center px-5 py-2 pb-16">
    <AppHeader
      heading="Current Skills"
      subheading="*Although I'm always looking to learn new things!*"
      class="mb-10"
    />
    <SkillsSection />
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Skills | Luis Kellermann',
  ogTitle: 'Skills | Luis Kellermann',
  description:
    'This is my personal Portfolio Website. I’m a software engineer based in Raleigh, NC specializing in building Full-Stack applications, transforming complex problems into elegant solutions. Currently working with Vue, Nuxt, Python, and AWS.',
  ogDescription:
    'This is my personal Portfolio Website. I’m a software engineer based in Raleigh, NC specializing in building Full-Stack applications, transforming complex problems into elegant solutions. Currently working with Vue, Nuxt, Python, and AWS.',
  ogImage: 'https://luis-kellermann.com/favicon.ico',
  robots: 'index, follow'
});
</script>
