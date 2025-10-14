export const partnerList = partnerListRaw.reduce((acc, curr) => {
  acc[curr.personaId] = curr

  return acc
}, {})

export const membershipList = membershipListRaw.reduce((acc, curr) => {
  acc[curr.membresiaId] = curr

  return acc
}, {})
console.log('obj partner', partnerList)
console.log('obj membership', membershipList)
