<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from "vue-router";
import AOS from 'aos';

onMounted(() => {
  AOS.init({
    duration: 800,
    once: true,
  });
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity ease-in-out 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.zoom-enter-active,
.zoom-leave-active {
  transition: transform ease-in-out 0.3s;
}
.zoom-enter-from,
.zoom-leave-to {
  transform: scale(0);
}
</style>