import {
  crearClaseEvents,
  eliminarClaseEvents,
  editarClaseEvents,
  agregarSocioClase,
  eliminarSocioClase,
} from "./events/modalEvents.js";

document.addEventListener("DOMContentLoaded", () => {
  crearClaseEvents();
  editarClaseEvents();
  eliminarClaseEvents();
  agregarSocioClase();
  eliminarSocioClase();
});
