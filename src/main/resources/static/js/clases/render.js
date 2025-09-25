import { ClaseCard } from "./components/claseCard.js";

export const renderClaseCard = (container, nuevaClase) => {
  container.insertAdjacentHTML("beforeend", ClaseCard(nuevaClase));
};
