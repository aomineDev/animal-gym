export const empledoList = empleadoLista.reduce((acc, curr) => {
  acc[curr.personaId] = curr
  return acc
}, {})


export const usuarioList = usuarioLista.reduce((acc, curr) => {
  acc[curr.persona.personaId] = curr
  return acc
}, {}
)
