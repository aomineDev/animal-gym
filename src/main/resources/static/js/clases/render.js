import ClaseCard from './components/ClaseCard.js'
import Row from './components/Row.js'
import { claseContainer, sociosInscritosTable } from './dom.js'

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

export function renderSociosInscritos(clase) {
  if (!clase.reservas || clase.reservas.length === 0) {
    sociosInscritosTable.innerHTML = `
      <tr>
        <td colspan="5" class="text-muted py-4">
          Aún no hay socios inscritos
        </td>
      </tr>
    `
    return
  }

  sociosInscritosTable.innerHTML = Row(clase)
}
