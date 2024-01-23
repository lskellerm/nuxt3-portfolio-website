<template>
  <section
    class="flex flex-col lg:grid grid-cols-2 lg:place-content-center justify-center items-center gap-y-6 2xl:w-1/3 2xl:gap-x-16"
  >
    <ProjectsCard
      v-for="project in data"
      :key="project.name"
      :project-name="project.name"
      :project-description="project.description"
      :project-link="project.html_url"
      :project-tech-stack="project.technologies"
      class="justify-self-center"
    />
  </section>
</template>

<script setup lang="ts">
import type { repoData } from '~/server/api/github.get';

const { data } = await useAsyncData<repoData[]>('repos', () =>
  $fetch('/api/github')
);
console.log(data.value);
</script>
