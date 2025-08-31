import { boletaCard } from "./componentes/boletaCard.js";
//en el parametro de lafuncion le le llegara del json y del main
export function renderBoleta(boleta, container) {
  container.innerHtml = "";

  //reccores todas las boletad
  boleta.forEach((element, i) => {
    container.innerHtml += boletaCard(element);
  });
}
//como ay muchas voletas va pintar una por una
