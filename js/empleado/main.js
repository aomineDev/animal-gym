import { tablaContenedor, btnAñadirEmpleado, modal, inputBusqueda, crearRol, selectEditar } from "../empleado/dom.js";
import { renderFilas, renderEmpleadosPorRol } from "../empleado/render.js";
import { getGym } from "../service.js";
import store from "../store.js";
import { objetEmpleado } from "./objeto.js";
import { agregarEmpleado, renderSelectedCardEvent, abrirModal } from "./events/empleadoEvents.js";

async function init() {

    store.gym = await getGym();
    renderFilas(objetEmpleado(store.gym.empleados, store.gym.roles), tablaContenedor, tablaContenedor);
    renderSelectedCardEvent(store.gym.empleados, store.gym.roles);
    agregarEmpleado(store.gym.empleados, store.gym.roles)
    //mostrar los nombres de los roles en el select dinamicamente
    renderEmpleadosPorRol(crearRol, store.gym.roles)

    abrirModal(modal);

}
window.addEventListener('load', init);


