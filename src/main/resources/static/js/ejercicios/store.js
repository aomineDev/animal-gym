export const ejercicioList = ejercicioListRaw.reduce((acc, curr) => {
  acc[curr.ejercicioId] = curr

  return acc
}, {})

console.log('obj ejercicio', ejercicioList)
