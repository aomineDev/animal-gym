import {
  rutinaSocioDetailModal,
  rutinaSocioDetailModalTitle,
  rutinaFormModal,
  deleteModal,
} from '../dom.js'
import { socioList } from '../store.js'
import { renderRutinaTable } from '../render.js'

export default function rutinaSocioDetailModalEvents() {
  rutinaSocioDetailModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id
    rutinaFormModal.dataset.id = id
    deleteModal.dataset.id = id

    rutinaSocioDetailModalTitle.textContent =
      'Detalle de Rutinas - ' +
      socioList[id].nombre +
      ' ' +
      socioList[id].apellido

    renderRutinaTable(socioList[id]) // renderizo las rutinas del socio
  })
}
