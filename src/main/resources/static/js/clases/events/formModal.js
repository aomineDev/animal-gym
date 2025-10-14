import {
  claseForm,
  claseFormImage,
  claseFormImagePreview,
  claseFormModal,
  claseFormModalTitle,
  claseFormSubmit,
  claseFormDate,
  claseFormHoraInicio,
  claseFormHoraFin,
} from '../dom.js'
import Service from '../../service/index.js'
import StorageService from '../../service/storage.js'
import FORM_ACTIONS from '../../constants/formActions.js'
import { PERSONA_TYPE } from '../../constants/personaType.js'
import { claseList } from '../store.js'
import { renderNewClaseCard, renderUpdatedClaseCard } from '../render.js'
import { TOAST_TYPES, showToast } from '../../bootstrap/Toast.js'

const claseService = new Service('clases')
const storageService = new StorageService('clases')
const bsModal = bootstrap.Modal.getOrCreateInstance(claseFormModal)
const defaultClaseImage = '/img/clases/default.png'
const defaultFormClaseImage = '/img/form/image-preview.png'
const tipo = PERSONA_TYPE.EMPLEADO

async function handleFormSubmit(e) {
  if (!this.checkValidity()) return

  const nombre = this.nombre.value.trim()
  const intensidad = this.intensidad.value
  const capacidad = parseInt(this.capacidad.value)
  const fecha = this.fecha.value
  const horaInicio = this.horaInicio.value
  const horaFin = this.horaFin.value
  const descripcion = this.descripcion.value.trim()
  const objetivo = this.objetivo.value.trim()
  const duracion = calcularDuracion(horaInicio, horaFin)
  const estado = calcularEstado(fecha, horaInicio, horaFin)
  const file = this.file.files[0]
  const empleado = parseInt(this.entrenador.value)
  let imagen =
    this.dataset.type === FORM_ACTIONS.CREATE
      ? defaultClaseImage
      : claseList[this.dataset.id].imagen

  try {
    if (file) imagen = await storageService.upload(file)

    const clase = {
      nombre,
      intensidad,
      capacidad,
      fecha,
      horaInicio,
      horaFin,
      descripcion,
      objetivo,
      duracion,
      estado,
      imagen,
      empleado: {
        tipo,
        personaId: empleado,
      },
    }

    if (this.dataset.type === FORM_ACTIONS.CREATE) {
      const data = await claseService.save(clase)

      renderNewClaseCard(data)

      claseList[data.claseId] = data

      showToast('Clase creada con exito!', TOAST_TYPES.SUCCESS)
    } else if (this.dataset.type === FORM_ACTIONS.UPDATE) {
      const id = this.dataset.id

      console.log(id)
      console.log(clase)
      const data = await claseService.update(clase, id)
      console.log(data)

      renderUpdatedClaseCard(data)
      claseList[data.claseId] = data

      showToast('Clase actualizada con exito!', TOAST_TYPES.SUCCESS)
    }
    bsModal.hide()
  } catch (error) {
    showToast('No se pudo crear la clase', TOAST_TYPES.ERROR)
    console.log(error)
  }
}

function handelDateChange(e) {
  const input = e.target

  const fechaSeleccionada = new Date(input.value)
  fechaSeleccionada.setHours(0, 0, 0, 0)

  if (input.value < new Date().toISOString().split('T')[0]) {
    input.value = ''
    showToast('La fecha no puede ser anterior a hoy', TOAST_TYPES.WARNING)
  }
}

function handleHoraInicioChange(e) {
  const inputHoraInicio = e.target
  const inputFecha = claseFormDate.value

  if (!inputFecha) {
    inputHoraInicio.value = ''
    showToast('Seleccione primero una fecha', TOAST_TYPES.WARNING)
    return
  }

  const [year, month, day] = inputFecha.split('-').map(Number)
  const fechaSeleccionada = new Date(year, month - 1, day)
  const hoy = new Date()

  hoy.setHours(0, 0, 0, 0)
  fechaSeleccionada.setHours(0, 0, 0, 0)

  if (fechaSeleccionada.getTime() === hoy.getTime()) {
    const [hora, minuto] = inputHoraInicio.value.split(':').map(Number)
    const horaSeleccionada = new Date()
    horaSeleccionada.setHours(hora, minuto, 0, 0)

    const ahora = new Date()

    if (horaSeleccionada < ahora) {
      inputHoraInicio.value = ''
      showToast(
        'La hora no puede ser anterior a la hora actual',
        TOAST_TYPES.WARNING
      )
    }
  }
}

