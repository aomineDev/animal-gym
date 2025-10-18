import registerPartnerDeleteModalEvents from './events/deleteModal.js'
import partnerProfileModalEvents from './events/detailModal.js'
import registerPartnerFormModalEvents from './events/formModal.js'
import filterPartnerBy from './events/filterPartner.js'

document.addEventListener('DOMContentLoaded', () => {
  partnerProfileModalEvents()
  registerPartnerFormModalEvents()
  registerPartnerDeleteModalEvents()
  filterPartnerBy()
})
