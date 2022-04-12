let saberSiEsParOImpar = (num1, num2) => {
  if (num1 % 2 == 0 && num2 % 2 == 0) {
    alert("Ambos Numeros Son Pares");
  } else {
    if (num1 % 2 == 0 && num2 % 2 != 0) {
      alert("Solo el numero 1 es par el otro es impar");
    } else {
      if (num1 % 2 != 0 && num2 % 2 == 0) {
        alert("El numero 1 es impar y el otro es par");
      } else {
        alert("Ambos Numeros son Impares");
      }
    }
  }
};

let addNumbersPareseImpares = () => {
  let num1 = parseInt(prompt("Ingresar numero 1"));
  let num2 = parseInt(prompt("Ingresar numero 2"));
  saberSiEsParOImpar(num1, num2);
};
