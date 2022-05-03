const formatDate = (date, dob = false) => {
  const currentDate = new Date(date);
  const separator = dob ? '-' : '/';
  return `${currentDate.getFullYear()}${separator}${currentDate
    .getMonth()
    .toString()
    .padStart(2, 0)}${separator}${currentDate
    .getDay()
    .toString()
    .padStart(2, 0)}`;
};

export default formatDate;
