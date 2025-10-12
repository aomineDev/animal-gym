import {
  claseForm,
  claseFormImage,
  claseFormImagePreview,
  claseFormModal,
  claseFormModalTitle,
  claseFormSubmit,
} from '../dom.js'
import Service from '../../service/index.js'
import StorageService from '../../service/storage.js'
import FORM_ACTIONS from '../../constants/formActions.js'
import { claseList } from '../store.js'
import { renderNewClaseCard } from '../render.js'
import { TOAST_TYPES, showToast } from '../../bootstrap/toast.js'

const claseService = new Service('clases')
const storageService = new StorageService('clases')
const bsModal = bootstrap.Modal.getOrCreateInstance(claseFormModal)
const defaultClaseImage = '/img/clases/default.png'
const defaultFormClaseImage = '/img/form/image-preview.png'

export default function registerClaseFormModalEvents() {
  claseForm.addEventListener('submit', handleFormSubmit)

  // claseFormModal.addEventListener('show.bs.modal', (e) => {
  //   const button = e.relatedTarget
  //   const id = button.datased.id

  //   if (id) {
  //     claseForm.dataset.type = FORM_ACTIONS.UPDATE
  //     claseForm.dataset.id = id
  //     claseFormModalTitle.textContent = 'Actualizar Clase'
  //     claseFormSubmit.textContent = 'Guardar Clase'

  //     //AUN FALTA EL FILL
  //   } else {
  //     claseForm.dataset.type = FORM_ACTIONS.CREATE
  //     claseFormModalTitle.textContent = 'Nueva Clase'
  //     claseFormSubmit.textContent = 'Crear Clase'
  //     claseFormImagePreview.src = defaultClaseImage
  //   }
  // })

  claseFormImage.addEventListener('change', handleImageChange)
}

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
        personaId: empleado,
      },
    }

    if (this.dataset.type === FORM_ACTIONS.CREATE) {
      const data = await claseService.save(clase)

      renderNewClaseCard(data)

      claseList[data.claseId] = data

      showToast('Clase creada con exito!', TOAST_TYPES.SUCCESS)
    }

    bsModal.hide()
  } catch (error) {
    showToast('No se pudo crear la clase', TOAST_TYPES.ERROR)
    console.log(error)
  }
}

function handleImageChange(e) {
  const imageFile = this.files[0]

  const imageURL = URL.createObjectURL(imageFile)

  claseFormImagePreview.src = imageURL
}

function calcularDuracion(horaInicio, horaFin) {
  const inicio = new Date(`1970-01-01T${horaInicio}:00`)
  const fin = new Date(`1970-01-01T${horaFin}:00`)
  return Math.floor((fin - inicio) / (1000 * 60))
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
