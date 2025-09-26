import {
  crearClaseEvents,
  eliminarClaseEvents,
  editarClaseEvents,
  agregarSocioClase,
} from "./events/modalEvents.js";

document.addEventListener("DOMContentLoaded", () => {
  crearClaseEvents();
  editarClaseEvents();
  eliminarClaseEvents();
  agregarSocioClase();
});
