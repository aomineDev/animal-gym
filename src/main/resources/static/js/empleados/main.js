import { actualizarEmpleadoUsuario, crearEmpleado, elminarEmpleado } from "./events/modalEvents.js";

document.addEventListener("DOMContentLoaded", () => {
    crearEmpleado();
    elminarEmpleado();
    actualizarEmpleadoUsuario();
});
