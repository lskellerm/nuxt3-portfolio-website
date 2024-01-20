<template>
  <section class="flex flex-col gap-y-6">
    <UTabs
      :items="items"
      :ui="{
        strategy: 'override',
        list: {
          background: 'bg-secondary-200',
          marker: {
            background: 'bg-secondary-300'
          },
          tab: {
            active: 'bg-secondary-300',
            font: 'text-text font-sans text-lg font-semibold'
          }
        }
      }"
      @change="handleTabChange"
    />

    <transition-group
      :key="activeTab"
      name="fade"
      tag="div"
      class="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full"
    >
      <SkillsCard
        v-for="skill in skillsToShow"
        :key="skill.skill"
        :icon-name="skill.icon"
        :skill-name="skill.skill"
        data-aos="fade-up"
        data-aos-once="true"
        class="justify-self-center"
      />
    </transition-group>
  </section>
</template>

<script setup lang="ts">
import type { TabItem } from '@nuxt/ui/dist/runtime/types';

const items: TabItem[] = [
  {
    label: 'Frontend'
  },
  {
    label: 'Backend'
  },
  {
    label: 'Tooling'
  }
];

/*
  Constant arrays for the skills to be displayed in each tab,
  containg objects with the skill name and the icon name
*/
const frontEndSkills: { skill: string; icon: string }[] = [
  { skill: 'HTML5', icon: 'i-logos-html-5' },
  { skill: 'CSS', icon: 'i-logos-css-3' },
  { skill: 'JavaScript', icon: 'i-logos-javascript' },
  { skill: 'TypeScript', icon: 'i-logos-typescript-icon' },
  { skill: 'Vue', icon: 'i-logos-vue' },
  { skill: 'Nuxt', icon: 'i-logos-nuxt-icon' },
  { skill: 'TailwindCSS', icon: 'i-logos-tailwindcss-icon' },
  { skill: 'Vuetify', icon: 'i-logos-vuetifyjs' }
];

const backEndSkills: { skill: string; icon: string }[] = [
  { skill: 'Python', icon: 'i-logos-python' },
  { skill: 'Flask', icon: 'i-logos-flask' },
  { skill: 'Java', icon: 'i-logos-java' },
  { skill: 'PostgreSQL', icon: 'i-logos-postgresql' },
  { skill: 'MariaDB', icon: 'i-logos-mariadb' },
  { skill: 'MySQL', icon: 'i-logos-mysql-icon' }
];

const tooling: { skill: string; icon: string }[] = [
  { skill: 'Git', icon: 'i-logos-git-icon' },
  { skill: 'GitHub Actions', icon: 'i-logos-github-actions' },
  { skill: 'Docker', icon: 'i-logos-docker-icon' },
  { skill: 'AWS', icon: 'i-logos-aws' },
  { skill: 'Linux', icon: 'i-logos-linux-tux' },
  { skill: 'npm', icon: 'i-logos-npm-icon' },
  { skill: 'yarn', icon: 'i-logos-yarn' },
  { skill: 'Figma', icon: 'i-logos-figma' }
];

// State for tracking the currerntly active tab
const activeTab = ref<number>(0);

const handleTabChange = (index: number) => {
  /**
   * Updates the active tab state when the tab is changed
   * @param {number} index - The index of the tab that was clicked
   * @returns {void}
   */
  activeTab.value = index;
};

//  Computed property to decide which skill cards to render based on the active tab
const skillsToShow = computed(() => {
  switch (activeTab.value) {
    case 0:
      return frontEndSkills;
    case 1:
      return backEndSkills;
    case 2:
      return tooling;
    default:
      return frontEndSkills;
  }
});
</script>

<style scoped>
/* Fade transition for the skill cards */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
