import { agregarRutinaForm } from "../dom.js"
import { renderRutinaFila } from "../render.js"

export const agregarRutinaEvents = (rutinas, container) => {
    agregarRutinaForm.addEventListener("submit", e => {

        e.preventDefault()

        console.log("dd")

        if (!agregarRutinaForm.checkValidity()) {
            return
        }

        const data = new FormData(agregarRutinaForm)

        const nuevaRutina = {
            id: Date.now(),
            nombre: data.get("nombre"),
            descripcion: data.get("descripcion"),
            duracion: parseInt(data.get("duracion")),
            estado: data.get("estado")
        }

        console.log(nuevaRutina.nombre)

        rutinas.push(nuevaRutina)

        //volvemos a renderizar
        renderRutinaFila(rutinas, container)

        const modal = bootstrap.Modal.getInstance(document.getElementById("agregarRutinaModal"))
        modal.hide()
    })
}