function getImporte() {
  let importeBruto = parseFloat(prompt("Ingrese el importe en bruto"));
  alert(
    `Importe Bruto : ${importeBruto} y Importe Neto : ${calcImporte(
      importeBruto
    )}`
  );
}

let calcImporte = (importeBruto) => {
  return importeBruto >= 15000
    ? importeBruto + (importeBruto * 16) / 100
    : importeBruto + (importeBruto * 10) / 100;
};
