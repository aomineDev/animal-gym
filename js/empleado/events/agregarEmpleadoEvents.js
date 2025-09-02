import { formularioEmpleado, modal } from "../dom.js";
import { renderFilas } from "../render.js";

export const agregarEmpleado = (empleados, container) => {
    formularioEmpleado.addEventListener("submit", e => {
        e.preventDefault();
        console.log("boton presionado")
        if (!formularioEmpleado.checkValidity()) {
            console.log("falta validar")
            return;
        }
        //capturar datos del formulario ya validado
        const data = new FormData(formularioEmpleado)
        const empleadoNuevo = {
            //obetenemos los datos del forumlario
            id: Date.now(),
            nombre: data.get("nombre"),
            apellido: data.get("apellido"),
            dni: data.get("dni"),
            fecha_ingreso: data.get("fecha_ingreso"),
            telefono: data.get("telefono"),
            correo: data.get("correo"),
            fecha_nacimiento: data.get("fecha_nacimiento"),
            rol_id: data.get("rol_id")
        }
        console.log(empleadoNuevo.fe)
        empleados.push(empleadoNuevo);
        renderFilas(empleados, container);
        //depues de agregar tienes que cerrarlo
        const cerrrar = bootstrap.Modal.getInstance(modal)
        cerrrar.hide();
    })
}
