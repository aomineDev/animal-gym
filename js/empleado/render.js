import { filaTable } from "./componentes/filaTable.js";
import { editarEmpleado } from "./componentes/editarEmpleado.js";
import { formEditarEmpleado, crearRol, selectEditar } from "./dom.js";

export function renderFilas(empleados, container) {

    container.innerHTML = '';
    empleados.forEach((fila, i) => {
        container.innerHTML += filaTable(fila);
    });

}

export const renderEditarEmpleado = (empleado) => {
    formEditarEmpleado.innerHTML = ""
    formEditarEmpleado.innerHTML += editarEmpleado(empleado)

}
//selecciona un rol
export const renderEmpleadosPorRol = (crearRol, roles) => {
    crearRol.innerHTML = `<option value="">Seleccione un rol</option>`

    roles.forEach(rol => {
        const option = document.createElement("option")
        option.value = rol.id // valor será el id del rol
        option.textContent = rol.nombre // lo que verá el usuario
        crearRol.appendChild(option)
    })
}
