import registerMembershipFormModalEvents from './events/formModal.js'
import registerMembershipDeleteModalEvents from './events/deleteModal.js'
import filterMembershipBy from './events/filter.js'

document.addEventListener('DOMContentLoaded', () => {
  registerMembershipFormModalEvents()
  registerMembershipDeleteModalEvents()
  filterMembershipBy()
})
