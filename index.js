"use strict";

// La constante "conmutador" es igual a
// Dentro de mi documento, seleccionar un elemento
// que se llama "btn" y es un clase (porque puse ".")
const conmutador = document.querySelector(".btn");

conmutador.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  var className = document.body.className;
  if (className === "light-theme") {
    this.textContent = "Oscuro";
  } else {
    this.textContent = "Claro";
  }

  console.log("La clase de body es", className);
});

function abrirMenu(menu) {
  menu.classList.toggle("open");
}

function empezarTiempo() {
  const hoy = new Date();
  let hora = hoy.getHours();
  let minutos = checkTime(hoy.getMinutes());
  let segundos = checkTime(hoy.getSeconds());

  document.getElementById("manecillas").innerHTML = `${hora}:${minutos}:${segundos}`;
  setTimeout(empezarTiempo, 1000);
}

function checkTime(i) {
  if (i < 10) i = "0" + i;
  return i;
}
