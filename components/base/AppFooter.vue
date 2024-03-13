<template>
  <footer class="mt-auto bg-text w-full">
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
        class="flex justify-center items-center p-2 lg:px-16 gap-x-4 md:gap-x-20"
      >
        <NuxtLink to="/">
          <svg
            width="50"
            height="50"
            viewBox="0 0 631 562"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="631" height="562" rx="50" fill="#2B3D50" />
            <rect
              x="74"
              y="65"
              width="482"
              height="433"
              rx="50"
              stroke="#95A5A7"
              stroke-width="10"
            />
            <rect
              x="119"
              y="109"
              width="392"
              height="345"
              rx="50"
              stroke="#95A5A7"
              stroke-width="10"
            />
            <path
              d="M164 411V151H236.435V257.904V358.208H310.364L394 358.208V411H164Z"
              fill="#E6E6E6"
            />
            <path
              d="M335.712 295.45L333.678 253.87L440.338 151H482.769L394.128 238.48L373.203 259.81L335.712 295.45ZM302 340V151H339.781V340H302ZM443.825 340L365.937 253.87L390.931 228.22L488 340H443.825Z"
              fill="#E6E6E6"
            />
          </svg>
        </NuxtLink>

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
          <div class="relative flex justify-center items-center">
            <a href="https://www.linkedin.com/in/luis-kellermann/">
              <div
                class="absolute inset-0 flex items-center justify-center p-3"
              >
                <UIcon
                  name="i-fa6-brands-linkedin"
                  class="w-5 h-5 lg:w-10 lg:h-10 bg-background"
                />
              </div>
            </a>
            <svg
              viewBox="0 0 37 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 lg:w-14 lg:h-14"
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
          <div class="relative flex justify-center items-center">
            <a href="https://github.com/lskellerm">
              <div
                class="absolute inset-0 flex items-center justify-center p-3"
              >
                <UIcon
                  name="i-fa6-brands-github"
                  class="w-5 h-5 lg:w-10 lg:h-10 bg-background"
                />
              </div>
            </a>
            <svg
              viewBox="0 0 37 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-10 h-10 lg:w-14 lg:h-14"
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
    to: '/skills'
  },
  {
    label: 'Projects',
    to: '/projects'
  },
  {
    label: 'Contact',
    to: '/contact'
  }
];
</script>
