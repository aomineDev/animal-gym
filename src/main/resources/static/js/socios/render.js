import { partnerContainer } from './dom.js'
import PartnerCard from './components/PartnerCard.js'

//insercion en el contenedor partner al inicio
export function renderNewPartnerCard(partner) {
  partnerContainer.insertAdjacentHTML('afterbegin', PartnerCard(partner))
}

export function renderUpdatedPartnerCard(partner) {
  const partnerCard = partnerContainer.querySelector(
    `div[data-id="${partner.personaId}"]`
  )
  if (partnerCard) partnerCard.outerHTML = MembershipCard(partner)
}

export function renderDeletedPartnerItem(id) {
  const item = partnerContainer.querySelector('div[data-id="' + id + '"]')

  if (item) item.remove()
}
