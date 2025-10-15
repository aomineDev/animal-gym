import {
  detalleRutinaForm,
  detalleRutinaFormModal,
  rutinaSocioDetailModal,
} from '../dom.js'
import Service from '../../service/index.js'
import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'
import { renderDetalleRutinaAcoordion } from '../render.js'
import { socioList } from '../store.js'

const serviceSocios = new Service('socios')
const bsModal = bootstrap.Modal.getOrCreateInstance(detalleRutinaFormModal)
const bsModalPadre = bootstrap.Modal.getOrCreateInstance(rutinaSocioDetailModal)

async function handleFormSubmit() {
  const rutinaId = this.dataset.id //rutina seleccionada
  const socioId = this.dataset.socioId

  if (!this.checkValidity()) return

  const diaSemana = this.diaSemana.value.trim()
  const serie = this.serie.value.trim()
  const repeticiones = this.repeticiones.value.trim()
  const peso = this.peso.value
  const calorias = this.calorias.value
  const tiempoDescanso = this.tiempoDescanso.value
  const ejercicio = parseInt(this.ejercicio.value)

  const detalleRutina = {
    diaSemana: diaSemana,
    serie: serie,
    repeticiones: repeticiones,
    peso: peso,
    calorias: calorias,
    tiempoDescanso: tiempoDescanso,
    ejercicio: {
      ejercicioId: ejercicio,
    },
  }

  try {
    const response = await fetch(`/api/rutinas/${rutinaId}/detalles`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(detalleRutina),
    })

    const socioActualizado = await serviceSocios.findById(socioId)

    socioList[socioId] = socioActualizado

    renderDetalleRutinaAcoordion(
      socioList[socioId].rutinas.find((r) => r.rutinaId === parseInt(rutinaId))
        .detalleRutinaList
    )

    showToast('Detalle Rutina creada con exito!', TOAST_TYPES.SUCCESS)

    bsModal.hide()
  } catch (err) {
    console.error('Error al agregar detalle', TOAST_TYPES.ERROR)
    showToast('Error al agregar detalle', TOAST_TYPES.ERROR)
  }
}

export default function registerDetalleRutinaFormModalEvents() {
  detalleRutinaForm.addEventListener('submit', handleFormSubmit)

  detalleRutinaFormModal.addEventListener('show.bs.modal', (e) => {
    const rutinaId = e.target.dataset.id
    const socioId = e.target.dataset.socioId

    detalleRutinaForm.dataset.id = rutinaId
    detalleRutinaForm.dataset.socioId = socioId
  })

  detalleRutinaFormModal.addEventListener('hidden.bs.modal', (e) => {
    const socioId = e.target.dataset.socioId

    rutinaSocioDetailModal.dataset.id = socioId
    bsModalPadre.show()
  })
}
