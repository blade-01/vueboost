export default () => {
  const truncateText = (value: string, limit: number): string => {
    return value.length > 20 ? value.substring(0, limit) + '...' : value;
  };

  return { truncateText };
};
