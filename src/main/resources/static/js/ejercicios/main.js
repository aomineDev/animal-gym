import { crearEjercicio, eliminarEjercicio, actualizarEjercicio} from "./events/modalEvents.js";
import {paginacion} from "./events/pagination.js";

document.addEventListener("DOMContentLoaded", () => {
    crearEjercicio();
    eliminarEjercicio();
    actualizarEjercicio();
    
    paginacion();
});