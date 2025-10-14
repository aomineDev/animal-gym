import { deleteModal, deleteModalTitle, deleteBtn } from '../dom.js'
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

  try {
    await serviceRutina.delete(rutinaId)
    const socioActualizado = await serviceSocio.findById(socioId)

    socioList[socioId] = socioActualizado

    renderRutinaDeleteRow(rutinaId)

    renderSocioRutinaTable(Object.values(socioList))

    showToast('Rutina eliminada correctamente del socio', TOAST_TYPES.SUCCESS)

    bsModal.hide()
  } catch (error) {
    console.error('Error:', error)
    showToast('Error al eliminar rutina del socio', TOAST_TYPES.ERROR)
  }
}

export default function registerRutinaDeleteModalEvents() {
  deleteModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const rutinaId = button.dataset.rutinaId
    const socioId = e.target.dataset.id

    //paso los ids al boton
    deleteBtn.dataset.rutinaId = rutinaId
    deleteBtn.dataset.id = socioId

    const rutina = socioList[socioId].rutinas.find(
      (r) => r.rutinaId === parseInt(rutinaId)
    )

    deleteModalTitle.textContent = rutina.nombre
  })

  deleteBtn.addEventListener('click', handleDelete)
}
