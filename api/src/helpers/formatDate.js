module.exports = (date) => {
    const fecha = new Date(date);

const year = fecha.getFullYear();
const month = (fecha.getMonth() + 1).toString().padStart(2, '0');
const day = fecha.getDate().toString().padStart(2, '0');

const hoursUTC = fecha.getUTCHours().toString().padStart(2, '0');
const minutesUTC = fecha.getUTCMinutes().toString().padStart(2, '0');

  return `${year}-${month}-${day}${hoursUTC}:${minutesUTC}`;
  }