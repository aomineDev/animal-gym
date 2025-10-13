import registerClaseFormModalEvents from './events/formModal.js'
import claseDetailModalEvents from './events/detailModal.js'
import registerClaseDeleteModalEvents from './events/deleteModal.js'

document.addEventListener('DOMContentLoaded', () => {
  registerClaseFormModalEvents()
  claseDetailModalEvents()
  registerClaseDeleteModalEvents()
})
