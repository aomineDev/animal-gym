import { rutinaTable, btnConfirmarEliminar, editarRutinaForm } from "../dom.js";
import { renderRutinaFila, renderEditForm } from "../render.js";

export const selectedFilaEvents = (rutinas, container) => {

    rutinaTable.addEventListener("click", e => {
        console.log("evento click")

        const btn = e.target.closest("[data-id]")

        if (!btn) return

        const id = parseInt(btn.getAttribute("data-id"))
        console.log(id)

        // Editar
        if (e.target.closest("[data-bs-target='#editarRutinaModal']")) {
            const rutina = rutinas.find(c => c.id === id)
            if (!rutina) return;

            renderEditForm(rutina)
            editRutinaFormEvents(rutinas, rutina)
        }

        // Eliminar 
        if (e.target.closest("[data-bs-target='#confirmDeleteModal']")) {
            btnConfirmarEliminar.setAttribute("data-id", id)
        }

        btnConfirmarEliminar.addEventListener("click", () => {

            const id = parseInt(btnConfirmarEliminar.getAttribute("data-id"))

            //eliminar del array
            const index = rutinas.findIndex(c => c.id === id)
            if (index !== -1) {
                rutinas.splice(index, 1)
            }

            //renderizar
            renderRutinaFila(rutinas, container)

            // cerrar el modal 
            const modal = bootstrap.Modal.getInstance(document.getElementById("confirmDeleteModal"))
            modal.hide()
        })

    })

}

export const editRutinaFormEvents = (rutinas, rutina) => {

    editarRutinaForm.addEventListener("submit", e => {
        e.preventDefault()

        const data = new FormData(editarRutinaForm)

        if (!editarRutinaForm.checkValidity()) {
            editarRutinaForm.classList.add("was-validated")
            return
        }

        const updatedRutina = {
            ...rutina,
            nombre: data.get("nombre"),
            descripcion: data.get("descripcion"),
            duracion: parseInt(data.get("duracion")),
            estado: data.get("estado")
        }

        const index = rutinas.findIndex(c => c.id === rutina.id)
        if (index !== -1) {
            rutinas[index] = updatedRutina
        }

        renderRutinaFila(rutinas, rutinaTable)
        const modal = bootstrap.Modal.getInstance(document.getElementById("editarRutinaModal"))
        modal.hide()
    }, { once: true })

}
