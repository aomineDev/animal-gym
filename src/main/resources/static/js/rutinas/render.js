import SocioRutinaRow from './components/SocioRutinaRow.js'
import RutinaRow from './components/RutinaRow.js'
import { rutinaTable, rutinaSocioTable } from './dom.js'

export function renderSocioRutinaTable(socios) {
  rutinaSocioTable.innerHTML = socios.map(SocioRutinaRow).join('')
}

export function renderRutinaTable(socio) {
  if (!socio.rutinas || socio.rutinas.length === 0) {
    validatedTable(rutinaTable)
    return
  }

  rutinaTable.innerHTML = socio.rutinas
    .map((rutina) => RutinaRow(rutina))
    .join('')
}

export function renderRutinaDeleteRow(rutinaId) {
  const btn = rutinaTable.querySelector(`button[data-rutina-id="${rutinaId}"]`)

  if (btn) {
    const fila = btn.closest('tr')
    fila.remove()
  }

  const filasRestantes = rutinaTable.querySelectorAll('tr')
  if (filasRestantes.length === 0) {
    validatedTable(rutinaTable)
  }
}

function validatedTable(rutinaTable) {
  rutinaTable.innerHTML = `
      <tr>
        <td colspan="6" class="text-muted py-4">
          Este socio no cuenta con rutinas
        </td>
      </tr>
    `
}
