<template>
  <section
    id="contact-me-form-container"
    class="flex flex-col justify-center items-center gap-y-6 px-2 py-5 mt-16 bg-secondary-100 w-full"
  >
    <div class="w-full h-1/2 bg-text">
      <div
        class="flex flex-col h-52 justify-center items-center px-5 my-10 gap-y-6"
      >
        <h1 class="text-background text-3xl font-heading">
          Let's Get in <span class="text-accent">Touch!</span>
        </h1>
        <p class="text-background text-base font-sans">
          I’m currently looking for new opportunities. My inbox is alway open!
          Whether you have a question, want to work together, or just want to
          say hi, I’ll make sure to try and get back to you!
        </p>
      </div>
      <div class="flex justify-between items-end mt-32">
        <div class="flex justify-center items-center px-5 mb-2 gap-x-4">
          <a href="https://www.linkedin.com/in/luis-kellermann/">
            <UIcon
              name="i-mingcute-linkedin-fill"
              class="w-12 h-12 bg-background"
            />
          </a>
          <a href="https://github.com/lskellerm">
            <UIcon
              name="i-mingcute-github-2-fill"
              class="w-12 h-12 bg-background"
            />
          </a>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="169"
          height="132"
          viewBox="0 0 169 132"
          fill="none"
        >
          <path
            d="M169.359 132C169.359 109.416 160.437 87.7577 144.557 71.7888C128.676 55.8199 107.138 46.8486 84.6793 46.8486C62.221 46.8486 40.6825 55.8199 24.802 71.7888C8.92155 87.7577 3.39112e-06 109.416 0 132L84.6793 132H169.359Z"
            fill="#95A5A7"
            fill-opacity="0.2"
          />
          <ellipse
            cx="84.3645"
            cy="43.6835"
            rx="43.4414"
            ry="43.6835"
            fill="#95A5A7"
            fill-opacity="0.25"
          />
        </svg>
      </div>
    </div>
    <ContactForm />
  </section>
</template>

<style scoped>
#contact-me-form-container {
  border: 1px solid var(--Secondary, #95a5a7);
  box-shadow:
    0px 10px 10px -5px rgba(149, 165, 167, 0.04),
    0px 20px 25px -5px rgba(0, 0, 0, 0.25);
}
</style>
