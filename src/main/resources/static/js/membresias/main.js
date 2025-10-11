import registerMembershipFormModalEvents from './events/formModal.js'
import registerMembershipDeleteModalEvents from './events/deleteModal.js'

document.addEventListener('DOMContentLoaded', () => {
  registerMembershipFormModalEvents()
  registerMembershipDeleteModalEvents()
})
