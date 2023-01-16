import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const toggleLoader = (value: boolean): any => {};
  const toggleError = (value: boolean): any => {};

  return {
    toggleLoader,
    toggleError
  };
});
