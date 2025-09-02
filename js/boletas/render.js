import { boletaCard } from "./componentes/boletaCard.js";
import { filaBoleta } from "./componentes/filaBoleta.js";
//en el parametro de lafuncion le le llegara del json y del main
export function renderBoleta(boletas, container) {

  container.innerHTML = boletaCard(boletas)
}
export function renderizarFila(boletas, container) {
  container.innerHTML = "";
  boletas.forEach((fi, f) => {
    container.innerHTML += filaBoleta(fi)
  });
}
