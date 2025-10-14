import {
  claseDetailModal,
  claseDetailNombre,
  claseDetailDescripcion,
  claseDetailCapacidad,
  claseDetailDuracion,
  claseDetailEntrenador,
  claseDetailEstado,
  claseDetailFecha,
  claseDetailHoraFin,
  claseDetailHoraInicio,
  claseDetailImagen,
  claseDetailIntensidad,
  claseDetailObjetivo,
} from '../dom.js'
import { claseList } from '../store.js'

export default function claseDetailModalEvents() {
  claseDetailModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id

    const clase = claseList[id]
    console.log(clase)

    claseDetailImagen.src = clase.imagen
    claseDetailImagen.alt = clase.nombre
    claseDetailNombre.textContent = clase.nombre
    claseDetailDescripcion.textContent = clase.descripcion
    claseDetailObjetivo.textContent = clase.objetivo
    claseDetailEntrenador.textContent =
      clase.empleado.nombre + ' ' + clase.empleado.apellido
    claseDetailIntensidad.textContent = clase.intensidad
    colorIntensidad(clase.intensidad, claseDetailIntensidad)
    claseDetailDuracion.textContent = clase.duracion + ' min'
    claseDetailFecha.textContent = clase.fecha
    claseDetailHoraInicio.textContent = clase.horaInicio + ' hrs'
    claseDetailHoraFin.textContent = clase.horaFin + ' hrs'
    claseDetailCapacidad.textContent = clase.capacidad + ' personas'
    claseDetailEstado.textContent = clase.estado
    estadoClase(clase.estado, claseDetailEstado)
  })
}

function colorIntensidad(intensidad, claseDetailIntensidad) {
  switch (intensidad) {
    case 'Baja':
      claseDetailIntensidad.classList.add('text-success')
      break
    case 'Media':
      claseDetailIntensidad.classList.add('text-warning')
      break
    case 'Alta':
      claseDetailIntensidad.classList.add('text-danger')
      break
    default:
      claseDetailIntensidad.classList.add('text-dark')
      break
  }
}

function estadoClase(estado, claseDetailEstado) {
  switch (estado) {
    case 'Programado':
      claseDetailEstado.classList.add('bg-outline-primary text-primary')
    case 'En curso':
      claseDetailEstado.classList.add('bg-outline-success text-success')
    case 'Finalizado':
      claseDetailEstado.classList.add('bg-outline-danger text-danger')
    default:
      claseDetailEstado.classList.add('bg-outline-dark text-dark')
  }
}
