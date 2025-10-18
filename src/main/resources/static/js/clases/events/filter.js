import {
  buscarClaseInput,
  fechaInicioInput,
  fechaFinInput,
  estadoInput,
  intensidadInput,
  resetFiltrosBtn,
} from '../dom.js'
import { claseList } from '../store.js'
import { renderClaseList } from '../render.js'
import { validateRange } from '../../service/validateInput.js'

function parseDateLocal(dateString) {
  if (!dateString) return null
  const [y, m, d] = dateString.split('T')[0].split('-').map(Number)
  return new Date(y, m - 1, d)
}

function aplicarFiltros() {
  const term = buscarClaseInput.value.toLowerCase().trim()
  const estadoSeleccionado = estadoInput.value
  const intensidadSeleccionada = intensidadInput.value
  const fechaInicio = parseDateLocal(fechaInicioInput.value)
  const fechaFin = parseDateLocal(fechaFinInput.value)

  let clases = Object.values(claseList)

  clases = clases.filter((clase) => {
    const nombreMatch = clase.nombre.toLowerCase().includes(term)
    const estadoMatch =
      !estadoSeleccionado || clase.estado === estadoSeleccionado
    const intensidadMatch =
      !intensidadSeleccionada || clase.intensidad === intensidadSeleccionada

    const fechaClase = parseDateLocal(clase.fecha)
    const fechaMatch =
      (!fechaInicio || fechaClase >= fechaInicio) &&
      (!fechaFin || fechaClase <= fechaFin)

    return nombreMatch && estadoMatch && intensidadMatch && fechaMatch
  })

  renderClaseList(clases)
}

function handleFechaInicioChange() {
  fechaFinInput.disabled = !fechaInicioInput.value
  if (!fechaInicioInput.value) fechaFinInput.value = ''
  aplicarFiltros()
}

function handleFechaFinChange() {
  validateRange(fechaInicioInput, fechaFinInput, 'fecha')
  aplicarFiltros()
}

export default function claseFilterEvents() {
  buscarClaseInput.addEventListener('input', aplicarFiltros)
  fechaInicioInput.addEventListener('change', handleFechaInicioChange)
  fechaFinInput.addEventListener('change', handleFechaFinChange)
  estadoInput.addEventListener('change', aplicarFiltros)
  intensidadInput.addEventListener('change', aplicarFiltros)

  resetFiltrosBtn.addEventListener('click', () => {
    buscarClaseInput.value = ''
    estadoInput.value = ''
    intensidadInput.value = ''
    fechaInicioInput.value = ''
    fechaFinInput.value = ''
    fechaFinInput.disabled = true

    renderClaseList(Object.values(claseList))
  })
}
