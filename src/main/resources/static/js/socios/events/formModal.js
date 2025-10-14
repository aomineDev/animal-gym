import {
  partnerForm,
  partnerFormModal,
  partnerFormModalTitle,
  partnerFormSubmit,
  partnerFormImage,
  partnerFormImagePreview,
  partnerProfileModal,
  partnerProfileFields,
} from '../dom.js'
import FORM_ACTIONS from '../../constants/formActions.js'
import Service from '../../service/index.js'
import StorageService from '../../service/storage.js'
import { showToast, TOAST_TYPES } from '../../bootstrap/toast.js'
import { renderNewPartnerCard, renderUpdatedPartnerCard } from '../render.js'
import { partnerList } from '../store.js'

const partnerService = new Service('socios')
const storageService = new StorageService('socios') //upload image
const bsModal = bootstrap.Modal.getOrCreateInstance(partnerFormModal)
const defaultFormPartnerImage = '/img/form/image-preview.png'
const defaultPartnerImage = '/img/membresias/default.png'

export default function registerPartnerFormModalEvents() {
  partnerForm.addEventListener('submit', handleFormSubmit)

  partnerFormModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id
    console.log('id detectado socio', id)
    if (id) {
      partnerForm.dataset.type = FORM_ACTIONS.UPDATE
      partnerForm.dataset.id = id
      partnerFormModalTitle.textContent = 'Actualizar Socio'
      partnerFormSubmit.textContent = 'Guardar Socio'
      console.log('form mostrar datos', id)
      fillPartnerForm(partnerList[id])
    } else {
      partnerForm.dataset.type = FORM_ACTIONS.CREATE
      partnerFormModalTitle.textContent = 'Nuevo Socio'
      partnerFormSubmit.textContent = 'Crear Socio'
      partnerFormImagePreview.src = defaultFormPartnerImage

      console.log('form create', id)
    }
  })

  partnerFormImage.addEventListener('change', handleImageChange)
}

function handleFormSubmit() {
  if (!this.checkValidity()) return
  const nombre = this.nombre.value.trim()
  const apellido = this.apellido.vlaue.trim()
  const dni = this.dni.value
  const telefono = this.telefono.value
  const email = this.email.value
  const fechaNacimiento = this.fechaNacimiento.value
  console.log('falta submit')
  return
}

function handleImageChange() {
  const imageFile = this.files[0]

  const imageURL = URL.createObjectURL(imageFile)

  partnerFormImagePreview.src = imageURL
}

function fillPartnerForm(obj) {
  partnerForm.nombre.value = obj.nombre
  partnerForm.apellido.value = obj.apellido
  partnerForm.dni.value = obj.dni
  partnerForm.telefono.value = obj.telefono
  partnerForm.email.value = obj.email
  partnerForm.fechaNacimiento.value = obj.fechaNacimiento
  partnerForm.membresia.value = obj.membresia.membresiaId
  partnerForm.fechaIngreso.value = obj.fechaIngreso
  partnerForm.peso.value = obj.peso
  partnerForm.altura.value = obj.altura
  partnerForm.estado.value = obj.estado ? 'activo' : 'inactivo'

  if (obj.imagen === defaultPartnerImage)
    partnerFormImagePreview.src = defaultFormPartnerImage
  else partnerFormImagePreview.src = obj.imagen
}
