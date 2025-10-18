import {
  buscarInput,
  estadoInput,
  entrenadorInput,
  resetFiltrosBtn,
} from '../dom.js'
import { socioList } from '../store.js'
import { renderSocioRutinaTable } from '../render.js'

function handleNameChange() {
  const term = this.value.toLowerCase().trim()
  const socio = Object.values(socioList)
  const filtradas = socio.filter(
    (socio) =>
      socio.nombre.toLowerCase().includes(term) ||
      socio.dni.toLowerCase().includes(term)
  )
  renderSocioRutinaTable(filtradas)
}

function handleEstadoChange() {
  const estadoSeleccionado = estadoInput.value

  if (!estadoSeleccionado) {
    renderSocioRutinaTable(Object.values(socioList))
    return
  }

  let sociosFiltrados = []

  if (estadoSeleccionado === 'Socios con rutina') {
    sociosFiltrados = Object.values(socioList).filter(
      (socio) => socio.rutinas.length !== 0
    )
  } else if (estadoSeleccionado === 'Socios sin rutina') {
    sociosFiltrados = Object.values(socioList).filter(
      (socio) => socio.rutinas.length === 0
    )
  }

  renderSocioRutinaTable(sociosFiltrados)
}

function handleEntrenadorChange() {
  const entrenadorId = entrenadorInput.value

  if (!entrenadorId) {
    renderSocioRutinaTable(Object.values(socioList))
    return
  }

  const sociosFiltrados = Object.values(socioList).filter((socio) =>
    socio.rutinas.some((rutina) => rutina.empleado.personaId == entrenadorId)
  )

  renderSocioRutinaTable(sociosFiltrados)
}

export default function rutinaFilterEvents() {
  buscarInput.addEventListener('input', handleNameChange)
  estadoInput.addEventListener('change', handleEstadoChange)
  entrenadorInput.addEventListener('change', handleEntrenadorChange)

  resetFiltrosBtn.addEventListener('click', () => {
    buscarInput.value = ''
    estadoInput.value = ''
    entrenadorInput.value = ''

    renderSocioRutinaTable(Object.values(socioList))
  })
}
