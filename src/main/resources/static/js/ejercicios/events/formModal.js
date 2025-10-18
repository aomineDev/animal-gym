import {
  ejercicioForm,
  ejercicioFormModal,
  ejercicioFormModalTitle,
  ejercicioFormSubmit,
} from '../dom.js'
import FORM_ACTIONS from '../../constants/formActions.js'
import Service from '../../service/index.js'

import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'
import { ejercicioList } from '../store.js'
import {
  renderNewEjercicioCard,
  renderUpdatedEjercicioCard,
} from '../render.js'

const ejercicioService = new Service('ejercicios')
const bsModal = bootstrap.Modal.getOrCreateInstance(ejercicioFormModal)

export default function registerEjercicioFormModalEvents() {
  ejercicioForm.addEventListener('submit', handleFormSubmit)

  ejercicioFormModal.addEventListener('show.bs.modal', (e) => {
    console.log('ejercicio form modal')
    const button = e.relatedTarget
    const id = button.dataset.id
    if (id) {
      ejercicioForm.dataset.type = FORM_ACTIONS.UPDATE
      ejercicioForm.dataset.id = id
      ejercicioFormModalTitle.textContent = 'Actualizar Ejercicio'
      ejercicioFormSubmit.textContent = 'Guardar Ejercicio'
      console.log('para actualizar ejercicio', id)
      fillEjercicioForm(ejercicioList[id])
    } else {
      ejercicioForm.dataset.type = FORM_ACTIONS.CREATE
      ejercicioFormModalTitle.textContent = 'Nuevo Ejercicio'
      ejercicioFormSubmit.textContent = 'Crear Ejercicio'

      console.log('crear ejercicio', id)
    }
  })
}

function fillEjercicioForm(obj) {
  ejercicioForm.nombre.value = obj.nombre
  ejercicioForm.descripcion.value = obj.descripcion
  ejercicioForm.grupoMuscular.value = obj.grupoMuscular
  ejercicioForm.equipo.value = obj.equipo
}

async function handleFormSubmit() {
  if (!this.checkValidity()) return

  const ejercicioId = this.dataset.id
  const nombre = this.nombre.value.trim()
  const descripcion = this.descripcion.value.trim()
  const grupoMuscular = this.grupoMuscular.value
  const equipo = this.equipo.value

  try {
    const ejercicio = {
      nombre,
      descripcion,
      grupoMuscular,
      equipo,
    }

    if (this.dataset.type === FORM_ACTIONS.CREATE) {
      const data = await ejercicioService.save(ejercicio)
      renderNewEjercicioCard(data)

      ejercicioList[data.ejercicioId] = data

      showToast('Ejercicio creado con exito!', TOAST_TYPES.SUCCESS)
    } else if (this.dataset.type === FORM_ACTIONS.UPDATE) {
      ejercicio.ejercicioId = ejercicioId
      const id = this.dataset.id
      const data = await ejercicioService.update(ejercicio, id)
      console.log(data)
      renderUpdatedEjercicioCard(data)

      ejercicioList[data.ejercicioId] = data
      console.log(ejercicioList)

      showToast('Ejercicio actualizado con exito!', TOAST_TYPES.SUCCESS)
    }

    bsModal.hide()
  } catch (error) {
    showToast('No se pudo crear el Ejercicio', TOAST_TYPES.ERROR)
    console.log(error)
  }
}
