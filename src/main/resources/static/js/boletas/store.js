export const boletaList = boletaLista.reduce((acc, curr) => {
  acc[curr.boletaId] = curr
  return acc
}, {})
