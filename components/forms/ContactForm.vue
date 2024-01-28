<template>
  <UForm
    class="flex flex-col justify-center items-start p-5 gap-y-5 w-full border"
    :state="state"
    :validate="validate"
    @error="onError"
  >
    <UFormGroup
      class="w-full"
      label="First Name"
      size="md"
      name="firstName"
      :ui="{
        label: {
          base: 'text-text font-sans'
        }
      }"
    >
      <UInput v-model="state.firstName" placeholder="Jane" />
    </UFormGroup>
    <UFormGroup
      class="w-full"
      label="Last Name"
      size="md"
      name="lastName"
      :ui="{
        label: {
          base: 'text-text font-sans'
        }
      }"
    >
      <UInput v-model="state.lastName" placeholder="Doe" />
    </UFormGroup>
    <UFormGroup
      class="w-full"
      label="Email"
      size="md"
      name="email"
      :ui="{
        label: {
          base: 'text-text font-sans'
        }
      }"
      required
    >
      <UInput v-model="state.email" placeholder="you@example.com" />
    </UFormGroup>
    <UFormGroup
      class="w-full"
      label="Message"
      size="xl"
      name="message"
      required
      padded
      :ui="{
        label: {
          base: 'text-text font-sans'
        }
      }"
    >
      <UTextarea v-model="state.message" placeholder="Your message here..." />
    </UFormGroup>
    <UButton
      type="submit"
      variant="solid"
      color="accent"
      size="xl"
      label="Send"
      padded
      :ui="{
        font: 'font-sans font-semibold',
        variant: {
          solid: 'text-text'
        }
      }"
    >
      <template #trailing>
        <UIcon name="i-mingcute-mail-fill" class="w-6 h-6 bg-text" />
      </template>
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { FormError, FormErrorEvent } from '#ui/types';

// Define the reactive object to hold the current state of the form
const state = reactive({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  message: undefined
});

const validate = (state: any): FormError[] => {
  /***
   * Validates the form state and return an array of FormError objects
   * @param {any} state - The current state of the form, a reactive object containing defined form properties
   * @returns {FormError[]} - An array of FormError objects, containing the path of the error and the error message
   */
  const errors: FormError[] = [];
  if (!state.firstName) {
    errors.push({
      path: 'firstName',
      message: 'First name is required, please provide a first name'
    });
  }
  if (!state.lastName) {
    errors.push({
      path: 'lastName',
      message: 'Last name is required, please provide a last name'
    });
  }
  if (!state.email) {
    errors.push({
      path: 'email',
      message: 'Email is required, please provide an email'
    });
  }
  if (!state.message) {
    errors.push({
      path: 'message',
      message: 'Message is required, please provide a message for the email'
    });
  }
  return errors;
};

// eslint-disable-next-line require-await
async function onError(event: FormErrorEvent) {
  /***
   * Function which listens to the @error event to handle the errors emitted by the contact Form.
   * @param {FormErrorEvent} event - The formErrorEvent object emitted when the form is validated and contains an array of FormError objects
   */
  const element = document.getElementById(event.errors[0].id);
  element?.focus();
  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
</script>