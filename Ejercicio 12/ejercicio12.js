let getNumbers12 = () => {
  let num1 = parseInt(prompt("Ingrese el numero 1"));
  let num2 = parseInt(prompt("Ingrese el numero 2"));
  let num3 = parseInt(prompt("Ingrese el numero 3"));
  testResult(num1, num2, num3);
};

let testResult = (num1, num2, num3) => {
  let suma = num1 + num2;
  alert(
    suma === num3
      ? "El resultado del a suma es igual al tercer numero"
      : "El resultado de la suma no es igual al tercer numero"
  );
};
