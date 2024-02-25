<template>
  <e-html lang="en">
    <e-head />
    <e-preview>{{ sender }} has contacted me via Portfolio Website</e-preview>
    <e-container>
      <e-section class="flex flex-col justify-center items-center">
        <e-heading class="text-2xl font-heading font-semibold text-center"
          >Hi there, {{ name }}!
        </e-heading>
        <e-text class="text-xl font-heading font-normal text-center"
          >You have a new message from {{ sender }} at {{ email }}:
        </e-text>
      </e-section>
      <e-section>
        <e-text class="text-center text-lg font-sans">{{ message }}</e-text>
      </e-section>
    </e-container>
  </e-html>
</template>

<script setup lang="ts">
// Define props for the contact email component template
defineProps<{
  name: string;
  sender: string;
  email: string;
  message: string;
}>();
</script>
