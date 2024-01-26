<template>
  <transition name="card-enter">
    <UCard
      id="project-card"
      :ui="{
        strategy: 'override',
        base: 'flex flex-col justfify-center items-center p-5 border-2 border-secondary w-96 h-80 lg:w-3/4 2xl:w-full',
        background: 'bg-secondary-100',
        header: {
          base: 'flex flex-col jusfify-center items-center w-full mb-2',
          padding: 'px-0 py-0'
        },
        body: {
          base: 'w-0 h-0',
          padding: 'p-0'
        },
        footer: {
          base: 'flex flex-col justify-center items-center w-full mt-auto gap-y-2',
          padding: 'p-0'
        }
      }"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <template #header>
        <img
          v-if="props.projectImage"
          :src="props.projectImage"
          class="w-3/4 h-3/4 mb-2"
        />
        <h3
          class="font-heading text-xl text-text font-semibold text-center uppercase tracking-wide mb-2"
        >
          {{ props.projectName }}
        </h3>
        <p class="font-sans text-text text-base text-left">
          {{ props.projectDescription }}
        </p>
      </template>
      <template #footer>
        <div class="flex flex-wrap justify-end items-center gap-1 w-full">
          <UBadge
            v-for="(tech, index) in props.projectTechStack"
            :key="index"
            variant="subtle"
            color="accent"
            size="sm"
            :ui="{
              strategy: 'override',
              rounded: 'rounded-full',
              font: 'open-sans font-semibold text-accent'
            }"
          >
            {{ tech }}
          </UBadge>
        </div>
        <UButton
          v-if="props.projectLink"
          size="sm"
          variant="link"
          label="View Code"
          :to="props.projectLink"
          target="_blank"
          :ui="{
            font: 'open-sans',
            size: {
              sm: 'text-base'
            },
            color: {
              primary: {
                link: 'text-primaryColor'
              }
            }
          }"
        >
          <template #trailing>
            <UIcon
              name="i-mingcute-github-line"
              class="w-6 h-6 bg-primaryColor"
            />
          </template>
        </UButton>
      </template>
    </UCard>
  </transition>
</template>

<script setup lang="ts">
const props = defineProps<{
  projectImage?: string;
  projectName: string;
  projectDescription: string | null;
  projectTechStack: (string | null | undefined)[];
  projectLink?: string;
  demoLink?: string;
}>();
</script>

<style scoped>
#project-card {
  box-shadow:
    0px 10px 10px -5px rgba(149, 165, 167, 0.04),
    0px 20px 25px -5px #95a5a7;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;
}
#project-card:hover {
  box-shadow:
    0 0 15px 5px rgba(255, 255, 255, 0.6),
    /* White glow */ 0 0 20px 10px #00b893; /* Primary color glow */
  transform: scale(
    1.05
  ); /* Slightly increase the size of the card when hovered */
}
</style>
