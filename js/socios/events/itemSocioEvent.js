import { socioContentVerPerfil, contentSocios } from "../dom.js";
import { renderSocioVerPerfil } from "../render.js";


export function eventSocioVerPerfil(socios) {
  contentSocios.addEventListener('click', (e) => {
    const link = e.target.closest('.dropdown-item');
    if (!link) return;
    console.log(link);
    const id = parseInt(link.getAttribute('data-id'));
    if (isNaN(id)) return;

    const socioSeleccionado = socios.find(s => s.id === id);
    if (!socioSeleccionado) return;

    if (link.getAttribute('data-bs-target') === '#perfilSocioModal') {
      console.log('Ver perfil de:', socioSeleccionado);
      renderSocioVerPerfil(socioSeleccionado, socioContentVerPerfil); // mostrar modall
    }

  });
}
