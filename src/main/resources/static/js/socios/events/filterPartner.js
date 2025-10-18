import PartnerCard from '../components/PartnerCard.js'
import {
  filterByMembership,
  partnerContainer,
  filterEstado,
  buscarSocio,
} from '../dom.js'
import { partnerList } from '../store.js'
import { renderFilterPartnerItem } from '../render.js'

export default function filterPartnerBy() {
  if (!filterByMembership || !filterEstado || !buscarSocio || !partnerContainer)
    return

  filterByMembership.addEventListener('change', applyFilters)
  filterEstado.addEventListener('change', applyFilters)
  buscarSocio.addEventListener('input', applyFilters)

  renderFilterPartnerItem(partnerList)
}

function applyFilters() {
  const selectedMembership = filterByMembership.value
  const selectedEstado = filterEstado.value
  const searchText = buscarSocio.value.trim().toLowerCase()

  partnerContainer.innerHTML = ''

  //obj filtrados
  const filteredPartners = Object.values(partnerList).filter((partner) => {
    //membresia
    const [selectedMembershipId] = selectedMembership
      ? selectedMembership.split('|')
      : [null]

    const matchMembership =
      !selectedMembershipId ||
      (partner.membresia &&
        partner.membresia.membresiaId.toString() === selectedMembershipId)

    //estado
    const matchEstado =
      selectedEstado === 'Todos los estados' ||
      !selectedEstado ||
      (selectedEstado === 'Activo' && partner.estado) ||
      (selectedEstado === 'Inactivo' && !partner.estado)

    //busqueda  nombre apellido
    const fullName = `${partner.nombre} ${partner.apellido}`.toLowerCase()
    const matchSearch =
      !searchText ||
      partner.nombre.toLowerCase().includes(searchText) ||
      partner.apellido.toLowerCase().includes(searchText) ||
      fullName.includes(searchText)

    return matchMembership && matchEstado && matchSearch
  })

  console.log(filteredPartners)
  if (filteredPartners.length === 0) {
    partnerContainer.innerHTML =
      '<tr><td colspan="8" class="text-center">No se encontraron resultados</td></tr>'
    return
  }

  filteredPartners.forEach((partner) => {
    partnerContainer.insertAdjacentHTML('beforeend', PartnerCard(partner))
  })
}
