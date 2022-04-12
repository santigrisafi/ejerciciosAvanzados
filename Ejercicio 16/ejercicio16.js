let getNumbers = () => {
  let num1 = parseInt(prompt("Ingrese el valor del numero 1"));
  let num2 = parseInt(prompt("Ingrese el valor del numero 2"));
  let num3 = parseInt(prompt("Ingrese el valor del numero 3"));
  multiNumbers(num1, num2, num3);
};

let multiNumbers = (num1, num2, num3) => {
  let multi = num1 * num2;
  if (multi === num3) {
    alert(
      `El numero multiplicado ${multi} es igual al tercer numero ingresado ${num3}`
    );
  } else {
    alert(
      "El numero multiplicado " +
        multi +
        " no es igual al tercero ingresado " +
        num3
    );
  }
};
