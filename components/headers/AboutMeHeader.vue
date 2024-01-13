<template>
  <div class="flex flex-col justify-center items-center mt-5 gap-y-6">
    <div class="flex flex-col items-center w-full px-3 py-7 gap-y-3">
      <div class="flex flex-col items-start gap-y-10 px-5">
        <h1 class="font-heading font-bold text-3xl">Who am I?</h1>
        <p class="font-sans text-md">
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
        <div class="flex flex-col items-start gap-y-4">
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
              <li class="font-sans text-md">TypeScript</li>
              <li class="font-sans text-md">JavaScript</li>
              <li class="font-sans text-md">TailwindCSS</li>
              <li class="font-sans text-md">Flask</li>
              <li class="font-sans text-md">Python</li>
            </ul>
            <ul class="list-disc">
              <li class="font-sans text-md">Vue</li>
              <li class="font-sans text-md">Nuxt</li>
              <li class="font-sans text-md">Docker</li>
              <li class="font-sans text-md">Linux</li>
              <li class="font-sans text-md">AWS</li>
            </ul>
          </div>
        </div>
        <div class="flex justify-center items-center gap-x-4">
          <UIcon name="i-fa6-brands-linkedin" class="w-12 h-12 bg-text" />
          <UIcon name="i-fa6-brands-github" class="w-12 h-12 bg-text" />
        </div>
      </div>
    </div>
  </div>
</template>
