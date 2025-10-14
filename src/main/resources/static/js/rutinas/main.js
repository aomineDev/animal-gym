import rutinaSocioDetailModalEvents from './events/detailModal.js'
import registerRutinaFormModalEvents from './events/rutinaFormModal.js'
import registerRutinaDeleteModalEvents from './events/rutinaDeleteModal.js'
import registerRutinaRowClickEvents from './events/rutinaRowEvents.js'
import registerDetalleRutinaFormModalEvents from './events/rutinaDetalleFormModal.js'

document.addEventListener('DOMContentLoaded', () => {
  rutinaSocioDetailModalEvents()
  registerRutinaFormModalEvents()
  registerRutinaDeleteModalEvents()
  registerRutinaRowClickEvents()
  registerDetalleRutinaFormModalEvents()
})
