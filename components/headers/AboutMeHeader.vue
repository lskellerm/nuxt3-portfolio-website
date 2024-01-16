<template>
  <header
    class="flex flex-col justify-center items-center py-10 px-2 gap-y-6 lg:w-full 2xl:w-3/5"
  >
    <div
      class="flex flex-col justify-center items-center w-full lg:w-3/4 2xl:w-1/2 py-7 gap-y-3"
    >
      <div
        class="flex flex-col justify-center items-start gap-y-10 px-5 lg:px-0"
      >
        <h1 class="font-heading font-bold text-3xl lg:text-5xl">Who am I?</h1>
        <p class="font-sans text-md lg:text-xl">
          Hi there! Welcome to my portfolio website! <br />
          I’m a Software Engineer with a Bachelor’s of Science in Computer
          Science with a concentration in Systems from UNCW. <br /><br />
          I’m a dedicated and passionate learner, always welcoming the challenge
          of learning new things. I have a strong interest in solving
          complex-problems with technology and through buidling software
          solutions. <br /><br />

          When I’m not coding, learning new technologies, concepts, or
          frameworks, you can find me traveling, finding that new coffee shop,
          excercising, cooking or reading a new book!
        </p>
        <div class="flex flex-col items-start gap-y-4 lg:mt-8">
          <h2
            class="text-accent font-heading text-xl uppercase tracking-wide font-semibold"
          >
            Currently Working With:
          </h2>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            class="flex justify-center items-center gap-x-20 px-10"
          >
            <ul class="list-disc mr-7">
              <li
                v-for="(item, index) in currentWorkingList"
                :key="index"
                class="font-sans text-md lg:text-lg"
              >
                {{ item }}
              </li>
            </ul>
            <ul class="list-disc">
              <li
                v-for="(item, index) in otherWorkingList"
                :key="index"
                class="font-sans text-md lg:text-lg"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center items-center gap-x-4">
          <UIcon name="i-fa6-brands-linkedin" class="w-12 h-12 bg-text" />
          <UIcon name="i-fa6-brands-github" class="w-12 h-12 bg-text" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Constants of technologies I'm currently working with
const currentWorkingList: String[] = [
  'TypeScript',
  'JavaScript',
  'TailwindCSS',
  'Flask',
  'Python'
];

const otherWorkingList: String[] = ['Vue', 'Nuxt', 'Docker', 'Linux', 'AWS'];
</script>
