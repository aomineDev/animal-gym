import PartnerAccordion from '../components/PartnerAccordion.js'
import {
  partnerProfileModal,
  partnerProfileFields,
  partnerAccordionContainer,
} from '../dom.js'
import { partnerList } from '../store.js'

/**
 * obtener data-id del dropdown 'ver perfil' y el modal.
 * rellernar perfil socio
 */
export default function partnerProfileModalEvents() {
  partnerProfileModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id
    const obj = partnerList[id]
    fillPartnerProfileModal(obj)
  })
}

function fillPartnerProfileModal(obj) {
  partnerProfileFields.nombre.textContent = obj.nombre
  partnerProfileFields.peso.textContent = obj.peso + ' kg'
  partnerProfileFields.altura.textContent = obj.altura + ' m'
  partnerProfileFields.dni.textContent = obj.dni
  partnerProfileFields.fechaInscripcion.textContent = obj.fechaIngreso
  partnerProfileFields.telefono.textContent = obj.telefono
  partnerProfileFields.membresia_nombre.textContent = obj.membresia.nombre
  partnerProfileFields.email.textContent = obj.email
  partnerProfileFields.estado.textContent = obj.estado ? 'Activo' : 'Inactivo'
  partnerProfileFields.img.src = obj.imagen
  partnerAccordionContainer.innerHTML = PartnerAccordion(obj.rutinas)
}
