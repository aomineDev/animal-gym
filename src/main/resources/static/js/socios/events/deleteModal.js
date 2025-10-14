import Service from '../../service/index.js'
import { deletePartnerBtn, deletePartnerName } from '../dom.js'
import { partnerList } from '../store.js'

import { showToast, TOAST_TYPES } from '../../bootstrap/toast.js'
import { renderDeletedPartnerItem } from '../render.js'

const service = new Service('socios')
const bsModal = bootstrap.Modal.getOrCreateInstance(partnerDeleteModal)

export default function registerPartnerDeleteModalEvents() {
  partnerDeleteModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id
    deletePartnerBtn.dataset.id = id

    const obj = partnerList[id]
    deletePartnerName.textContent = obj.nombre
  })

  deletePartnerBtn.addEventListener('click', handleDeletePartner)
}

async function handleDeletePartner() {
  const id = this.dataset.id

  try {
    await service.delete(id)

    renderDeletedPartnerItem(id)

    delete partnerList[id]

    bsModal.hide()
    showToast('Socio eliminado correctamente', TOAST_TYPES.ERROR)
  } catch (error) {
    showToast('Error al eliminar el socio', TOAST_TYPES.ERROR)
    console.log(error)
  }
}
