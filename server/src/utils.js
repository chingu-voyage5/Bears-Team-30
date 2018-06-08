const setTime = () => {
  const time = new Date();
  let hours = time.getHours();
  const minutes = time.getMinutes();

  amOrPm = hours < 12 ? 'am' : 'pm';
  hours = amOrPm === 'pm' && hours - 12;

  return `${hours}:${minutes}${amOrPm}`;
};

module.exports = {
  setTime
};
