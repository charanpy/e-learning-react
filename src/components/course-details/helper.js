const formatDate = (date) => {
  const currentDate = new Date(date);

  return `${currentDate.getDay().toString().padStart(2, 0)}/${currentDate
    .getMonth()
    .toString()
    .padStart(2, 0)}/${currentDate.getFullYear()}`;
};

export default formatDate;
