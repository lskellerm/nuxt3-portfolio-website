<template>
  <UForm
    ref="form"
    class="flex flex-col justify-center items-start p-5 gap-y-5 w-full xl:w-1/2"
    :state="state"
    :validate="validate"
    @submit="handleSubmit"
  >
    <UFormGroup
      class="w-full"
      label="First Name"
      size="md"
      name="firstName"
      :ui="{
        wrapper: 'lg:w-3/4',
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
        wrapper: 'lg:w-3/4',
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
        wrapper: 'lg:w-3/4',
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
        wrapper: 'lg:w-3/4',
        label: {
          base: 'text-text font-sans'
        }
      }"
    >
      <UTextarea v-model="state.message" placeholder="Your message here..." />
    </UFormGroup>
    <NuxtTurnstile ref="turnstile" v-model="token" />
    <UButton
      v-if="!isSubmitting"
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
    <UButton
      v-else
      variant="solid"
      color="accent"
      size="xl"
      label="Send"
      padded
      loading
      :ui="{
        font: 'font-sans font-semibold',
        variant: {
          solid: 'text-text'
        }
      }"
    >
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types';

// Define the type for the form state properties
interface FormState {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  message: string | undefined;
}
// Reactive object which will hold the current state of the form
const state = reactive<FormState>({
  firstName: undefined,
  lastName: undefined,
  email: undefined,
  message: undefined
});

const form = ref<HTMLFormElement>();

const token = ref<string>();

const turnstile = ref<any>();

// Reactive state to track if the form is currently being submitted
const isSubmitting = ref(false);

// Define toast composable used for form submissions status notifications
const toast = useToast();

const validate = (state: FormState): FormError[] => {
  /***
   * Takes the current form's state and returns an array of FormErrors if any errors are found
   * @param {FormState} state - The current state of the form, The current state of the form, a reactive object containing defined form properties
   * @returns {FormErrors[]} - An array of FormErrors, an array of objects containing the path to the form element matching the form name and the error message to display
   */

  const errors: FormError[] = [];

  // Check if all form fields are filled
  if (!state.firstName)
    errors.push({ path: 'firstName', message: 'First name is required' });

  if (!state.lastName)
    errors.push({ path: 'lastName', message: 'Last name is required' });

  if (!state.email)
    errors.push({ path: 'email', message: 'Email is required' });

  if (!state.message)
    errors.push({ path: 'message', message: 'Message is required' });

  return errors;
};

async function handleSubmit(event: FormSubmitEvent<any>) {
  /***
   * Handles the contact form submission event
   * @param {FormSubmitEvent} event - The formSubmitEvent object emitted when the form is submitted and contains the current state of the form
   */

  // Set the isSubmitting state to true to show the loading spinner and disable the submit button
  isSubmitting.value = true;

  event.data.token = token.value;

  //  Send the form data to the server
  try {
    const response = await $fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event.data)
    });

    if (response.message) {
      // Display a success toast notification
      toast.add({
        title: 'Email Sent Successfully',
        description: response.message
      });
    }
  } catch (error: any) {
    if (error.statusCode === 422) {
      // Error associated with the Cloudflare Captcha
      if (
        error.statusMessage === 'Token Not provided' ||
        error.statusMessage === 'Token validation failed'
      ) {
        toast.add({
          title: 'Error Sending Email',
          description:
            'Please ensure you complete the form challenge correctly',
          color: 'red'
        });
      } else {
        // Catch and set error for form validation errors generated by the server
        form.value?.setErrors(
          error.data.data.map((err: any) => ({
            path: err.field,
            message: err.message
          }))
        );
      }
    } else if (error.statusCode === 429) {
      // Catch errors related to endpoint rate limiting
      toast.add({
        title: 'Maximum Emails Sent',
        description:
          'Rate limit exceeded, you have reached the maximum number of emails that can be sent in a day, please try again in 24 hours',
        color: 'red'
      });
    } else {
      // Display an error toast notification for generic errors
      toast.add({
        title: 'Error Sending Email',
        description: error.statusMessage,
        color: 'red'
      });
    }
  } finally {
    // Set the isSubmitting state to false to hide the loading spinner and enable the submit button
    isSubmitting.value = false;

    // Reset the form state
    state.firstName = undefined;
    state.lastName = undefined;
    state.email = undefined;
    state.message = undefined;

    // Regenerate turnstile token after form submission
    turnstile.value?.reset();
  }
}
</script>
