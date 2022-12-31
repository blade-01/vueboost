import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMainStore = defineStore('main', () => {
  const count = ref<number>(0);
  const name = ref<string>('Eduardo');
  const doubleCount = computed<number>(() => count.value * 2);
  const increment = (): number => count.value++;

  const toggleLoader = (value: boolean): any => {};
  const toggleError = (value: boolean): any => {};

  return { count, name, doubleCount, increment, toggleLoader, toggleError };
});
