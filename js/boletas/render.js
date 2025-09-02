import { boletaCard } from "./componentes/boletaCard.js";
import { filaBoleta } from "./componentes/filaBoleta.js";
//en el parametro de lafuncion le le llegara del json y del main
export function renderBoleta(boleta, container) {
  // container.innerHTML = "";

  // //reccores todas las boletad
  // boleta.forEach((element, i) => {
  //   container.innerHTML += boletaCard(element);
  // });
  container.innerHTML = boletaCard(boleta)
}
export function renderizarFila(boleta, container) {
  container.innerHTML = "";
  boleta.forEach((fi, f) => {
    container.innerHTML += filaBoleta(fi)
  });
}
//como ay muchas voletas va pintar una por una
