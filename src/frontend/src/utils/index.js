const formatDate = (d) => {
  const date = new Date(d);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export { formatDate };
