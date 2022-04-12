function addNumbersArray() {
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers[i] = parseInt(prompt("Ingrese el numero " + i));
  }
  alert("Mayor numero : " + mayorNumero(numbers));
  alert("Menor numero : " + menorNumero(numbers));
}

function mayorNumero(numbers) {
  let mayor = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
      mayor = numbers[i];
    }
    if (numbers[i] > mayor) {
      mayor = numbers[i];
    }
  }
  return mayor;
}

function menorNumero(numbers) {
  let menor = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i == 0) {
      menor = numbers[i];
    }
    if (numbers[i] < menor) {
      menor = numbers[i];
    }
  }
  return menor;
}
