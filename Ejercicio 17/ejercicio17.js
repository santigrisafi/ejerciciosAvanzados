let getNumbers2 = () => {
  let numbers = [];
  for (let i = 1; i < 4; i++) {
    numbers[i] = parseInt(prompt("Ingresar el numero " + i));
  }
  testDivision(numbers);
};

let testDivision = (nums) => {
  let division = nums[1] % nums[2];
  if (division === nums[3]) {
    alert(
      " El tercero " +
        nums[3] +
        " es el resto de la división de los dos primeros que es " +
        division +
        ""
    );
  } else {
    alert("El tercero no es el resto de la división de los dos primeros.");
  }
};
