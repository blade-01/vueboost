import { defineStore } from 'pinia';

export const useThemeStore = defineStore('theme', () => {
  const colorMode = useColorMode();
  // Toggle theme (this auto-saves thanks to VueUse)
  const switchTheme = (): void => {
    colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark';
  };
  const theme = ref<any>(null);
  onBeforeMount(() => {
    // Gets theme mode on load
    colorMode.value === 'light' ? (theme.value = true) : (theme.value = false);
  });

  return {
    colorMode,
    switchTheme
  };
});
