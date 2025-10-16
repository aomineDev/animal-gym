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
import { validateDateNow, validateRange } from '../../service/validateInput.js'
import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'
import { renderNewPartnerCard, renderUpdatedPartnerCard } from '../render.js'
import { partnerList } from '../store.js'
import { PERSONA_TYPE } from '../../constants/personaType.js'

const partnerService = new Service('socios')
const storageService = new StorageService('socios') //upload image
const bsModal = bootstrap.Modal.getOrCreateInstance(partnerFormModal)
const defaultFormPartnerImage = '/img/form/image-preview.png'
const defaultPartnerImage = '/img/membresias/default.png'
const tipo = PERSONA_TYPE.SOCIO

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

async function handleFormSubmit() {
  if (!this.checkValidity()) return
  const personaId = this.dataset.id
  const nombre = this.nombre.value.trim()
  const apellido = this.apellido.value.trim()
  const dni = this.dni.value
  const telefono = this.telefono.value
  const email = this.email.value
  const fechaNacimiento = this.fechaNacimiento.value
  const membresiaId = parseInt(this.membresia.value)
  const fechaIngreso = this.fechaIngreso.value
  const peso = parseFloat(this.peso.value)
  const altura = parseFloat(this.altura.value)
  const estado = this.estado.value === 'activo'
  const genero = 'femenino'
  const fechaVencimiento = '2025-10-29'
  const puntos = 100
  const file = this.file.files[0]
  let imagen =
    this.dataset.type === FORM_ACTIONS.CREATE
      ? defaultPartnerImage
      : partnerList[this.dataset.id].imagen
  console.log(imagen)

  try {
    if (file) imagen = await storageService.upload(file)

    const partner = {
      nombre,
      apellido,
      dni,
      telefono,
      email,
      fechaNacimiento,
      membresia: { membresiaId },
      fechaIngreso,
      peso,
      altura,
      estado,
      imagen,
      genero,
      puntos,
      fechaVencimiento,
      tipo,
    }

    if (this.dataset.type === FORM_ACTIONS.CREATE) {
      const data = await partnerService.save(partner)
      console.log(data)
      renderNewPartnerCard(data)

      partnerList[data.personaId] = data

      showToast('Socio creado con exito!', TOAST_TYPES.SUCCESS)
    } else if (this.dataset.type === FORM_ACTIONS.UPDATE) {
      partner.personaId = personaId
      const id = this.dataset.id
      const data = await partnerService.update(partner, id)
      console.log(data)
      renderUpdatedPartnerCard(data)

      partnerList[data.personaId] = data
      console.log(partnerList)

      showToast('Socio actualizado con exito!', TOAST_TYPES.SUCCESS)
    }

    bsModal.hide()
  } catch (error) {
    showToast('No se pudo crear al socio', TOAST_TYPES.ERROR)
    console.log(error)
  }
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
