import {
  boletaEmpleado,
  boletaEstado,
  boletaHora,
  boletaGrabado,
  boletaId,
  boletaIgv,
  boletaSocioApellido,
  boletaSocioMembresia,
  boletaSocioNombre,
  boletaTotal, boletaEmision,
  verBoleta,
} from '../dom.js'

console.log(boletaSocioApellido)
import { boletaList } from '../store.js'
export default function boletaDetalle() {
  verBoleta.addEventListener('show.bs.modal', (e) => {
    const btn = e.relatedTarget
    const id = btn.dataset.id
    console.log(id)

    const boleta = boletaList[id]
    console.log(boleta)
    boletaId.textContent = boleta.boletaId
    boletaEmision.textContent = boleta.fechaEmision
    boletaEstado.textContent = boleta.boletaEstado
    boletaGrabado.textContent = boleta.grabado
    boletaTotal.textContent = boleta.precioTotal
    boletaIgv.textContent = boleta.igv
    boletaHora.textContent = boleta.hora

    // boletaEmpleado.textContent = boleta.empleado.nombre
    // boletaSocioApellido.textContent = boleta.socio.apellido  ''
    // boletaSocioNombre.textContent = boleta.socio.nombre || ''
    // boletaSocioMembresia.textContent = boleta.socio.membresia.nombre || ''


  })

}