let getNumbers3 = () => {
  getMenu();
  let opcion = parseInt(prompt("Ingrese una opcion de los triangulos"));
  calcPerimetro(opcion);
};

let getMenu = () => {
  alert(
    `
        Menu de opciones de calculo de triangulos:
        -------------------------------------------
        Ingrese 1 - Para un triangulo Equilatero
        Ingrese 2 - Para un triangulo Isósceles
        Ingrese 3 - Para un triangulo Escaleno
        -------------------------------------------
        Alerta: "Cualquier otra opcion sera anulada"
        --------------------------------------------
        `
  );
};

let calcPerimetro = (opcion) => {
  let perimetro = 0;
  switch (opcion) {
    case 1:
      let lado = parseInt(
        prompt("Ingrese la medida del lado del triangulo Equilatero")
      );
      if (Number(lado) && lado >= 0) {
        perimetro += lado * 3;
        alert("Perimetro del triangulo equilatero es de " + perimetro);
      } else {
        alert(
          "El valor del lado no es un valor valido y no puede ser negativo"
        );
      }
      break;
    case 2:
      let ladoA = parseInt(prompt("Ingrese la longuitud del lado A"));
      let ladoB = parseInt(
        prompt("Ingrese la longuitud de los 2 lados restantes")
      );
      if (Number(ladoA) && Number(ladoB) && ladoA >= 0 && ladoB >= 0) {
        if (ladoA != ladoB || ladoB != ladoA) {
          perimetro += ladoB * 2 + ladoA;
          alert("El perimetro del tirangulo isoseles es de " + perimetro);
        } else {
          alert("El valor de los lados no pueden ser iguales");
        }
      } else {
        alert(
          "El valor de los lados no son valores validos y no pueden ser negativos"
        );
      }
      break;
    case 3:
      let lado1 = parseInt(
        prompt("Ingrese la medida del lado 1 del triangulo")
      );
      let lado2 = parseInt(
        prompt("Ingrese la medida del lado 2 del triangulo")
      );
      let lado3 = parseInt(
        prompt("Ingrese la medida del lado 3 del triangulo")
      );
      if (
        Number(lado1) &&
        Number(lado2) &&
        Number(lado3) &&
        lado1 >= 0 &&
        lado2 >= 0 &&
        lado3 >= 0
      ) {
        if (
          lado1 != lado2 &&
          lado1 != lado3 &&
          lado2 != lado1 &&
          lado2 != lado3 &&
          lado3 != lado2 &&
          lado3 != lado1
        ) {
          perimetro += lado1 + lado2 + lado3;
          alert("Perimetro del triangulo escaleno es de " + perimetro);
        } else {
          alert("Los lados no pueden ser iguales");
        }
      } else {
        alert(
          "El valor de los lados no son valores validos y no pueden ser negativos"
        );
      }
      break;
    default:
      alert("No ha seleccionado ninguna opcion correcta.");
      break;
  }
};
