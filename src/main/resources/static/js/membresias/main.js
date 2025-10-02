// import { actualizarEjercicio } from "../ejercicios/events/modalEvents.js";
import { crearMembresia, eliminarMembresia, actualizarMembresia,  cargarImagen} from "./events/modalEvents.js";
// import {paginacion} from "./events/pagination.js";

document.addEventListener("DOMContentLoaded", () => {
    crearMembresia();
    cargarImagen();
    actualizarMembresia();

    eliminarMembresia();
    
});