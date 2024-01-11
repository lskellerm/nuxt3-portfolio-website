<template>
  <div class="relative">
    <nav
      id="navBar"
      class="p-6 lg:px-10 xl:px-28 lg:p-4 flex justify-between items-center"
    >
      <div class="flex justify-between items-center w-full lg:mr-10">
        <nuxt-link class="flex items-center gap-2 shrink-0" to="/">
          <NuxtImg src="/logo-bw.svg" height="50" width="50" alt="logo" />
          <p
            class="hidden lg:block text-xl xl:text-3xl font-heading font-semibold text-text"
          >
            Luis Kellermann
          </p>
        </nuxt-link>
        <UIcon
          name="i-mingcute-menu-fill"
          class="mr-4 lg:hidden w-8 h-8 bg-text self-center"
          @click="toggleMenu"
        />
      </div>
      <div
        v-if="!isMenuOpen"
        class="hidden lg:flex flex-end justify-center items-center gap-1 xl:gap-4"
      >
        <nuxt-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="p-2 rounded text-lg font-heading font-semibold hover:text-text hover:bg-accent text-center tracking-wider uppercase"
          >{{ link.label }}
        </nuxt-link>
      </div>
    </nav>
    <!-- Mobile Menu Slideover-->
    <transition name="slide-over">
      <div
        v-show="isMenuOpen"
        class="w-3/4 absolute h-full end-0 z-50 lg:hidden"
      >
        <LazyUVerticalNavigation
          :links="links"
          :ui="{
            strategy: 'override',
            wrapper: 'relative border-0 h-screen bg-text',
            rounded: 'rounded-none',
            base: 'flex flex-col items-start shrink-0 ml-2 bg-text',
            padding: 'px-6 py-5',
            font: 'text-lg text-background font-medium font-heading tracking uppercase',
            active: 'border-current',
            size: 'text-xl'
          }"
        /></div
    ></transition>
  </div>
</template>

<script setup lang="ts">
import type { VerticalNavigationLink } from '@nuxt/ui/dist/runtime/types';

const isMenuOpen: Ref<boolean> = ref(false); // Reactive state for toggling menu on mobile

const toggleMenu = () => {
  /***
   * Event handler for toggling menu on mobile
   */
  isMenuOpen.value = !isMenuOpen.value;
};

const links: VerticalNavigationLink[] = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'About',
    to: '/#'
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

<style scoped>
#navBar {
  border-bottom: 2px solid rgba(149, 165, 167, 0.25);
}

.slide-over-enter-active,
.slide-over-leave-active {
  transition: transform 0.3s ease;
}

.slide-over-enter-from,
.slide-over-leave-to {
  transform: translateX(100%);
}

.slide-over-enter-to,
.slide-over-leave-from {
  transform: translateX(0);
}
</style>
