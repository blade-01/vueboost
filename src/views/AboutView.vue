<script setup lang="ts">
import TheHeader from '../components/navbar/TheHeader.vue'
import SampleForm from '../components/samples/SampleForm.vue';
import TheFooter from '../components/navbar/TheFooter.vue'
</script>

<template>
  <the-header></the-header>
  <div class="routes py-8">
    <div class="container">
      <h1 class="text-center text-3xl font-bold my-12">Forms Usage</h1>
      <sample-form></sample-form>
    </div>
  </div>
  <the-footer></the-footer>
</template>
