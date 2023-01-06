export default () => {
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN'
    }).format(value);

  return { formatCurrency };
};
