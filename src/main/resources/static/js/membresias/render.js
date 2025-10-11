import { membershipContainer } from './dom.js'
import MembershipCard from './components/MembershipCard.js'

export function renderNewMembershipCard(membership) {
  membershipContainer.insertAdjacentHTML(
    'afterbegin',
    MembershipCard(membership)
  )
}

export function renderUpdatedMembershipCard(membership) {
  const membershipCard = membershipContainer.querySelector(
    `div[data-id="${membership.membresiaId}"]`
  )
  if (membershipCard) membershipCard.outerHTML = MembershipCard(membership)
}

export function renderDeletedMembershipCard(id) {
  const card = membershipContainer.querySelector('div[data-id="' + id + '"]')

  if (card) card.remove()
}

