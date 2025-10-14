import rutinaSocioDetailModalEvents from './events/detailModal.js'
import registerRutinaFormModalEvents from './events/rutinaFormModal.js'
import registerRutinaDeleteModalEvents from './events/rutinaDeleteModal.js'

document.addEventListener('DOMContentLoaded', () => {
  rutinaSocioDetailModalEvents()
  registerRutinaFormModalEvents()
  registerRutinaDeleteModalEvents()
})
