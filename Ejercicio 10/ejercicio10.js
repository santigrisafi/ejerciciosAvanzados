let inputNumbers2 = () => {
  let numbers = [];
  for (let i = 0; i < 3; i++) {
    numbers[i] = parseInt(prompt("Ingrese el numero " + i));
  }
  alert(
    !compareNumbers2(numbers, calcMayor_Menor2(numbers))
      ? "No se han ingresado correctamente los numeros"
      : "Se han ingresado los numeros en forma correcta y decreciente"
  );
};

let compareNumbers2 = (numbers1, numbers2) => {
  for (let i = 0; i < numbers1.length; i++) {
    if (numbers2[i] != numbers1[i]) {
      return false;
    }
    return true;
  }
};

let calcMayor_Menor2 = (numbers) => {
  let nums_position = [];
  let a = numbers[0];
  let b = numbers[1];
  let c = numbers[2];

  if (a > b && a > c && b > c) {
    nums_position[0] = a;
    nums_position[1] = b;
    nums_position[2] = c;
  }
  if (a > b && a > c && c > b) {
    nums_position[0] = a;
    nums_position[1] = c;
    nums_position[2] = b;
  }
  if (b > a && b > c && a > c) {
    nums_position[0] = b;
    nums_position[1] = a;
    nums_position[2] = c;
  }
  if (b > a && b > c && c > a) {
    nums_position[0] = b;
    nums_position[1] = c;
    nums_position[2] = a;
  }
  if (c > a && c > b && a > b) {
    nums_position[0] = c;
    nums_position[1] = a;
    nums_position[2] = b;
  }
  if (c > a && c > b && b > a) {
    nums_position[0] = c;
    nums_position[1] = b;
    nums_position[2] = a;
  }
  return nums_position;
};
