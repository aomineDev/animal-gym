import registerEjercicioDeleteModalEvents from './events/DeleteModal.js'
import filteredEjercicios from './events/ejercicioFilterEvents.js'
import registerEjercicioFormModalEvents from './events/formModal.js'

document.addEventListener('DOMContentLoaded', () => {
  registerEjercicioDeleteModalEvents()
  registerEjercicioFormModalEvents()
  // paginacion()
  filteredEjercicios()
})
