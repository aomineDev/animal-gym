import { partnerContainer } from './dom.js'
import PartnerCard from './components/PartnerCard.js'

export function renderNewPartnerCard(partner) {
  partnerContainer.insertAdjacentHTML('afterbegin', PartnerCard(partner))
}

export function renderUpdatedPartnerCard(partner) {
  const partnerCard = partnerContainer.querySelector(
    `tr[data-id="${partner.personaId}"]`
  )
  if (partnerCard) partnerCard.outerHTML = PartnerCard(partner)
}

export function renderDeletedPartnerItem(id) {
  const item = partnerContainer.querySelector('tr[data-id="' + id + '"]')

  if (item) item.remove()
}

export function renderFilterPartnerItem(partnerData) {
  partnerContainer.innerHTML = ''
  Object.values(partnerData).forEach((partner) => {
    partnerContainer.insertAdjacentHTML('beforeend', PartnerCard(partner))
  })
}
