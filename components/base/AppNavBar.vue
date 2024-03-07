<template>
  <div class="relative">
    <nav
      id="navBar"
      class="p-6 lg:px-10 xl:px-28 lg:p-4 flex justify-between items-center"
    >
      <div class="flex justify-between items-center w-full lg:mr-10">
        <nuxt-link class="flex items-center gap-2 shrink-0" to="/">
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
          <p
            class="hidden lg:block text-xl xl:text-3xl font-heading font-semibold text-text"
          >
            Luis Kellermann
          </p>
        </nuxt-link>
        <UIcon
          name="i-mingcute-menu-fill"
          class="mr-4 lg:hidden w-8 h-8 bg-text self-center"
          @click="toggleMenu($event)"
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
        id="mobileMenu"
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
          @click="toggleMenu"
        /></div
    ></transition>
  </div>
</template>

<script setup lang="ts">
import type { VerticalNavigationLink } from '@nuxt/ui/dist/runtime/types';

const isMenuOpen: Ref<boolean> = ref(false); // Reactive state for toggling menu on mobile

const toggleMenu = (event: MouseEvent) => {
  /***
   * Event handler for toggling menu on mobile
   *
   * @param {MouseEvent} event - The event object that triggered the function
   */
  if (event) {
    event.stopPropagation(); // Prevents the event from bubbling up the DOM tree, needed to prevent the document click event from firing which is used to close the mobile menu
  }
  isMenuOpen.value = !isMenuOpen.value;
};

const handleOutsideMenuClick = (event: MouseEvent) => {
  /***
   * Event handler for closing the mobile menu when clicking outside of it
   *
   * @param {MouseEvent} event - The event object that triggered the function
   */
  const mobileMenu = document.getElementById('mobileMenu');
  if (mobileMenu && !mobileMenu.contains(event.target as Node)) {
    isMenuOpen.value = false;
  }
};

const links: VerticalNavigationLink[] = [
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

onMounted(() => {
  document.addEventListener('click', handleOutsideMenuClick);
});

onUnmounted(() => {
  document.addEventListener('click', handleOutsideMenuClick);
});
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
