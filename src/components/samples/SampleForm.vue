<template>
  <form @submit.prevent>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <base-input
        label="Custom name"
        v-model="state.username"
        type="text"
        :error="v$.username.$error"
        error-message="Username is required"
        @blur="v$.username.$touch()"
        @focus="v$.username.$reset()"
      />
      <base-input
        v-model="state.name"
        label="Full Name"
        type="text"
        :error="v$.name.$error"
        @blur="v$.name.$touch()"
        @focus="v$.name.$reset()"
      />
      <base-input
        v-model="state.email"
        label="Email"
        type="email"
        :error="v$.email.$error"
        @blur="v$.email.$touch()"
        @focus="v$.email.$reset()"
      />
      <base-input
        v-model="state.image"
        label="Image"
        type="file"
        accept="image/*"
        :error="v$.image.$error"
        @blur="v$.image.$touch()"
        @focus="v$.image.$reset()"
      />
      <base-input
        v-model="state.password"
        label="Password"
        :type="type"
        password
        :error="v$.password.$error"
        @blur="v$.password.$touch()"
        @focus="v$.password.$reset()"
        @change-type="showPassword"
      />
      <base-select
        v-model="state.gender"
        label="Gender"
        :options="genders"
        placeholder="Select your gender"
        :error="v$.gender.$error"
        @blur="v$.gender.$touch()"
        @focus="v$.gender.$reset()"
      />
      <div class="md:col-span-2">
        <label for="phoneNumber" class="label-style">Phone Number</label>
        <vue-tel-input
          id="phoneNumber"
          v-model="state.phoneNumber"
          :error="v$.phoneNumber.$error"
          @blur="v$.phoneNumber.$touch()"
          @focus="v$.phoneNumber.$reset()"
          :class="{ err: v$.phoneNumber.$error }"
          :autoFormat="false"
          @validate="handleValidation"
        ></vue-tel-input>
        <small
          :class="{
            'err-message': v$.phoneNumber.$error
          }"
          v-show="v$.phoneNumber.$error"
        >
          Please provide a valid phone number</small
        >
      </div>
      <base-input
        class="md:col-span-2"
        v-model="state.message"
        label="Message"
        type="textarea"
        rows="5"
        :error="v$.message.$error"
        @blur="v$.message.$touch()"
        @focus="v$.message.$reset()"
      />
    </div>
    <div class="flex justify-end mt-5">
      <base-submit-btn label="Submit" @click="submitForm" />
    </div>
  </form>
</template>

<script setup lang="ts">
import 'vue-select/dist/vue-select.css'
import { reactive } from 'vue'
import BaseInput from '../forms/BaseInput.vue'
import BaseSelect from '../forms/BaseSelect.vue'
import BaseSubmitBtn from '../buttons/BaseSubmitBtn.vue'
import { VueTelInput } from 'vue-tel-input'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, maxLength } from '@vuelidate/validators'
import { useToast } from 'vue-toastification'
import { usePassword } from '../../composables/usePassword'

// Toast
const toast = useToast()

// Used for showing password
const { type, showPassword } = usePassword()

// Used for dropdown list
const genders = ['male', 'female']

// Form inputs
const state = reactive<{
  username: string
  name: string
  email: string
  password: string | number
  image: string
  message: string
  gender: string
  phoneNumber: string | number
}>({
  username: '',
  name: '',
  email: '',
  password: '',
  image: '',
  message: '',
  gender: '',
  phoneNumber: ''
})

// Validation rules
const rules = {
  username: { required },
  name: { required },
  email: { required, email },
  password: { required },
  image: { required },
  message: { required },
  gender: { required },
  phoneNumber: { required, minLength: minLength(8), maxLength: maxLength(11) }
}
const v$ = useVuelidate(rules, state)

// Mobile Number Validation
let inputValue = reactive<any>('') // inputValue.nationalNumber (for phone number), inputValue.countryCallingCode (for calling code +234 etc.)
const handleValidation = ($event: Event) => {
  inputValue = $event
}

// Submit form
const submitForm = () => {
  if (v$.value.$invalid) {
    v$.value.$validate()
  } else {
    console.log('Form Input:', state)
    toast.success("Yipee!, you've successfully submitted")
  }
}
</script>

<style scoped>
:deep(.vue-tel-input) {
  @apply border-solid border-gray-300 border-2 outline-none rounded-xl h-[44px] flex items-center py-3 px-4 focus:border-gray-600 w-full transition-all duration-200 ease-in-out disabled:rounded-xl disabled:border disabled:border-gray-300 disabled:bg-gray-50 disabled:p-4 disabled:py-6 placeholder:capitalize;
}
:deep(.vti__dropdown-list) {
  z-index: 10;
}
</style>
