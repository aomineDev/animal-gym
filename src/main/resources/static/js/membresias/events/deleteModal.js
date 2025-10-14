import {
  membershipDeleteModal,
  deleteMembershipName,
  deleteMembershipBtn,
} from '../dom.js'
import { membershipList } from '../store.js'
import Service from '../../service/index.js'
import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'
import { renderDeletedMembershipCard } from '../render.js'

const service = new Service('membresias')
const bsModal = bootstrap.Modal.getOrCreateInstance(membershipDeleteModal)

async function handleDeleteMembership() {
  const id = this.dataset.id

  try {
    await service.delete(id)

    renderDeletedMembershipCard(id)

    delete membershipList[id]

    bsModal.hide()
    showToast('Membresia eliminada correctamente', TOAST_TYPES.SUCCESS)
  } catch (error) {
    showToast('Error al eliminar la membresia', TOAST_TYPES.ERROR)
    console.log(error)
  }
}

export default function registerMembershipDeleteModalEvents() {
  membershipDeleteModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id
    deleteMembershipBtn.dataset.id = id

    deleteMembershipName.textContent = membershipList[id].nombre
  })

  deleteMembershipBtn.addEventListener('click', handleDeleteMembership)
}
