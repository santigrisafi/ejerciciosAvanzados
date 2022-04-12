function addNumber2() {
  let number = parseInt(prompt("Ingrese el numero"));
  if (Number(number)) {
    if (number > 0) {
      alert("Es positivo");
    } else {
      alert("Es negativo");
    }
  } else {
    alert("No es un numero sino una letra");
  }
}
