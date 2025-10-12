import ClaseCard from './components/ClaseCard.js'
import { claseContainer } from './dom.js'

export function renderNewClaseCard(clase) {
  claseContainer.insertAdjacentHTML('afterbegin', ClaseCard(clase))
}
