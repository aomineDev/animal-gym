import { formularioEmpleado, modal, tablaContenedor, btnConfirmarEliminar, formEditarEmpleado, btnAñadirEmpleado, inputBusqueda } from "../dom.js";
import { renderFilas, renderEditarEmpleado } from "../render.js";
import { objetEmpleado } from "../objeto.js";


export const abrirModal = (modal) => {
    btnAñadirEmpleado.addEventListener('click', () => {
        let x = new bootstrap.Modal(modal);
        x.show();
    })
}
export const busqueda = (inputBusqueda, tablaContenedor) => {
    let buscador = inputBusqueda.value.toString().toLowerCase();
    let filas = tablaContenedor.getElementsByTagName("tr")


    for (let i = 0; i < filas.length; i++) {
        let nombre = filas[i].cells[1].textContent.toString().toLowerCase();
        if (nombre.indexOf(buscador) === -1) {
            filas[i].style.visibility = "collapse";
        } else {
            filas[i].style.visibility = "";
        }

    }
}
//opciones de la tabla (eliminar , editar)
export const renderSelectedCardEvent = (empleados, roles) => {
    tablaContenedor.addEventListener('click', e => {

        let empleadoConIdDeRol = objetEmpleado(empleados, roles)
        //buscamos el boton que tenga el data-id 
        const btn = e.target.closest("[data-id]")
        if (!btn) return;
        // luego buscamos dentro de ese boton el que tenga el id 
        // y otendremos el id 
        const idBoton = btn.dataset.id;
        console.log(idBoton);

        //eliminar empleado
        if (e.target.closest("[data-bs-target='#eliminar']")) {
            console.log("eliminado");
            btnConfirmarEliminar.setAttribute("data-id", idBoton);

        }
        //editarEmpleado
        if (e.target.closest("[data-bs-target='#editar']")) {
            const id = Number(idBoton);
            const empleadoSeleccionado = empleadoConIdDeRol.find(c => c.id === id);

            if (!empleadoSeleccionado) return; // por si no existe

            renderEditarEmpleado(empleadoSeleccionado);
            editarFormulario(empleadoSeleccionado, empleados, roles);
        }
    })
    btnConfirmarEliminar.addEventListener("click", () => {
        const id = parseInt(btnConfirmarEliminar.getAttribute("data-id"))
        const indice = empleados.findIndex(e => e.id === id)
        if (indice !== -1) {
            empleados.splice(indice, 1)
        }
        const empleadoConIdDeRol = objetEmpleado(empleados, roles);
        renderFilas(empleadoConIdDeRol, tablaContenedor)
        const modal = bootstrap.Modal.getInstance(document.getElementById("eliminar"))
        modal.hide()
    })
}

//agregar empleado
export const agregarEmpleado = (empleados, roles) => {

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
            rol_id: parseInt(data.get("rol_id"))
        }
        //pasar 
        empleados.push(empleadoNuevo);
        const empleadoCompleto = objetEmpleado(empleados, roles);
        renderFilas(empleadoCompleto, tablaContenedor);
        renderSelectedCardEvent(empleados, roles)
        //depues de agregar tienes que cerrarlo
        const cerrrar = bootstrap.Modal.getInstance(modal)
        cerrrar.hide();

        formularioEmpleado.reset()
        formularioEmpleado.classList.remove("was-validated")
    })
}
export const editarFormulario = (empleadoCompleto, empleados, roles) => {

    formEditarEmpleado.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = new FormData(formEditarEmpleado)
        if (!empleadoCompleto) {
            return;
        }
        const actualizarEmpleado = {
            ...empleadoCompleto,
            nombre: data.get("nombre"),
            apellido: data.get("apellido"),
            dni: data.get("dni"),
            fecha_ingreso: data.get("fecha_ingreso"),
            telefono: data.get("telefono"),
            correo: data.get("correo"),
            fecha_nacimiento: data.get("fecha_nacimiento"),
            rol_id: data.get("rol_id")
        }
        const indice = empleados.findIndex(c => c.id === empleadoCompleto.id)
        if (indice !== -1) {
            empleados[indice] = actualizarEmpleado
        }
        renderFilas(objetEmpleado(empleados, roles), tablaContenedor)
        const modal = bootstrap.Modal.getInstance(document.getElementById("editar"));
        modal.hide()

    }, { once: true })
}