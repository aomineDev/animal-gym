import {
  filterByMembership,
  filterEstado,
  membershipContainer,
} from '../dom.js'
import { membershipList } from '../store.js'
import { renderFilterMembershipCard } from '../render.js'
import MembershipCard from '../components/MembershipCard.js'

export default function filterMembershipBy() {
  if (!filterByMembership || !filterEstado || !membershipContainer) return

  filterByMembership.addEventListener('change', applyFilters)
  filterEstado.addEventListener('change', applyFilters)

  renderFilterMembershipCard(membershipList)
}

function applyFilters() {
  const selectedMembership = filterByMembership.value
  const selectedEstado = filterEstado.value

  membershipContainer.innerHTML = ''

  const filteredMembership = Object.values(membershipList).filter(
    (membership) => {
      const [selectedMembershipId] = selectedMembership
        ? selectedMembership.split('|')
        : [null]

      const matchMembership =
        !selectedMembershipId ||
        membership.membresiaId.toString() === selectedMembershipId

      const matchEstado =
        selectedEstado === 'Todos los estados' ||
        !selectedEstado ||
        (selectedEstado === 'Activo' && membership.estado) ||
        (selectedEstado === 'Inactivo' && !membership.estado)

      return matchMembership && matchEstado
    }
  )

  console.log(filteredMembership)
  if (filteredMembership.length === 0) {
    membershipContainer.innerHTML = `
    <div class="text-center text-muted mt-4">
          <i class="bi bi-emoji-frown"></i>
          <p class="mb-0">No se encontraron clases según los filtros aplicados</p>
        </div>`
    return
  }

  filteredMembership.forEach((membership) => {
    membershipContainer.insertAdjacentHTML(
      'beforeend',
      MembershipCard(membership)
    )
  })
}
