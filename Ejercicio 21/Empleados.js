class Empleados {
  empleados = [];
  getSueldo(añosDeTrabajo, sueldoBasico) {
    if (añosDeTrabajo >= 10) {
      return sueldoBasico + (sueldoBasico * 10) / 100;
    } else if (añosDeTrabajo < 10 && añosDeTrabajo >= 5) {
      return sueldoBasico + (sueldoBasico * 7) / 100;
    } else if (añosDeTrabajo < 10 && añosDeTrabajo >= 5) {
      return sueldoBasico + (sueldoBasico * 7) / 100;
    } else if (añosDeTrabajo < 5 && añosDeTrabajo >= 3) {
      return sueldoBasico + (sueldoBasico * 5) / 100;
    } else if (añosDeTrabajo < 3) {
      return sueldoBasico + (sueldoBasico * 3) / 100;
    }
  }
}

let empleados = new Empleados();
let nombresEmpleados = ["Aerith", "Ifalna", "Selphie", "Cinque", "Deuce"];
let emailsEmpleados = [
  "aerith@gmail.com",
  "ifalna@gmail.com",
  "selphie@gmail.com",
  "cinque@arnet.com.ar",
  "deuce@gmail.com",
];

let llenarEmpleados = () => {
  for (let i = 0; i < 3; i++) {
    llenarEmpleado(i);
  }
  return empleados.empleados;
};

let llenarEmpleado = (i) => {
  let empleado = new Empleado();
  empleado.idEmpleado = parseInt(i + 1);
  empleado.nombreEmpleado =
    nombresEmpleados[parseInt(Math.floor(Math.random() * (5 - 0) + 0))];
  empleado.emailEmpleado = String(
    emailsEmpleados[parseInt(Math.floor(Math.random() * (5 - 0) + 0))]
  );
  empleado.edadEmpleado = Number(
    parseInt(Math.floor(Math.random() * (50 - 30) + 30))
  );
  empleado.añosDeTrabajo = Number(
    prompt("Ingrese la cantidad de años de trabajo del empleado " + i)
  );
  empleado.sueldoNeto = empleados.getSueldo(
    empleado.añosDeTrabajo,
    empleado.sueldoBasico
  );
  empleados.empleados[i] = empleado;
};
