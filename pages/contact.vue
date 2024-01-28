<template>
  <div class="flex flex-col justify-center items-center p-5 pb-16">
    <ContactMeSection />
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'Contact Me | Luis Kellermann',
  ogTitle: 'Contact Me | Luis Kellermann',
  description:
    'This is my personal Portfolio Website. I’m a software engineer based in Raleigh, NC specializing in building Full-Stack applications, transforming complex problems into elegant solutions. Currently working with Vue, Nuxt, Python, and AWS.',
  ogDescription:
    'This is my personal Portfolio Website. I’m a software engineer based in Raleigh, NC specializing in building Full-Stack applications, transforming complex problems into elegant solutions. Currently working with Vue, Nuxt, Python, and AWS.',
  ogImage: 'https://luis-kellermann.com/favicon.ico',
  robots: 'index, follow'
});
</script>
