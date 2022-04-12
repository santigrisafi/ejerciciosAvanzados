let mostrarEmpleados = () => {
  let empleados = llenarEmpleados();
  for (let empleado of empleados) {
    document.write(
      `
      <h4>Datos del empleado ${empleado.idEmpleado}</h4>
      <ul>
        <li>Nombre Empleado: ${empleado.nombreEmpleado}</li>
        <li>Email Empleado: ${empleado.emailEmpleado}</li>
        <li>Edad Empleado: ${empleado.edadEmpleado}</li>
        <li>Años de Trabajo: ${empleado.añosDeTrabajo}</li>
        <li>Sueldo Neto: ${empleado.sueldoNeto}</li>
      </ul>
      `
    );
  }
};
