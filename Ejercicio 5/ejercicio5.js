let getNumbers5 = () => {
  let nums = [];
  for (let i = 0; i < 3; i++) {
    nums[i] = parseInt(prompt("Ingresar numero " + i));
  }
  alert(calcMayor_Menor(nums));
};

let calcMayor_Menor = (numbers) => {
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
