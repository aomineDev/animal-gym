import ClaseCard from './components/ClaseCard.js'
import { claseContainer } from './dom.js'

export function renderNewClaseCard(clase) {
  claseContainer.insertAdjacentHTML('afterbegin', ClaseCard(clase))
}

export function renderUpdatedClaseCard(clase) {
  const claseCard = claseContainer.querySelector(
    `div[data-id="${clase.claseId}"]`
  )
  if (claseCard) claseCard.outerHTML = ClaseCard(clase)
}

export function renderDeletedClaseCard(id) {
  const card = claseContainer.querySelector('div[data-id="' + id + '"]')

  if (card) card.remove()
}
