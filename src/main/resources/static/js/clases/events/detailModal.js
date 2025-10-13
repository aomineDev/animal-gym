import {
  claseDetailModal,
  claseDetailNombre,
  claseDetailDescripcion,
} from '../dom.js'
import { claseList } from '../store.js'

export default function claseDetailModalEvents() {
  claseDetailModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id

    const clase = claseList[id]
    console.log(clase)
    claseDetailNombre.textContent = clase.nombre
    claseDetailDescripcion.textContent = clase.descripcion
  })
}
