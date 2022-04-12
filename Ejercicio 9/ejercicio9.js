let inputNumbers = () => {
  let numbers = [];
  for (let i = 0; i < 3; i++) {
    numbers[i] = parseInt(prompt("Ingrese el numero " + i));
  }
  alert(
    !compareNumbers(numbers, mayor_menor2(numbers))
      ? "No se han ingresado correctamente los numeros"
      : "Se han ingresado los numeros en forma correcta y creciente"
  );
};

let compareNumbers = (numbers1, numbers2) => {
  for (let i = 0; i < numbers1.length; i++) {
    if (numbers2[i] != numbers1[i]) {
      return false;
    }
    return true;
  }
};

let mayor_menor2 = (nums) => {
  let nums_posicion = [];
  let a = nums[0];
  let b = nums[1];
  let c = nums[2];
  if (a < b && a < c && b < c) {
    nums_posicion[0] = a;
    nums_posicion[1] = b;
    nums_posicion[2] = c;
  }
  if (a < b && a < c && c < b) {
    nums_posicion[0] = a;
    nums_posicion[1] = c;
    nums_posicion[2] = b;
  }
  if (b < a && b < c && a < c) {
    nums_posicion[0] = b;
    nums_posicion[1] = a;
    nums_posicion[2] = c;
  }
  if (b < a && b < c && c < a) {
    nums_posicion[0] = b;
    nums_posicion[1] = c;
    nums_posicion[2] = a;
  }
  if (c < a && c < b && b < a) {
    nums_posicion[0] = c;
    nums_posicion[1] = b;
    nums_posicion[2] = a;
  }
  if (c < a && c < b && a < b) {
    nums_posicion[0] = c;
    nums_posicion[1] = a;
    nums_posicion[2] = b;
  }
  return nums_posicion;
};
