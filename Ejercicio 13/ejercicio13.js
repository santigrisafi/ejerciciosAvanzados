let getMenu2 = () => {
  alert(`
    --------------------------
    Menu de opciones
    --------------------------
    Ingrese 1 - Archivo
    Ingrese 2 - Buscar
    Ingrese 3 - Salir
    `);
};

let comprobarMenu = () => {
  getMenu2();
  let opcion = parseInt(prompt("Ingrese una opcion del menu"));
  switch (opcion) {
    case 1:
      alert("Opcion Archivo");
      break;
    case 2:
      alert("Opcion Buscar");
      break;
    case 3:
      alert("Opcion Salir");
      break;
    default:
      alert("No ha elejido una opcion correcta");
      break;
  }
};
