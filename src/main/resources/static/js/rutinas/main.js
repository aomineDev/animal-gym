import {
  renderFilaEvents,
  crearRutinaEvents,
  eliminarRutinaEvents,
  editarRutinaEvents,
  agregarEjercicioEvents,
} from "./events/modalEvents.js";

document.addEventListener("DOMContentLoaded", () => {
  renderFilaEvents();
  crearRutinaEvents();
  eliminarRutinaEvents();
  editarRutinaEvents();
  agregarEjercicioEvents();
});
