let comenzarJuego = () => {
  alert("Bienvenidos al Primer Juego");
  alert(
    "Ingrese un valor a continuacion y descubra si ha acertado con el numero escondido"
  );
  alert("Mucha Suerte, la necesitara");
  let valorBuscado = parseInt(prompt("Ingrese un numero del 1 al 10"));
  ejecuccionJuego(valorBuscado);
};

let valorInicial = () => {
  let num = parseInt(Math.floor(Math.random() * (10 - 1) + 1));
  return num;
};

let ejecuccionJuego = (number) => {
  let vInicial = valorInicial();
  alert(
    number == vInicial
      ? "Has acertado con el valor del número escondido " + vInicial
      : "Mala suerte, no has acertado con el valor del número escondido y era " +
          vInicial
  );
};
