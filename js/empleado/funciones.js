
import {
    modal, inputNombre, inputApellido, inputdni, inputFechaIngreso,
    inputtelefono, inputcorreo, inputFechaNacimiento, inputRol,
    tablaContenedor, inputBusqueda, formularioEmpleado, cerrar
} from "../empleado/dom.js";
import { filaTable } from "./componentes/filaTable.js";
let fila = null;
//abrir modal
export function abrirModal() {
    limpiarEstilos();
    const al = new bootstrap.Modal(modal);
    al.show();
}
//cerrar modal
export function cerrarModal() {
    const c1 = bootstrap.Modal.getInstance(modal);
    c1.hide();
    formularioEmpleado.reset();
}
//guardar empleado ala tabla con las validaciones
export function guardarEmpleado_valido() {
    //regex
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexApellido = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexDni = /^\d{8}$/;
    const regexTelefono = /^9\d{8}$/;
    const regexcorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    //para pinta los imputs
    const nombre = inputNombre.value.trim();
    const apellido = inputApellido.value.trim();
    const dni = inputdni.value;
    const fechaIngreso = inputFechaIngreso.value;
    const telefono = inputtelefono.value.trim();
    const correo = inputcorreo.value.trim();
    const fechaNacimiento = inputFechaNacimiento.value;
    const rol = inputRol.value;
    //validaciones
    if (!regexNombre.test(nombre) || nombre == "") {
        inputNombre.classList.add("is-invalid");
        return;
    } else {
        inputNombre.classList.remove("is-invalid");
        inputNombre.classList.add("is-valid");
    }
    if (!regexApellido.test(apellido) || apellido == "") {
        inputApellido.classList.add("is-invalid");
        return;
    } else {
        inputApellido.classList.remove("is-invalid");
        inputApellido.classList.add("is-valid");
    }
    if (!regexDni.test(dni) || dni == "") {
        inputdni.classList.add("is-invalid");
        return;
    } else {
        inputdni.classList.remove("is-invalid");
        inputdni.classList.add("is-valid");
    }
    if (!fechaIngreso) {
        inputFechaIngreso.classList.add("is-invalid");
        return;
    } else {
        inputFechaIngreso.classList.remove("is-invalid");
    }
    if (!regexTelefono.test(telefono) || telefono == "") {
        inputtelefono.classList.add("is-invalid");
        return;
    } else {
        inputtelefono.classList.remove("is-invalid");
        inputtelefono.classList.add("is-valid");
    }
    if (!regexcorreo.test(correo) || correo == "") {
        inputcorreo.classList.add("is-invalid");
        return;
    } else {
        inputcorreo.classList.remove("is-invalid");
        inputcorreo.classList.add("is-valid");
    }
    if (!fechaNacimiento) {
        inputFechaNacimiento.classList.add("is-invalid");
        return;
    } else {
        inputFechaNacimiento.classList.remove("is-invalid");
        inputcorreo.classList.add("is-valid");

    }
    if (fila) {
        fila.cells[1].innerText = nombre;
        fila.cells[2].innerText = apellido;
        fila.cells[3].innerText = dni;
        fila.cells[4].innerText = fechaIngreso;
        fila.cells[5].innerText = telefono;
        fila.cells[6].innerText = correo;
        fila.cells[7].innerText = fechaNacimiento;
        fila.cells[8].innerText = rol;

        fila = null;
        formularioEmpleado.reset(); // Limpiar formulario
        cerrarModal(); // Cerrar modal
    } else {

        let row = document.createElement("tr")
        //componenete usado menos codigo
        row.innerHTML = filaTable({ nombre, apellido, dni, fecha_ingreso: fechaIngreso, telefono, correo, fecha_nacimiento: fechaNacimiento, rol_id: rol });
        tablaContenedor.appendChild(row);
        formularioEmpleado.reset();
        cerrarModal();
    }

}
//busqueda dinamica
export function busquedaDinamica() {
    //almacenamos todas las filas de la tabla  contenedora de filas

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
//limpiar estilos de los imputs el rojito y el verde
function limpiarEstilos() {
    inputNombre.classList.remove("is-valid");
    inputApellido.classList.remove("is-valid");
    inputdni.classList.remove("is-valid");
    inputtelefono.classList.remove("is-valid");
    inputcorreo.classList.remove("is-valid");
    inputFechaNacimiento.classList.remove("is-valid");
    inputFechaIngreso.classList.remove("is-valid")
}

//funciones del drop down (editar , eliminar)
function editarFila(btn) {
    fila = btn.closest("tr");
    let celdas = fila.getElementsByTagName("td")
    let nombre = celdas[1].innerText;
    let apellido = celdas[2].innerText;
    let dni = celdas[3].innerText;
    let fechaIngreso = celdas[4].innerText;
    let telefono = celdas[5].innerText;
    let correo = celdas[6].innerText;
    let fechaNacimiento = celdas[7].innerText;
    let rol = celdas[8].innerText;
    inputNombre.value = nombre;
    inputApellido.value = apellido;
    inputdni.value = dni;
    inputFechaIngreso.value = fechaIngreso;
    inputtelefono.value = telefono;
    inputcorreo.value = correo;
    inputFechaNacimiento.value = fechaNacimiento;
    inputRol.value = rol;
    abrirModal();

}

function borrarFila(btn) {
    btn.closest("tr").remove();
}
//abrir los botones del drop down
window.editarFila = editarFila;
window.borrarFila = borrarFila;
