import { tablaContenedor, btnAñadirEmpleado, btnGuardarEmpleado, inputBusqueda, cerrar } from "../empleado/dom.js";
import { renderFilas } from "../empleado/render.js";
import { getGym } from "../service.js";
import store from "../store.js";
import { abrirModal, guardarEmpleado_valido, busquedaDinamica, cerrarModal } from "../empleado/funciones.js";

//Añadir empleado(abrir modal)
btnAñadirEmpleado.addEventListener('click', abrirModal);
//guardar empleado con las validaciones 
btnGuardarEmpleado.addEventListener('click', guardarEmpleado_valido)
//cerrrar modal
cerrar.addEventListener('click', cerrarModal);
//busqueda
inputBusqueda.addEventListener("input", busquedaDinamica);
//renderizar las filas del storage
async function init() {
    store.gym = await getGym();
    renderFilas(store.gym.empleados, tablaContenedor);
}
window.addEventListener('load', init);


