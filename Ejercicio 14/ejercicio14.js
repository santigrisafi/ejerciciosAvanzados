function getNumbers14() {
  let number1 = parseInt(Math.floor(Math.random() * (6 - 1) + 1));
  let number2 = parseInt(Math.floor(Math.random() * (6 - 1) + 1));
  alert(
    !isPrimo(number1, number2)
      ? `Numeros Ingresados [ ${number1} , ${number2} ] los cuales no son primos`
      : `Numeros Ingresados [ ${number1} , ${number2} ] los cuales son primos`
  );
}

function isPrimo(number1, number2) {
  if (number1 > 1 && number2 > 1 && number1 != 4 && number2 != 4) {
    return (
      (number1 % 2 != 0 && number2 % 2 != 0) || number1 == 2 || number2 == 2
    );
  }
  return false;
}
