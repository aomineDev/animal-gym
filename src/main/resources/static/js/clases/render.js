import { ClaseCard } from "./components/claseCard.js";

export const renderClaseCard = (container, nuevaClase) => {
  console.log("estas aqui");
  container.insertAdjacentHTML("beforeend", ClaseCard(nuevaClase));
};
