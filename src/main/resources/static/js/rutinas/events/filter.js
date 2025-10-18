import {
  buscarInput,
  estadoInput,
  entrenadorInput,
  resetFiltrosBtn,
} from '../dom.js'
import { socioList } from '../store.js'
import { renderSocioRutinaTable } from '../render.js'

function aplicarFiltros() {
  const term = buscarInput.value.toLowerCase().trim()
  const estadoSeleccionado = estadoInput.value
  const entrenadorId = entrenadorInput.value

  let socios = Object.values(socioList)

  socios = socios.filter((socio) => {
    const nombreDniMatch =
      !term ||
      socio.nombre.toLowerCase().includes(term) ||
      socio.dni.toLowerCase().includes(term)

    const tieneRutina = socio.rutinas && socio.rutinas.length > 0
    const estadoMatch =
      !estadoSeleccionado ||
      (estadoSeleccionado === 'Socios con rutina' && tieneRutina) ||
      (estadoSeleccionado === 'Socios sin rutina' && !tieneRutina)

    const entrenadorMatch =
      !entrenadorId ||
      socio.rutinas.some((rutina) => rutina.empleado.personaId == entrenadorId)

    return nombreDniMatch && estadoMatch && entrenadorMatch
  })

  renderSocioRutinaTable(socios)
}

export default function rutinaFilterEvents() {
  buscarInput.addEventListener('input', aplicarFiltros)
  estadoInput.addEventListener('change', aplicarFiltros)
  entrenadorInput.addEventListener('change', aplicarFiltros)

  resetFiltrosBtn.addEventListener('click', () => {
    buscarInput.value = ''
    estadoInput.value = ''
    entrenadorInput.value = ''
    renderSocioRutinaTable(Object.values(socioList))
  })
}
