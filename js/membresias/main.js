import { contentMembresia, membresiaDetalle } from "../membresias/dom.js";
import { renderMembresiaCard } from "../membresias/render.js";

import { getGym } from "../service.js";
import store from "../store.js";

import { selectedCardEvent } from "./events/cardEvents.js";

import { requireAuth } from '../util.js'

requireAuth()

async function init(){
  store.gym = await getGym();//contenido del json
  renderMembresiaCard(store.gym.membresias, contentMembresia);

  selectedCardEvent(store.gym.membresias);
  

}

window.addEventListener('load', init);