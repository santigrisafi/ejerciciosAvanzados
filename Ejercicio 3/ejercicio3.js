function addHours() {
  let hours = parseInt(prompt("Ingresar la hora"));
  let minutes = parseInt(prompt("Ingresar los minutos"));
  let seconds = parseInt(prompt("Ingresar los segundos"));
  testHour(hours, minutes, seconds);
}

function testHour(hours, minutes, seconds) {
  alert(
    hours >= 0 &&
      hours <= 24 &&
      minutes >= 0 &&
      minutes <= 60 &&
      seconds >= 0 &&
      seconds <= 60
      ? `Hora: ${hours} : ${minutes} : ${seconds}`
      : `No es una hora valida`
  );
}
