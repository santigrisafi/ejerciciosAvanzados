function addCharacters() {
  let opcion = prompt(
    "Ingrese su genero si es masculino es S y si es femenino ingrese el N"
  );
  verificarCaracteres(opcion);
}

function verificarCaracteres(opcion) {
  opcion = String(opcion).toLocaleLowerCase();
  switch (opcion) {
    case "s":
        alert("Usted es masculino");
      break;
    case "n":
        alert("Usted es femenino");
      break;
    default:
      alert("No se permite el ingreso de otro caracter que no sea S o N");
      break;
  }
}
