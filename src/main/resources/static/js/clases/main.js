import {
  crearClaseEvents,
  eliminarClaseEvents,
  editarClaseEvents,
} from "./events/modalEvents.js";

document.addEventListener("DOMContentLoaded", () => {
  crearClaseEvents();
  editarClaseEvents();
  eliminarClaseEvents();
});
