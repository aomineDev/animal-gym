import { claseDeleteModal, deleteClaseBtn, deleteClaseName } from '../dom.js'
import { claseList } from '../store.js'
import Service from '../../service/index.js'
import { renderDeletedClaseCard } from '../render.js'
import { TOAST_TYPES, showToast } from '../../bootstrap/Toast.js'

const service = new Service('clases')
const bsModal = bootstrap.Modal.getOrCreateInstance(claseDeleteModal)

async function handleDeleteClase() {
  const id = this.dataset.id

  try {
    await service.delete(id)

    renderDeletedClaseCard(id)

    delete claseList[id]

    bsModal.hide()
    showToast('Clase eliminada correctamente', TOAST_TYPES.SUCCESS)
  } catch (error) {
    showToast('Error al eliminar la clase', TOAST_TYPES.ERROR)
    console.log(error)
  }
}

export default function registerClaseDeleteModalEvents() {
  claseDeleteModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id
    deleteClaseBtn.dataset.id = id

    console.log(claseList[id])
    deleteClaseName.textContent = claseList[id].nombre
  })

  deleteClaseBtn.addEventListener('click', handleDeleteClase)
}
