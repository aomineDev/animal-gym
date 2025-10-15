import { showToast, TOAST_TYPES } from '../bootstrap/Toast.js'

export function validateDateNow(input) {
  const fechaSeleccionada = new Date(input.value)
  fechaSeleccionada.setHours(0, 0, 0, 0)

  if (input.value < new Date().toISOString().split('T')[0]) {
    input.value = ''
    showToast('La fecha no puede ser anterior a hoy', TOAST_TYPES.WARNING)
  }
}

export function validateRange(inputInicio, inputFin, tipo) {
  const valorInicio = inputInicio.value || inputInicio
  const valorFin = inputFin.value

  if (!valorInicio) {
    inputFin.value = ''
    showToast(`Rellene la ${tipo} de inicio primero`, TOAST_TYPES.WARNING)
    return
  }

  if (tipo === 'fecha') {
    const fechaInicio = new Date(valorInicio)
    const fechaFin = new Date(valorFin)

    fechaInicio.setHours(0, 0, 0, 0)
    fechaFin.setHours(0, 0, 0, 0)

    if (fechaFin < fechaInicio) {
      inputFin.value = ''
      showToast(
        'La fecha de fin debe ser igual o posterior a la fecha de inicio',
        TOAST_TYPES.WARNING
      )
    }
  } else if (tipo === 'hora') {
    const [horaInicio, minutoInicio] = valorInicio.split(':').map(Number)
    const [horaFin, minutoFin] = valorFin.split(':').map(Number)

    const horaInicioDate = new Date()
    horaInicioDate.setHours(horaInicio, minutoInicio, 0, 0)

    const horaFinDate = new Date()
    horaFinDate.setHours(horaFin, minutoFin, 0, 0)

    if (horaFinDate <= horaInicioDate) {
      inputFin.value = ''
      showToast(
        'La hora de fin debe ser posterior a la hora de inicio',
        TOAST_TYPES.WARNING
      )
    }
  }
}
export async function validatePersona(inputEmail, inputTelefono, inputDni, serviceType) {
  const email = inputEmail.value.trim()
  const telefono = inputTelefono.value.trim()
  const dni = inputDni.value.trim()

  const data = await serviceType.findAll();
  const dniEncontrato = data.find(per => per.dni === dni)
  const telefonoEncontrato = data.find(per => per.telefono === telefono)
  const emailEcontrato = data.find(per => per.email === email)

  if (dniEncontrato) {
    showToast("Dni ya fue registrado", TOAST_TYPES.WARNING)
    inputDni.value = ""
  }
  if (telefonoEncontrato) {
    showToast("Telefono ya fue registrado", TOAST_TYPES.WARNING)
    inputTelefono.value = ""
  }
  if (emailEcontrato) {
    showToast("Email ya fue registrado", TOAST_TYPES.WARNING)
    inputEmail.value = ""
  }
}