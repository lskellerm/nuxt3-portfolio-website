<template>
  <div class="w-full">
    <NuxtLayout name="errors">
      <div class="p-5 mt-12 flex justify-start items-center">
        <div class="mt-7 mr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
          >
            <circle
              cx="15.8219"
              cy="15.2107"
              r="15"
              transform="rotate(155.866 15.8219 15.2107)"
              fill="#597EA6"
            />
          </svg>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="61"
          height="61"
          viewBox="0 0 61 61"
          fill="none"
        >
          <circle
            cx="30.4869"
            cy="30.6441"
            r="30"
            transform="rotate(155.866 30.4869 30.6441)"
            fill="#597EA6"
          />
        </svg>
      </div>
      <div class="flex justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="98"
          height="203"
          viewBox="0 0 98 203"
          fill="none"
        >
          <path
            d="M97.0157 202.194C84.4747 202.262 72.0423 199.717 60.4284 194.704C48.8144 189.691 38.2464 182.309 29.3278 172.978C20.4091 163.648 13.3144 152.552 8.44875 140.324C3.58311 128.097 1.04182 114.976 0.96996 101.713C0.898104 88.4498 3.29709 75.303 8.02996 63.0233C12.7628 50.7436 19.7369 39.5715 28.5539 30.1449C37.371 20.7183 47.8584 13.2217 59.4173 8.08331C70.9762 2.94489 83.3803 0.265208 95.9214 0.197266L96.4686 101.196L97.0157 202.194Z"
            fill="#597EA6"
          />
        </svg>
      </div>
      <div class="flex flex-col justify-center items-center gap-y-10 px-2">
        <div class="flex flex-col justify-center items-center gap-y-5 mt-16">
          <h1 class="font-heading text-9xl font-bold text-text">
            {{ error.statusCode }}
          </h1>
          <h2
            v-if="error.statusCode === 404"
            class="font-heading text-3xl text-text"
          >
            Oops!... Page not found.
          </h2>
        </div>
        <UButton
          size="xl"
          :ui="{
            strategy: 'override',
            font: 'font-sans uppercase font-semibold tracking-wider',
            padding: {
              xl: 'px-16 py-5'
            },
            size: {
              xl: 'text-xl'
            },
            color: {
              primary: {
                solid: 'bg-text text-white hover:shadow-2xl hover:shadow-text'
              }
            }
          }"
          @click="handleError"
          >Home</UButton
        >
      </div>
      <div class="py-10 mt-16">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="202"
          viewBox="0 0 96 202"
          fill="none"
        >
          <path
            d="M0.5 0C13.0412 0 25.4597 2.61244 37.0463 7.68817C48.6329 12.7639 59.1607 20.2035 68.0287 29.5822C76.8967 38.9609 83.9312 50.0951 88.7305 62.349C93.5298 74.6029 96 87.7365 96 101C96 114.264 93.5298 127.397 88.7305 139.651C83.9312 151.905 76.8967 163.039 68.0287 172.418C59.1607 181.797 48.6329 189.236 37.0463 194.312C25.4597 199.388 13.0412 202 0.499992 202L0.5 101L0.5 0Z"
            fill="#597EA6"
          />
        </svg>
      </div>
      <div class="flex justify-end px-7">
        <div class="pr-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
          >
            <circle cx="30" cy="30" r="30" fill="#597EA6" />
          </svg>
        </div>
        <div class="mt-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <circle cx="15" cy="15" r="15" fill="#597EA6" />
          </svg>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
  error: NuxtError;
}>();

// Helper function to remove the error from the page and redirect to the home page
const handleError = () => clearError({ redirect: '/' });
</script>
