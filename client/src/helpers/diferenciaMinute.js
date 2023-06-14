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

export default diferenciaMinute