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

const divideHours = (start, end) => {
    const originalArray = [start, end];
    const convertedArray = [];

  const startTime = originalArray[0];
  const endTime = originalArray[1];

  let currentTime = startTime;
    let i = 0;
    let x = diferenciaMinute(startTime,endTime)/20
  while (i <= x) {
    convertedArray.push(currentTime);
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
  }
  return convertedArray
}

export default divideHours

// console.log(divideHours("7:00", "7:10"))
// console.log("Hol")