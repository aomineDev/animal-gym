import { card, modalDetailClase, btnDelete, formCrearClase, formEditarClase } from '../dom.js'
import { renderDetailCard, renderClaseCard, renderEditForm } from '../render.js'
import { objectClase } from '../objeto.js'

export const renderSelectedCardEvent = (clases, empleados) => {

    card.addEventListener("click", e => {
        let claseCompleta = objectClase(clases, empleados)

        const btn = e.target.closest("[data-id]")
        if (!btn) return

        const id = parseInt(btn.getAttribute("data-id"))
        console.log(id)

        // Detalle
        if (e.target.closest("[data-bs-target='#verClase']")) {
            claseCompleta = claseCompleta.find(c => c.id === id)
            if (claseCompleta) renderDetailCard(claseCompleta, modalDetailClase)
        }

        // Editar
        if (e.target.closest("[data-bs-target='#editarClase']")) {
            claseCompleta = claseCompleta.find(c => c.id === id)
            renderEditForm(claseCompleta)
            editClaseFormEvents(claseCompleta, clases, empleados)
        }

        // Eliminar 
        if (e.target.closest("[data-bs-target='#eliminarClase']")) {
            btnDelete.setAttribute("data-id", id)
        }
    })

    btnDelete.addEventListener("click", () => {
        const id = parseInt(btnDelete.getAttribute("data-id"))

        //eliminar del array
        const index = clases.findIndex(c => c.id === id)
        if (index !== -1) {
            clases.splice(index, 1)
        }

        //renderizar
        const claseCompleta = objectClase(clases, empleados)
        renderClaseCard(claseCompleta, card)

        // cerrar el modal 
        const modal = bootstrap.Modal.getInstance(document.getElementById("eliminarClase"))
        modal.hide()
    })
}

export const createClaseFormEvents = (clases, empleados) => {

    formCrearClase.addEventListener("submit", (e) => {
        e.preventDefault()

        if (!formCrearClase.checkValidity()) {
            return
        }

        const data = new FormData(formCrearClase)

        const nuevaClase = {
            id: Date.now(),
            nombre: data.get("nombre"),
            descripcion: data.get("descripcion"),
            duracion: parseInt(data.get("duracion")),
            fecha: data.get("fecha"),
            hora: data.get("hora"),
            capacidad: parseInt(data.get("capacidad")),
            estado: "Programado",
            imagen: "img/default.jpg",
            entrenador_id: parseInt(data.get("entrenador"))
        }

        clases.push(nuevaClase)
        const claseCompleta = objectClase(clases, empleados)

        //volvemos a renderizar
        renderClaseCard(claseCompleta, card)
        renderSelectedCardEvent(clases, empleados)

        const modal = bootstrap.Modal.getInstance(document.getElementById("crearClase"))
        modal.hide()

        formCrearClase.reset()
        formCrearClase.classList.remove("was-validated")
    })

}

export const editClaseFormEvents = (claseCompleta, clases, empleados) => {

    formEditarClase.addEventListener("submit", (e) => {
        e.preventDefault()

        const data = new FormData(formEditarClase);

        console.log(data)

        if (!claseCompleta) return;

        const updatedClase = {
            ...claseCompleta,
            nombre: data.get("nombre"),
            descripcion: data.get("descripcion"),
            duracion: parseInt(data.get("duracion")),
            fecha: data.get("fecha"),
            hora: data.get("hora"),
            capacidad: parseInt(data.get("capacidad")),
            estado: claseCompleta.estado,
            imagen: "img/default.jpg",
            entrenador_id: parseInt(data.get("entrenador"))
        }

        const index = clases.findIndex(c => c.id === claseCompleta.id)
        if (index !== -1) {
            clases[index] = updatedClase
        }

        // Volver a renderizar
        renderClaseCard(objectClase(clases, empleados), card)

        console.log(updatedClase.nombre)

        const modal = bootstrap.Modal.getInstance(document.getElementById("editarClase"))
        modal.hide()

    }, { once: true })

}

