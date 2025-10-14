
import eliminarEmpleadoModal from "./events/deleteModal.js";
import registrarEmpleado from "./events/formModal.js"
document.addEventListener('DOMContentLoaded', () => {
    registrarEmpleado();

    eliminarEmpleadoModal();
})