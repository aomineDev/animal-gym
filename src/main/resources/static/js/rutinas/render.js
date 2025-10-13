import RutinaRow from './components/RutinaRow.js'
import { rutinaTable } from './dom.js'

export function renderRutinaTable(socio) {
  if (!socio.rutinas || socio.rutinas.length === 0) {
    validatedTable(rutinaTable)
    return
  }

  rutinaTable.innerHTML = socio.rutinas
    .map((rutina) => RutinaRow(rutina))
    .join('')
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
