import ClaseCard from './components/ClaseCard.js'
import Row from './components/Row.js'
import { claseContainer, sociosInscritosTable } from './dom.js'

export function renderClaseList(filtradas) {
  if (filtradas.length === 0) {
    claseContainer.innerHTML = `
        <div class="text-center text-muted mt-4">
          <i class="bi bi-emoji-frown"></i>
          <p class="mb-0">No se encontraron clases con ese nombre</p>
        </div>
      `
  } else {
    claseContainer.innerHTML = ''
    Object.values(filtradas).forEach((clase) => {
      claseContainer.insertAdjacentHTML('beforeend', ClaseCard(clase))
    })
  }
}

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
    validatedTable(sociosInscritosTable)
    return
  }

  sociosInscritosTable.innerHTML = Row(clase)
}

export function renderDeleteRow(reservaId) {
  const btn = sociosInscritosTable.querySelector(
    `button[data-reserva-id="${reservaId}"]`
  )

  if (btn) {
    const fila = btn.closest('tr')
    fila.remove()
  }

  const filasRestantes = sociosInscritosTable.querySelectorAll('tr')
  if (filasRestantes.length === 0) {
    validatedTable(sociosInscritosTable)
  }
}

function validatedTable(sociosInscritosTable) {
  sociosInscritosTable.innerHTML = `
      <tr>
        <td colspan="5" class="text-muted py-4">
          Aún no hay socios inscritos
        </td>
      </tr>
    `
}
