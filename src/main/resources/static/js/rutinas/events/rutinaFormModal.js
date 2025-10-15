import {
  rutinaFormModal,
  rutinaForm,
  rutinaFormModalTitle,
  rutinaFormSubmit,
  rutinaFormFechaInicio,
  rutinaFormFechaFin,
  rutinaSocioDetailModal,
} from '../dom.js'
import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'
import { PERSONA_TYPE } from '../../constants/personaType.js'
import FORM_ACTIONS from '../../constants/formActions.js'
import { socioList } from '../store.js'
import { renderRutinaTable, renderSocioRutinaTable } from '../render.js'
import { validateDateNow, validateRange } from '../../service/validateInput.js'

const tipo = PERSONA_TYPE.EMPLEADO
const bsModal = bootstrap.Modal.getOrCreateInstance(rutinaFormModal)
const bsModalPadre = bootstrap.Modal.getOrCreateInstance(rutinaSocioDetailModal)

async function handleFormSubmit(e) {
  const socioId = e.target.dataset.socioId //recepciono el id del socio don data-socio-id

  if (!this.checkValidity()) return

  const nombre = this.nombre.value.trim()
  const fechaInicio = this.fechaInicio.value
  const fechaFin = this.fechaFin.value
  const descripcion = this.descripcion.value.trim()
  const objetivo = this.objetivo.value.trim()
  const empleado = parseInt(this.entrenador.value)

  const rutina = {
    nombre,
    fechaInicio,
    fechaFin,
    descripcion,
    objetivo,
    empleado: {
      tipo,
      personaId: empleado,
    },
  }

  if (this.dataset.type === FORM_ACTIONS.CREATE) {
    const response = await fetch(`/api/socios/${socioId}/rutinas`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rutina),
    })
    const socioGuardado = await response.json()
    socioList[socioId] = socioGuardado

    showToast('Rutina creada con exito!', TOAST_TYPES.SUCCESS)
  } else if (this.dataset.type === FORM_ACTIONS.UPDATE) {
    const response = await fetch(
      `/api/socios/${socioId}/rutinas/${this.dataset.id}`,
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(rutina),
      }
    )
    const socioGuardado = await response.json()
    socioList[socioId] = socioGuardado

    showToast('Rutina actualizada con exito!', TOAST_TYPES.SUCCESS)
  }

  renderRutinaTable(socioList[socioId])

  renderSocioRutinaTable(Object.values(socioList))

  bsModal.hide()
}

function fillRutinaForm(rutina) {
  rutinaForm.nombre.value = rutina.nombre
  rutinaForm.fechaInicio.value = rutina.fechaInicio
  rutinaForm.fechaFin.value = rutina.fechaFin
  rutinaForm.descripcion.value = rutina.descripcion
  rutinaForm.objetivo.value = rutina.objetivo
  rutinaForm.entrenador.value = rutina.empleado.personaId
}

function handleFechaInicioChange(e) {
  const input = e.target

  validateDateNow(input)
}

function handleFechaFinChange(e) {
  const inputFechaInicio = rutinaFormFechaInicio.value
  const inputFechaFin = e.target

  validateRange(inputFechaInicio, inputFechaFin, 'fecha')
}

export default function registerRutinaFormModalEvents() {
  rutinaForm.addEventListener('submit', handleFormSubmit)

  rutinaFormModal.addEventListener('show.bs.modal', (e) => {
    const socioId = e.target.dataset.id
    rutinaForm.dataset.socioId = socioId //envio el id del socio don data-socio-id

    const button = e.relatedTarget
    const rutinaId = button.dataset.rutinaId

    console.log('el socio es: ', socioId, 'selecciono rutina ', rutinaId)

    if (rutinaId) {
      rutinaForm.dataset.type = FORM_ACTIONS.UPDATE
      rutinaForm.dataset.id = rutinaId
      rutinaFormModalTitle.textContent = 'Actualizar Rutina'
      rutinaFormSubmit.textContent = 'Guardar Clase'

      fillRutinaForm(
        socioList[socioId].rutinas.find(
          (r) => r.rutinaId === parseInt(rutinaId) //le envio la rutina seleccionada del socio
        )
      )
    } else {
      rutinaForm.dataset.type = FORM_ACTIONS.CREATE
      rutinaFormModalTitle.textContent = 'Nueva Rutina'
      rutinaFormSubmit.textContent = 'Crear Rutina'
    }
  })

  rutinaFormModal.addEventListener('hidden.bs.modal', (e) => {
    const socioId = e.target.dataset.id
    rutinaSocioDetailModal.dataset.id = socioId
    bsModalPadre.show()
  })

  rutinaFormFechaInicio.addEventListener('change', handleFechaInicioChange)
  rutinaFormFechaFin.addEventListener('change', handleFechaFinChange)
}
