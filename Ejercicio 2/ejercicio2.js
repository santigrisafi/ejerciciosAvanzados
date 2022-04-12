function saberSiEsVocal(letra) {
  let vocales = ["a", "e", "i", "o", "u"];
  for (let vocal of vocales) {
    letra = String(letra).toLowerCase();
    if (letra === vocal) {
      return true;
    }
  }
}

function addLetra() {
  let letra = prompt("Ingrese una letra");
  if (letra.length === 1 && !Number(letra)) {
    alert(!saberSiEsVocal(letra) ? "No es vocal" : "Es Vocal");
  } else {
    alert("No es una letra si uno una palabra y no se permiten numeros");
  }
}
