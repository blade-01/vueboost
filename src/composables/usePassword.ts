export function usePassword() {
  const type = ref<string>('password');
  const showPassword = (): void => {
    type.value === 'password'
      ? (type.value = 'text')
      : (type.value = 'password');
  };

  return {
    type,
    showPassword
  };
}
