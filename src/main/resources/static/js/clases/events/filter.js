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

function handleNameChange() {
  const term = this.value.toLowerCase().trim()
  const clases = Object.values(claseList)
  const filtradas = clases.filter((clase) =>
    clase.nombre.toLowerCase().includes(term)
  )
  renderClaseList(filtradas, 'con ese nombre')
}

function handleFechaInicioChange() {
  fechaFinInput.disabled = !fechaInicioInput.value
  if (!fechaInicioInput.value) {
    fechaFinInput.value = ''
  }
  filtrarPorFecha()
}

function handleFechaFinChange() {
  validateRange(fechaInicioInput, fechaFinInput, 'fecha')
  filtrarPorFecha()
}

function parseDateLocal(dateString) {
  if (!dateString) return null
  const [y, m, d] = dateString.split('T')[0].split('-').map(Number)
  return new Date(y, m - 1, d)
}

function filtrarPorFecha() {
  const fechaInicio = parseDateLocal(fechaInicioInput.value)
  const fechaFin = parseDateLocal(fechaFinInput.value)

  const clases = Object.values(claseList)

  const filtradas = clases.filter((clase) => {
    const fechaClase = parseDateLocal(clase.fecha)
    if (!fechaClase) return false

    if (fechaInicio && fechaClase < fechaInicio) return false
    if (fechaFin && fechaClase > fechaFin) return false
    return true
  })

  console.log(filtradas)

  renderClaseList(filtradas, 'en ese rango de fechas')
}

function handleEstadoChange() {
  const estadoSeleccionado = estadoInput.value

  if (!estadoSeleccionado) {
    renderClaseList(Object.values(claseList), 'con ese estado')
    return
  }

  const clasesFiltradas = Object.values(claseList).filter(
    (clase) => clase.estado === estadoSeleccionado
  )

  renderClaseList(clasesFiltradas, 'con ese estado')
}

function handleIntensidadChange() {
  const intensidadSeleccionado = intensidadInput.value

  if (!intensidadSeleccionado) {
    renderClaseList(Object.values(claseList), 'con esa intensidad')
    return
  }

  const clasesFiltradas = Object.values(claseList).filter(
    (clase) => clase.intensidad === intensidadSeleccionado
  )

  renderClaseList(clasesFiltradas, 'con esa intensidad')
}

export default function claseFilterEvents() {
  buscarClaseInput.addEventListener('input', handleNameChange)
  fechaInicioInput.addEventListener('change', handleFechaInicioChange)
  fechaFinInput.addEventListener('change', handleFechaFinChange)
  estadoInput.addEventListener('change', handleEstadoChange)
  intensidadInput.addEventListener('change', handleIntensidadChange)

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
