<template>
  <footer class="fixed bottom-0 left-0 z-20 bg-text w-full">
    <div
      class="flex flex-col bg-text justify-center items-start md:items-center h-1/6 lg:h-1/5 p-4 lg:py-26 gap-y-2 lg:px-10 2xl:px-32"
    >
      <LazyUDivider
        :ui="{
          strategy: 'override',
          border: {
            base: 'border-background',
            size: {
              horizontal: 'border-t-2 mt-5 '
            }
          }
        }"
      />
      <div
        class="flex justify-center items-center p-2 lg:px-16 gap-x-4 md:gap-x-20 lg:gap-x-20 2xl:gap-x-96"
      >
        <NuxtImg
          src="/logo-bw.jpg"
          height="50"
          width="50"
          alt="logo"
          class="lg:w-20 lg:h-20"
        />
        <div class="flex flex-col justify-center items-center gap-y-2 2xl:grow">
          <div
            class="flex items-center gap-x-4 lg:gap-x-10 xl:gap-x-16 2xl:gap-x-32"
          >
            <nuxt-link
              v-for="(link, index) in links"
              :key="index"
              :to="link.to"
              class="text-background font-sans text-xs md:text-lg xl:text-2xl mr-1 md:uppercase lg:tracking-wider"
              >{{ link.label }}
            </nuxt-link>
          </div>
          <p
            class="text-background font-sans text-[10px] md:text-lg xl:text-xl"
          >
            © 2024 Luis Kellermann. All rights reserved
          </p>
        </div>
        <div class="flex flex-col sm:flex-row justify-start gap-y-2 md:gap-x-4">
          <div class="relative">
            <a href="https://www.linkedin.com/in/luis-kellermann/">
              <div
                class="absolute inset-0 flex items-center justify-center p-3"
              >
                <UIcon
                  name="i-fa6-brands-linkedin"
                  class="w-10 h-10 bg-background"
                />
              </div>
            </a>
            <svg
              width="50"
              height="50"
              viewBox="0 0 37 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Oval 10 Copy 3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.75 36.5C28.415 36.5 36.25 28.665 36.25 19C36.25 9.33502 28.415 1.5 18.75 1.5C9.08502 1.5 1.25 9.33502 1.25 19C1.25 28.665 9.08502 36.5 18.75 36.5Z"
                stroke="#E6E6E6"
                stroke-width="1.5"
              />
            </svg>
          </div>
          <div class="relative">
            <a href="https://github.com/lskellerm">
              <div
                class="absolute inset-0 flex items-center justify-center p-3"
              >
                <UIcon
                  name="i-fa6-brands-github"
                  class="w-10 h-10 bg-background"
                />
              </div>
            </a>
            <svg
              width="50"
              height="50"
              viewBox="0 0 37 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Oval 10 Copy 3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.75 36.5C28.415 36.5 36.25 28.665 36.25 19C36.25 9.33502 28.415 1.5 18.75 1.5C9.08502 1.5 1.25 9.33502 1.25 19C1.25 28.665 9.08502 36.5 18.75 36.5Z"
                stroke="#E6E6E6"
                stroke-width="1.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links: { label: string; to: string }[] = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About',
    to: '/about'
  },
  {
    label: 'Skills',
    to: '/#'
  },
  {
    label: 'Projects',
    to: '/#'
  },
  {
    label: 'Contact',
    to: '/#'
  }
];
</script>
