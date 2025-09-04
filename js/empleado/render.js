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

//renderizar los roles de empledaos en
export const renderEmpleadosPorRol = (crearRol, roles) => {
    crearRol.forEach(select => {
        select.innerHTML = `<option value="">Seleccione un rol</option>`;

        roles.forEach(rol => {
            const option = document.createElement("option");
            option.value = rol.id;
            option.textContent = rol.nombre;
            select.appendChild(option);
        });
    });
}