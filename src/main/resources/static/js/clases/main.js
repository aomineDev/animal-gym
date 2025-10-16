import registerClaseFormModalEvents from './events/formModal.js'
import claseDetailModalEvents from './events/detailModal.js'
import registerClaseDeleteModalEvents from './events/deleteModal.js'
import registerInscritosModalEvents from './events/gestionarInscritosModal.js'
import claseFilterEvents from './events/filter.js'

document.addEventListener('DOMContentLoaded', () => {
  registerClaseFormModalEvents()
  claseDetailModalEvents()
  registerClaseDeleteModalEvents()
  registerInscritosModalEvents()
  claseFilterEvents()
})
