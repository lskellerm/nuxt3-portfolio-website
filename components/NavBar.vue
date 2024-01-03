<template>
  <div>
    <nav
      class="bg-white px-10 py-2 flex flex-col lg:flex-row justify-between items-center shadow"
    >
      <div
        class="flex justify-between items-center w-full lg:w-auto mb-4 lg:mb-0"
      >
        <nuxt-link to="/">
          <img height="65" width="65" src="/logo-bw.svg" alt="logo" />
        </nuxt-link>
        <UIcon
          name="i-mingcute-menu-fill"
          class="lg:hidden w-8 h-8 bg-[#172121]"
          @click="toggleMenu"
        />
      </div>
      <div
        class="transition-all duration-500 flex flex-col lg:flex-row w-full lg:w-5/6 justify-center gap-4"
        :class="{
          'hidden lg:block': !isMenuOpen,
          'block lg:hidden': isMenuOpen
        }"
      >
        <nuxt-link
          class="text-[#172121] px-3 py-2 rounded text-lg font-semibold hover:text-[#E5D0CC] hover:bg-[#444554] text-center"
          to="/"
          exact-active-class="text-[#BFACB5] font-bold"
          >Home
        </nuxt-link>
        <nuxt-link
          class="text-[#172121] px-3 py-2 rounded text-lg font-semibold hover:text-[#E5D0CC] hover:bg-[#444554] text-center"
          to="#"
          >About
        </nuxt-link>
        <nuxt-link
          class="text-[#172121] px-3 py-2 rounded text-lg font-semibold hover:text-[#E5D0CC] hover:bg-[#444554] text-center"
          to="#"
          >Skills
        </nuxt-link>
        <nuxt-link
          class="text-[#172121] px-3 py-2 rounded text-lg font-semibold hover:text-[#E5D0CC] hover:bg-[#444554] text-center"
          to="#"
          >Projects
        </nuxt-link>
        <nuxt-link
          class="text-[#172121] px-3 py-2 rounded text-lg font-semibold hover:text-[#E5D0CC] hover:bg-[#444554] text-center"
          to="#"
          >Contact
        </nuxt-link>
      </div>
    </nav>
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
</script>
