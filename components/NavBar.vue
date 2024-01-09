<template>
  <div class="relative">
    <nav
      class="bg-[#172121] px-2 py-2 lg:py-4 flex justify-between items-center"
    >
      <div class="flex ml-5 lg:ml-24 justify-between items w-full">
        <nuxt-link to="/">
          <img
            height="65"
            width="65"
            src="/logo-bw.svg"
            alt="logo"
            class="lg:hidden"
          />
          <p
            class="hidden lg:block text-3xl font-heading font-semibold text-[#E5D0CC]"
          >
            Luis Kellermann
          </p>
        </nuxt-link>
        <UIcon
          name="i-mingcute-menu-fill"
          class="mr-4 lg:hidden w-8 h-8 bg-[#BFACB5] self-center"
          @click="toggleMenu"
        />
      </div>
      <div
        v-if="!isMenuOpen"
        class="hidden lg:flex justify-center gap-x-5 lg:mr-10 2xl:mr-32"
      >
        <nuxt-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="text-white px-3 py-2 rounded text-lg font-heading font-semibold hover:text-[#E5D0CC] hover:bg-[#444554] text-center]"
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
            wrapper: 'relative border-0 h-screen bg-[#172121]',
            rounded: 'rounded-none',
            base: 'flex items-center ml-8 bg-[#172121]',
            padding: 'p-6',
            font: 'font-semibold font-heading',
            active: 'border-current text-white',
            size: 'text-xl'
          }"
        /></div
    ></transition>
  </div>
</template>

<script setup lang="ts">
const isMenuOpen: Ref<boolean> = ref(false); // Reactive state for toggling menu on mobile

const toggleMenu = () => {
  /***
   * Event handler for toggling menu on mobile
   */
  isMenuOpen.value = !isMenuOpen.value;
};

const links = [
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
