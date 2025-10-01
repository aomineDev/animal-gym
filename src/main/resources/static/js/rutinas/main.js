import {
  renderFilaEvents,
  crearRutinaEvents,
  eliminarRutinaEvents,
  editarRutinaEvents,
} from "./events/modalEvents.js";

document.addEventListener("DOMContentLoaded", () => {
  renderFilaEvents();
  crearRutinaEvents();
  eliminarRutinaEvents();
  editarRutinaEvents();
});
