import SocioRutinaRow from './components/SocioRutinaRow.js'
import RutinaRow from './components/RutinaRow.js'
import DetalleRutinaItem from './components/DetalleRutinaItem.js'
import { rutinaTable, rutinaSocioTable } from './dom.js'
import { detalleRutinaContainer } from './dom.js'

export function renderSocioRutinaTable(socios) {
  rutinaSocioTable.innerHTML = socios.map(SocioRutinaRow).join('')

  if (socios.length === 0) {
    rutinaSocioTable.innerHTML = `
          <tr>
            <td colspan="6" class="text-muted py-4">
              No se encontraron coincidencias
            </td>
          </tr>
        `
  } else {
    rutinaSocioTable.innerHTML = ''
    Object.values(socios).forEach((socio) => {
      rutinaSocioTable.insertAdjacentHTML('beforeend', SocioRutinaRow(socio))
    })
  }
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

export function renderDetalleRutinaAcoordion(detallesRutina) {
  const existingItems = detalleRutinaContainer.querySelectorAll(
    '.accordion-item, #noDetalleMessage'
  )
  existingItems.forEach((el) => el.remove())

  if (!detallesRutina || detallesRutina.length === 0) {
    detalleRutinaContainer.insertAdjacentHTML(
      'beforeend',
      `<div id="noDetalleMessage" class="text-center text-muted py-4">
        Esta rutina no tiene detalles
      </div>`
    )
    return
  }

  // Renderizar cada detalle como acordeón
  const html = detallesRutina.map(DetalleRutinaItem).join('')
  detalleRutinaContainer.insertAdjacentHTML('beforeend', html)
}
