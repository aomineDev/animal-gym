import { card, modalDetailClase, btnDelete, formCrearClase } from '../dom.js'
import { renderDetailCard, renderClaseCard } from '../render.js'
import { objectClase } from '../objeto.js'

export const renderSelectedCardEvent = (clases) => {

    card.addEventListener("click", e => {
        const btn = e.target.closest("[data-id]")
        if (!btn) return

        const id = parseInt(btn.getAttribute("data-id"))
        console.log(id)

        // Detalle
        if (e.target.closest("[data-bs-target='#verClase']")) {
            const clase = clases.find(c => c.id === id)
            if (clase) renderDetailCard(clase, modalDetailClase)
        }

        // Editar
        if (e.target.closest("[data-bs-target='#editarClase']")) {
            const clase = clases.find(c => c.id === id)

        }

        // Eliminar 
        if (e.target.closest("[data-bs-target='#eliminarClase']")) {
            btnDelete.setAttribute("data-id", id)
        }
    })

    btnDelete.addEventListener("click", () => {
        const id = parseInt(btnDelete.getAttribute("data-id"))
        clases = clases.filter(c => c.id !== id)
        renderClaseCard(clases, card)

        // cerrar el modal 
        const modal = bootstrap.Modal.getInstance(document.getElementById("eliminarClase"))
        modal.hide()
    })
}

export const createClaseFormEvents = (clases, empleados) => {

    formCrearClase.addEventListener("submit", (e) => {
        e.preventDefault()

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
        renderSelectedCardEvent(claseCompleta)

        const modal = bootstrap.Modal.getInstance(document.getElementById("crearClase"))
        modal.hide()
        formCrearClase.reset()
    })

}

