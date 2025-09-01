import { filaTable } from "./componentes/filaTable.js";

export function renderFilas(empleados, container) {

    container.innerHTML = '';
    empleados.forEach((fila, i) => {
        container.innerHTML += filaTable(fila);
    });

}