function handleHoraFinChange(e) {
  const inputHoraInicio = claseFormHoraInicio.value
  const inputHoraFin = e.target

  if (!inputHoraInicio) {
    inputHoraFin.value = ''
    showToast('Rellene la hora de inicio primero', TOAST_TYPES.WARNING)
    return
  }

  const [horaInicio, minutoInicio] = inputHoraInicio.split(':').map(Number)
  const [horaFin, minutoFin] = inputHoraFin.value.split(':').map(Number)

  const horaInicioDate = new Date()
  horaInicioDate.setHours(horaInicio, minutoInicio, 0, 0)

  const horaFinDate = new Date()
  horaFinDate.setHours(horaFin, minutoFin, 0, 0)

  if (horaFinDate <= horaInicioDate) {
    inputHoraFin.value = ''
    showToast(
      'La hora de fin debe ser posterior a la hora de inicio',
      TOAST_TYPES.WARNING
    )
  }
}

function handleImageChange(e) {
  const imageFile = this.files[0]

  const imageURL = URL.createObjectURL(imageFile)

  claseFormImagePreview.src = imageURL
}

function fillClaseForm(clase) {
  claseForm.nombre.value = clase.nombre
  claseForm.intensidad.value = clase.intensidad
  claseForm.capacidad.value = clase.capacidad
  claseForm.fecha.value = clase.fecha
  claseForm.horaInicio.value = clase.horaInicio
  claseForm.horaFin.value = clase.horaFin
  claseForm.descripcion.value = clase.descripcion
  claseForm.objetivo.value = clase.objetivo
  claseForm.entrenador.value = clase.empleado.personaId

  if (clase.imagen === defaultClaseImage)
    claseFormImagePreview.src = defaultFormClaseImage
  else claseFormImagePreview.src = clase.imagen

  if (clase.empleado && clase.empleado.persona) {
    claseForm.entrenador.value = clase.entrenador.persona.personaId
  }
}

export default function registerClaseFormModalEvents() {
  claseForm.addEventListener('submit', handleFormSubmit)

  claseFormModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id

    if (id) {
      claseForm.dataset.type = FORM_ACTIONS.UPDATE
      claseForm.dataset.id = id
      claseFormModalTitle.textContent = 'Actualizar Clase'
      claseFormSubmit.textContent = 'Guardar Clase'

      fillClaseForm(claseList[id])
    } else {
      claseForm.dataset.type = FORM_ACTIONS.CREATE
      claseFormModalTitle.textContent = 'Nueva Clase'
      claseFormSubmit.textContent = 'Crear Clase'
      claseFormImagePreview.src = defaultFormClaseImage
    }
  })

  claseFormDate.addEventListener('change', handelDateChange)
  claseFormImage.addEventListener('change', handleImageChange)
  claseFormHoraInicio.addEventListener('change', handleHoraInicioChange)
  claseFormHoraFin.addEventListener('change', handleHoraFinChange)
}

function calcularDuracion(horaInicio, horaFin) {
  if (!horaInicio || !horaFin) return 0

  const [hInicio, mInicio] = horaInicio.split(':').map(Number)
  const [hFin, mFin] = horaFin.split(':').map(Number)

  let duracion = hFin * 60 + mFin - (hInicio * 60 + mInicio)

  if (duracion < 0) duracion += 24 * 60

  return duracion
}

function calcularEstado(fecha, horaInicio, horaFin) {
  const ahora = new Date()
  const fechaClase = new Date(`${fecha}T${horaInicio}`)
  const fechaFin = new Date(`${fecha}T${horaFin}`)

  if (ahora < fechaClase) {
    return 'Programado'
  } else if (ahora >= fechaClase && ahora <= fechaFin) {
    return 'En curso'
  } else {
    return 'Finalizado'
  }
}
