
import eliminarEmpleadoModal from "./events/deleteModal.js";
import registrarEmpleado from "./events/formModal.js"
import empleadoDetalle from "./events/detailModal.js";
import empleadoFilterEvents from "./events/filter.js";
document.addEventListener('DOMContentLoaded', () => {
    registrarEmpleado();
    empleadoDetalle();
    eliminarEmpleadoModal();
    empleadoFilterEvents()

})