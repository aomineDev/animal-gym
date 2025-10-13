export const partnerList = partnerListRaw.reduce((acc, curr) => {
  acc[curr.personaId] = curr

  return acc
}, {})
console.log(partnerList)
