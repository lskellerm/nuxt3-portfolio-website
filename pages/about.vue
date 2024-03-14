<template>
  <div class="lg:flex justify-center 2xl:justify-start items-start">
    <AboutMeHeader class="2xl:basis" />
    <NuxtImg
      src="/headshot-bw-removed.png"
      alt="Headshot Photo No Background"
      quality="100"
      class="rounded-full lg:p-10 mb-20 lg:mt-5 2xl:basis-1/4"
      sizes="400 lg:625px"
      :placeholder="400"
    />
  </div>
</template>

<script setup lang="ts">
useServerSeoMeta({
  title: 'About Me | Luis Kellermann',
  ogTitle: 'About Me | Luis Kellermann',
  description:
    'This is my personal Portfolio Website. I’m a software engineer based in Raleigh, NC specializing in building Full-Stack applications, transforming complex problems into elegant solutions. Currently working with Vue, Nuxt, Python, and AWS.',
  ogDescription:
    'This is my personal Portfolio Website. I’m a software engineer based in Raleigh, NC specializing in building Full-Stack applications, transforming complex problems into elegant solutions. Currently working with Vue, Nuxt, Python, and AWS.',
  ogImage: 'https://luis-kellermann.com/favicon.ico',
  robots: 'index, follow'
});
</script>
