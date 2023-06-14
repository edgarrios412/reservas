const sumMinutes = (hour, add) => {
    const [hours, minutes, seconds] = hour.split(":");

const currentDate = new Date();
currentDate.setHours(hours);
currentDate.setMinutes(minutes);
currentDate.setSeconds(seconds);
currentDate.setMinutes(currentDate.getMinutes() + add);

const newTime = `${String(currentDate.getHours()).padStart(2, "0")}:${String(
  currentDate.getMinutes()
).padStart(2, "0")}:${String(currentDate.getSeconds()).padStart(2, "0")}`;
return newTime
}

export default sumMinutes