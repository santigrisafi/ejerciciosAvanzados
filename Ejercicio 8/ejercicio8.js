function addNumber() {
  let number = parseInt(prompt("Ingrese el valor del numero"));
  alert(verSiElNumeroEspositivo(number));
}

function verSiElNumeroEspositivo(number) {
  return number > 100 ? "Es mayor a 100" : "No es mayor a 100";
}
