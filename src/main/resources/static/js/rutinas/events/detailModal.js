import {
  rutinaSocioDetailModal,
  rutinaSocioDetailModalTitle,
  rutinaTable,
} from '../dom.js'
import { socioList } from '../store.js'
import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'
import Service from '../../service/index.js'
import { renderRutinaTable } from '../render.js'

const serviceSocio = new Service('socios')
const serviceRutina = new Service('rutinas')
const bsModal = bootstrap.Modal.getOrCreateInstance(rutinaSocioDetailModal)

function rutinaTableRender() {
  const id = rutinaTable.dataset.id
  console.log(socioList[id])
  renderRutinaTable(socioList[id])
}

export default function rutinaSocioDetailModalEvents() {
  rutinaSocioDetailModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id
    rutinaTable.dataset.id = id

    rutinaSocioDetailModalTitle.textContent =
      'Detalle de Rutinas - ' +
      socioList[id].nombre +
      ' ' +
      socioList[id].apellido

    rutinaTableRender()
  })
}
