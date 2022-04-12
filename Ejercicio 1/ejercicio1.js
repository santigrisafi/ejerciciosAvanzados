function MesDelAño() {
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let numeroMes = parseInt(prompt("Ingrese el numero del mes"));
  switch (numeroMes) {
    case 1:
      alert(meses[0]);
      break;
    case 2:
      alert(meses[1]);
      break;
    case 3:
      alert(meses[2]);
      break;
    case 4:
      alert(meses[3]);
      break;
    case 5:
      alert(meses[4]);
      break;
    case 6:
      alert(meses[5]);
      break;
    case 7:
      alert(meses[6]);
      break;
    case 8:
      alert(meses[7]);
      break;
    case 9:
      alert(meses[8]);
      break;
    case 10:
      alert(meses[9]);
      break;
    case 11:
      alert(meses[10]);
      break;
    case 12:
      alert(meses[11]);
      break;
    default:
      alert(
        "Ingrese un numero del 1 al 12, no se permite otra opcion incorrecta"
      );
      break;
  }
}
