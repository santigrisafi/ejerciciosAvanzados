function addNumbers4() {
  let nums = [];
  for (let i = 0; i < 3; i++) {
    nums[i] = parseInt(prompt("Ingrese el numero " + i));
  }
  alert(mayor_menor(nums));
}

function mayor_menor(nums) {
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
}
