export const membershipList = membershipListRaw.reduce((acc, curr) => {
  acc[curr.membresiaId] = curr

  return acc
}, {})
