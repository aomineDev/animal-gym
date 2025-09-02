import { contenedorBoleta, contenedorTablaBoleta } from "../boletas/dom.js";
import { renderBoleta, renderizarFila } from "../boletas/render.js";
import { getGym } from "../service.js";
import store from "../store.js";
async function init() {
  store.gym = await getGym(); //contenido del json
  renderizarFila(store.gym.boleta, contenedorTablaBoleta);
  contenedorTablaBoleta.addEventListener("click", (e) => {
    const btn = e.target.closest(".verBoleta");
    if (!btn) return;

    const id = btn.dataset.id;
    const boleta = store.gym.boleta.find(b => b.id == id);
    if (boleta) {
      renderBoleta(boleta, contenedorBoleta);
      const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("boletaModal"));
      modal.show();
    }
  });
}

window.addEventListener("load", init);
