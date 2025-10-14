import { rutinaTable, detalleRutinaFormModal } from '../dom.js'
import { socioList } from '../store.js'
import { renderDetalleRutinaAcoordion } from '../render.js'

export default function registerRutinaRowClickEvents() {
  rutinaTable.addEventListener('click', (e) => {
    const row = e.target.closest('.rutina-row')
    if (!row) return

    const rutinaId = row.dataset.rutinaId
    const socioId = rutinaTable.dataset.id

    detalleRutinaFormModal.dataset.id = rutinaId //le envio la rutina clickeada
    detalleRutinaFormModal.dataset.socioId = socioId

    console.log('Fila clickeada — ID:', rutinaId, socioId)

    renderDetalleRutinaAcoordion(
      socioList[socioId].rutinas.find((r) => r.rutinaId === parseInt(rutinaId))
        .detalleRutinaList
    )
  })
}
