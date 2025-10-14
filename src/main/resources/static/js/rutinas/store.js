export const socioList = socioListRaw.reduce((acc, curr) => {
  acc[curr.personaId] = curr

  return acc
}, {})
