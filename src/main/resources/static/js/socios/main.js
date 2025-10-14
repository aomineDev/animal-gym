import registerPartnerDeleteModalEvents from './events/deleteModal.js'
import partnerProfileModalEvents from './events/detailModal.js'
import registerPartnerFormModalEvents from './events/formModal.js'

document.addEventListener('DOMContentLoaded', () => {
  partnerProfileModalEvents()
  registerPartnerFormModalEvents()
  registerPartnerDeleteModalEvents()
})
