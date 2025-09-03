import { contenedorBoleta, contenedorTablaBoleta } from "../boletas/dom.js";
import { renderizarFila } from "../boletas/render.js";
import { getGym } from "../service.js";
import { verBoletaDetalle } from "./events/verBoletaDetalle.js";
import store from "../store.js";
import { requireAuth } from '../util.js'

requireAuth()

async function init() {
  store.gym = await getGym(); //contenido del json
  renderizarFila(store.gym.boletas, contenedorTablaBoleta);
  verBoletaDetalle(store.gym.boletas, contenedorBoleta)
}

window.addEventListener("load", init);
