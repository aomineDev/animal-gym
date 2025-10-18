import Service from '../../service/index.js'
import {
  deleteEjercicioBtn,
  deleteEjercicioName,
  ejercicioDeleteModal,
} from '../dom.js'
import { ejercicioList } from '../store.js'
import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'
import { renderDeletedEjercicioItem } from '../render.js'

const service = new Service('ejercicios')
const bsModal = bootstrap.Modal.getOrCreateInstance(ejercicioDeleteModal)

export default function registerEjercicioDeleteModalEvents() {
  ejercicioDeleteModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id
    deleteEjercicioBtn.dataset.id = id

    const obj = ejercicioList[id]
    deleteEjercicioName.textContent = obj.nombre
  })
  deleteEjercicioBtn.addEventListener('click', handleDeleteEjercicio)
}

async function handleDeleteEjercicio(e) {
  const id = this.dataset.id
  console.log('a punto de eliminar', id)
  try {
    await service.delete(id)

    renderDeletedEjercicioItem(id)

    delete ejercicioList[id]

    bsModal.hide()
    showToast('Ejercicio eliminado correctamente', TOAST_TYPES.ERROR)
  } catch (error) {
    showToast('Error al eliminar el ejercicio', TOAST_TYPES.ERROR)
    console.log(error)
  }
}
