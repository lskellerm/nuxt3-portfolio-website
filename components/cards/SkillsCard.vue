<template>
  <transition name="card-enter">
    <UCard
      id="skills-card"
      :ui="{
        strategy: 'override',
        base: 'flex flex-col px-0 py-0 justify-center items-center border-2 border-secondary w-44 lg:w-72 h-46 lg:h-64 pt-5',
        background: 'bg-secondary-100',
        header: {
          base: 'flex flex-col jusfify-center items-center w-full max-h-fit',
          padding: 'px-0 py-0'
        },
        body: {
          base: 'w-0 h-0',
          padding: 'p-0'
        },
        footer: {
          base: 'w-0 h-0',
          padding: 'p-0'
        }
      }"
    >
      <template #header>
        <UIcon class="w-3/4 h-3/4 mb-2" :name="props.iconName" dynamic />
        <h1 class="font-heading text-xl text-text">{{ props.skillName }}</h1>
      </template>
    </UCard>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  iconName: string;
  skillName?: string;
}>();
</script>

<style scoped>
#skills-card {
  box-shadow:
    0px 10px 10px -5px rgba(149, 165, 167, 0.04),
    0px 20px 25px -5px #95a5a7;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
}
#skills-card:hover {
  box-shadow:
    0 0 15px 5px rgba(255, 255, 255, 0.6),
    /* White glow */ 0 0 20px 10px #00b893; /* Blue glow */
  transform: scale(1.05); /* Slightly increase the size */
}
</style>
