
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

export function renderCardFilter(filtradas) {
  empleadoContainerCard.innerHTML = "";

  if (filtradas.length === 0) {
    empleadoContainerCard.innerHTML = `
      <div class="text-center text-muted mt-4">
          <i class="bi bi-emoji-frown"></i>
          <p class="mb-0">No se encontro empleados</p>
        </div>`
  } else {
    filtradas.forEach((usuario) => {
      empleadoContainerCard.insertAdjacentHTML('beforeend', empleadoCard(usuario.persona, usuario))
    })
  }
}

