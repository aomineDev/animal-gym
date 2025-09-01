import { contenedorBoleta } from "../boletas/dom.js";
import { renderBoleta } from "../boletas/render.js";
import { getGym } from "../service.js";
import store from "../store.js";
async function init() {
  store.gym = await getGym(); //contenido del json
  renderBoleta(store.gym.boleta, contenedorBoleta);
}
window.addEventListener("load", init);
