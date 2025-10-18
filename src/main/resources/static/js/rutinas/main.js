import rutinaSocioDetailModalEvents from './events/detailModal.js'
import registerRutinaFormModalEvents from './events/rutinaFormModal.js'
import registerDeleteModalEvents from './events/deleteModal.js'
import registerRutinaRowClickEvents from './events/rutinaRowEvents.js'
import registerDetalleRutinaFormModalEvents from './events/rutinaDetalleFormModal.js'
import rutinaFilterEvents from './events/filter.js'

document.addEventListener('DOMContentLoaded', () => {
  rutinaSocioDetailModalEvents()
  registerRutinaFormModalEvents()
  registerDeleteModalEvents()
  registerRutinaRowClickEvents()
  registerDetalleRutinaFormModalEvents()
  rutinaFilterEvents()
})
