import { ejercicioContainer } from './dom.js'
import EjercicioCard from './components/EjercicioCard.js'

export function renderNewEjercicioCard(ejercicio) {
  ejercicioContainer.insertAdjacentHTML('afterbegin', EjercicioCard(ejercicio))
}

export function renderUpdatedEjercicioCard(ejercicio) {
  const ejercicioCard = ejercicioContainer.querySelector(
    `tr[data-id="${ejercicio.ejercicioId}"]`
  )
  if (ejercicioCard) ejercicioCard.outerHTML = EjercicioCard(ejercicio)
}

export function renderDeletedEjercicioItem(id) {
  const item = ejercicioContainer.querySelector('tr[data-id="' + id + '"]')

  if (item) item.remove()
}

export function renderEjerciciosFilter(list, container) {
  container.innerHTML = Object.values(list)
    .map((ejercicio) => EjercicioCard(ejercicio))
    .join('')
}
