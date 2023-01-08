export default () => {
  const isActive = ref<boolean>(false);
  const openModal = (value: boolean) => (isActive.value = value);
  return {
    isActive,
    openModal
  };
};
