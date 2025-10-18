import { usuarioList } from '../store.js'
import { renderCardFilter } from '../render.js'
import { empleadoInput, rolInput } from '../dom.js'

function aplicarFiltros() {
  const term = empleadoInput.value.toLowerCase().trim();
  const rolSeleccionado = rolInput.value.toLowerCase().trim();
  const usuarios = Object.values(usuarioList);

  const filtradas = usuarios.filter(usuario => {
    const nombre = usuario.persona?.nombre?.toLowerCase() || "";
    const apellido = usuario.persona?.apellido?.toLowerCase() || "";
    const rol = usuario.rol?.nombreRol?.toLowerCase() || "";

    const coincideNombre = nombre.includes(term) || apellido.includes(term);
    const coincideRol = rolSeleccionado === "" || rol.includes(rolSeleccionado);

    return coincideNombre && coincideRol;
  });

  renderCardFilter(filtradas);
}

export default function empleadoFilterEvents() {
  rolInput.addEventListener('change', aplicarFiltros);
  empleadoInput.addEventListener('input', aplicarFiltros);
}
