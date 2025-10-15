import { TOAST_TYPES, showToast } from '../bootstrap/Toast.js'

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