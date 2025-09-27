import {
  renderFilaEvents,
  crearRutinaEvents,
  eliminarRutinaEvents,
} from "./events/modalEvents.js";

document.addEventListener("DOMContentLoaded", () => {
  renderFilaEvents();
  crearRutinaEvents();
  eliminarRutinaEvents();
});
