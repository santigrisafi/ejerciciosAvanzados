let tomarUnidades = () => {
  let kg = parseFloat(prompt("Ingrese la cantidad de Kilogramos"));
  let opcion = parseInt(
    prompt(
      ` Ingrese 0 - Para convertir a Toneladas
        Ingrese 1 - Para Convertir a Hectrogramos 
        Ingrese 2 - Para Convertir a Decagramos
        Ingrese 3 -Para Convetir a Gramos
        Ingrese 4 -Para Convetir a Decigramos
        Ingrese 5 -Para Convetir a Centrigramos
        Ingrese 6 -Para Convetir a Miligramos  `
    )
  );
  switch (opcion) {
    case 0:
        alert(
            " Kg's Ingresados : " +
              kg +
              " Pasando a Toneladas es igual a : " +
              convertirAToneladas(kg) +
              " tns"
          );
      break;
    case 1:
      alert(
        " Kg's Ingresados : " +
          kg +
          " Pasando a Hectogramos es igual a : " +
          convertirAHG(kg) +
          " hg"
      );
      break;
    case 2:
      alert(
        " Kg's Ingresados : " +
          kg +
          " Pasando a Decagramos es igual a : " +
          convertirADAG(kg) +
          " dag"
      );
      break;
    case 3:
      alert(
        " Kg's Ingresados : " +
          kg +
          " Pasando a Gramos es igual a : " +
          convertirAG(kg) +
          " g"
      );
      break;
    case 4:
      alert(
        " Kg's Ingresados : " +
          kg +
          " Pasando a Decigramos es igual a : " +
          convertirADG(kg) +
          " dg"
      );
      break;
    case 5:
      alert(
        " Kg's Ingresados : " +
          kg +
          " Pasando a Centrigramos es igual a : " +
          convertirACG(kg) +
          " cg"
      );
      break;
    case 6:
      alert(
        " Kg's Ingresados : " +
          kg +
          " Pasando a Miligramos es igual a : " +
          convertirAMG(kg) +
          " mg"
      );
      break;
    default:
      alert("No ha seleccionado ninguna opcion correcta");
      break;
  }
};

let convertirAHG = (num) => {
  return num * 10;
};

let convertirADAG = (num) => {
  return num * 100;
};

let convertirAG = (num) => {
  return num * 1000;
};

let convertirADG = (num) => {
  return num * 10000;
};

let convertirACG = (num) => {
  return num * 100000;
};

let convertirAMG = (num) => {
  return num * 1000000;
};

let convertirAToneladas = (num) => {
  return num / 100;
};
