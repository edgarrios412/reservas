const diferenciaMinute = (tiempoInicial, tiempoFinal) => {
    const [horaInicial, minutosInicial] = tiempoInicial.split(":");
    const [horaFinal, minutosFinal] = tiempoFinal.split(":");
  
    const fechaInicial = new Date();
    fechaInicial.setHours(horaInicial);
    fechaInicial.setMinutes(minutosInicial);
  
    const fechaFinal = new Date();
    fechaFinal.setHours(horaFinal);
    fechaFinal.setMinutes(minutosFinal);
  
    const diferenciaEnMilisegundos = fechaFinal - fechaInicial;
    const diferenciaEnMinutos = diferenciaEnMilisegundos / (1000 * 60);
  
    return diferenciaEnMinutos;
  }

const intervalDate = (start, end) => {
    const originalArray = [start, end];
    const convertedArray = [];

  const startTime = originalArray[0].slice(-5);
  const endTime = originalArray[1].slice(-5);

  let currentTime = startTime;
    let i = 1;
    let x = diferenciaMinute(startTime,endTime)/20

    const [hours, minutes] = currentTime.split(":");
      const currentDate = new Date();
    currentDate.setUTCHours(hours);
    currentDate.setMinutes(minutes);
    currentDate.setMinutes(currentDate.getMinutes());
    currentTime = `${String(currentDate.getHours()).padStart(2, "0")}:${String(
      currentDate.getMinutes()
      ).padStart(2, "0")}`;
      convertedArray.push(start.slice(0,-5)+currentTime);
  while (i <= x-1) {
      i++
      // Incrementa 10 minutos al tiempo actual
      const [hours, minutes] = currentTime.split(":");
      const currentDate = new Date();
      currentDate.setHours(hours);
      currentDate.setMinutes(minutes);
      currentDate.setMinutes(currentDate.getMinutes() + 20);
      currentTime = `${String(currentDate.getHours()).padStart(2, "0")}:${String(
          currentDate.getMinutes()
          ).padStart(2, "0")}`;
          convertedArray.push(start.slice(0,-5)+currentTime);
  }
  return convertedArray
}

module.exports = intervalDate