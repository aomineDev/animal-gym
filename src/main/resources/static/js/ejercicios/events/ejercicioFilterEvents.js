import EjercicioCard from '../components/EjercicioCard.js'
import { buscarEjercicio, ejercicioContainer } from '../dom.js'
import { renderEjercicios } from '../render.js'
import { ejercicioList } from '../store.js'

export default function filteredEjercicios() {
  renderEjercicios(ejercicioList, ejercicioContainer)

  buscarEjercicio.addEventListener('input', handleFilterByName)
}

function handleFilterByName(e) {
  const searchTerm = e.target.value.toLowerCase().trim()

  const filtrados = Object.values(ejercicioList).filter((ej) =>
    ej.nombre.toLowerCase().includes(searchTerm)
  )

  ejercicioContainer.innerHTML = filtrados.length
    ? filtrados.map(EjercicioCard).join('')
    : `<tr><td colspan="6" class="text-center text-muted">No se encontraron ejercicios</td></tr>`
}
