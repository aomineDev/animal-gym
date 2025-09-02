import { RutinaFila } from "./componente/RutinaFila.js";
import { EditRutina } from "./componente/EditRutina.js"
import { editarRutinaForm } from "./dom.js";

export const renderRutinaFila = (rutinas, container) => {

    container.innerHTML = ''

    rutinas.forEach(rutina => {
        container.innerHTML += RutinaFila(rutina)
    });

}

export const renderEditForm = (rutina) => {
    editarRutinaForm.innerHTML = ""
    editarRutinaForm.innerHTML = EditRutina(rutina)
}