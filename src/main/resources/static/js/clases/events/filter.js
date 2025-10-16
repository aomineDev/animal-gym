import { buscarClaseInput } from '../dom.js'
import { claseList } from '../store.js'
import { renderClaseList } from '../render.js'

function handleNameChange() {
  const term = this.value.toLowerCase().trim()
  const clases = Object.values(claseList)
  const filtradas = clases.filter((clase) =>
    clase.nombre.toLowerCase().includes(term)
  )
  renderClaseList(filtradas)
}

export default function claseFilterEvents() {
  buscarClaseInput.addEventListener('input', handleNameChange)
}
