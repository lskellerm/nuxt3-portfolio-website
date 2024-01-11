<template>
  <div
    class="flex flex-col lg:flex-row-reverse justify-center items-center gap-8 mt-5 p-6 lg:p-16"
  >
    <NuxtImg
      id="graduation-photo"
      src="/graduation-photo.jpg"
      alt="Graduation Photo"
      quality="100"
      class="rounded-full"
      sizes="397px lg:609px"
    />
    <div
      class="flex flex-col justify-center items-center lg:items-start gap-y-6 w-full xl:w-1/2 2xl:w-1/4"
    >
      <h4 class="text-text font-heading text-2xl lg:text-3xl">
        Hello there! 👋 My name is <br />
        <span class="text-3xl lg:text-4xl font-bold">Luis Kellermann </span
        ><br />
        I’m a
        <vue-typewriter-effect
          :strings="roles"
          :loop="true"
          class="text-accent"
          :auto-start="true"
        />
      </h4>
      <p
        class="font-sans text-center lg:text-left mb-6 xl:w-3/4 lg:text-lg xl:text-xl"
      >
        I’m a software engineer based in Raleigh, NC specializing in building
        Full-Stack applications, transforming complex problems into elegant
        solutions. I aim to bring to life robust web applications that enhance
        user experiences.
      </p>
      <UButton
        id="about-me-button"
        to="/#"
        size="xl"
        :ui="{
          strateg: 'override',
          font: 'font-sans uppercase tracking-wider',
          padding: {
            xl: 'px-4 py-3.5'
          },
          size: {
            xl: 'text-lg'
          },
          color: {
            primary: {
              solid:
                'bg-primaryColor hover:shadow-2xl hover:shadow-primaryColor'
            }
          }
        }"
        >Get to know me</UButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import VueTypewriterEffect from 'vue-typewriter-effect';

const roles: String[] = [
  'Front-End Developer',
  'Back-End Developer',
  'Full-Stack Developer',
  'Curious Learner',
  'Software Engineer'
];
</script>
