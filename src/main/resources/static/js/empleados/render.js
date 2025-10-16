
import { empleadoContainerCard } from "./dom.js"
import empleadoCard from "./components/empleadoCard.js"

export function renderEmpleadoCard(empleado, usuario) {
  empleadoContainerCard.insertAdjacentHTML('afterbegin', empleadoCard(empleado, usuario))
}

export function renderEmpleadoActualizar(empleado, usuario) {
  const empleadoCards = empleadoContainerCard.querySelector(

    `div[data-id="${empleado.personaId}"]`
  )
  if (empleadoCards) empleadoCards.outerHTML = empleadoCard(empleado, usuario);
}

export function rendeEmpleadoEliminar(id) {
  const card = empleadoContainerCard.querySelector('div[data-id="' + id + '"]')
  if (card) card.remove();
}