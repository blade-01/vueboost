export default () => {
  const isActive = ref<boolean>(false);
  const toggleModal = () => (isActive.value = !isActive.value);
  return {
    isActive,
    toggleModal
  };
};
