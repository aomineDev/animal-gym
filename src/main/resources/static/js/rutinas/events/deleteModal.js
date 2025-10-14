import {
  deleteModal,
  deleteModalTitle,
  deleteBtn,
  rutinaTable,
} from '../dom.js'
import { socioList } from '../store.js'
import { TOAST_TYPES, showToast } from '../../bootstrap/Toast.js'
import { renderRutinaDeleteRow, renderSocioRutinaTable } from '../render.js'
import Service from '../../service/index.js'

const bsModal = bootstrap.Modal.getOrCreateInstance(deleteModal)
const serviceRutina = new Service('rutinas')
const serviceSocio = new Service('socios')

async function handleDelete() {
  const rutinaId = this.dataset.rutinaId
  const socioId = this.dataset.id
  const type = this.dataset.type // rutina o detalle

  console.log(socioId)

  try {
    if (type === 'rutina') {
      await serviceRutina.delete(rutinaId)
      const socioActualizado = await serviceSocio.findById(socioId)

      socioList[socioId] = socioActualizado

      renderRutinaDeleteRow(rutinaId)
      renderSocioRutinaTable(Object.values(socioList))
      showToast('Rutina eliminada correctamente', TOAST_TYPES.SUCCESS)
    }

    if (type === 'detalle') {
      const detalleId = this.dataset.detalleId

      const response = await fetch(
        `/api/rutinas/${rutinaId}/detalles/${detalleId}`,
        {
          method: 'DELETE',
        }
      )

      const socioActualizado = await serviceSocio.findById(socioId)
      socioList[socioId] = socioActualizado

      console.log(socioActualizado)

      showToast('Detalle Rutina eliminado correctamente', TOAST_TYPES.SUCCESS)
    }

    bsModal.hide()
  } catch (error) {
    console.error('Error:', error)
    showToast('Error al eliminar', TOAST_TYPES.ERROR)
  }
}

export default function registerDeleteModalEvents() {
  deleteModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const type = button.dataset.type
    const socioId = e.target.dataset.id
    const rutinaId = button.dataset.rutinaId ?? deleteModal.dataset.rutinaId //recupero el id o por boton o por el modal que le envio del click

    const rutina = socioList[socioId].rutinas.find(
      (r) => r.rutinaId === parseInt(rutinaId)
    )

    deleteBtn.dataset.type = type //se envia el tipo al btn

    if (type === 'rutina') {
      //se le envia los id al boton
      deleteBtn.dataset.rutinaId = rutinaId
      deleteBtn.dataset.id = socioId

      deleteModalTitle.textContent = rutina?.nombre ?? 'Rutina'
    }

    if (type === 'detalle') {
      //se le envia los id al boton
      const detalleId = button.dataset.detalleId
      deleteBtn.dataset.detalleId = detalleId
      deleteBtn.dataset.rutinaId = rutinaId
      deleteBtn.dataset.id = socioId

      console.log(detalleId, rutinaId)

      const detalleRutina = rutina.detalleRutinaList.find(
        (r) => r.detalleRutinaId === parseInt(detalleId)
      )

      deleteModalTitle.textContent = `Detalle #${detalleRutina.diaSemana} - ${detalleRutina.ejercicio.nombre}`
    }
  })

  deleteBtn.addEventListener('click', handleDelete)
}
