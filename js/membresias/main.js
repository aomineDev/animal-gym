import { contentMembresia } from "../membresias/dom.js";
import { renderMembresiaCard } from "../membresias/render.js";
import { getGym } from "../service.js";
import store from "../store.js";


async function init(){
  store.gym = await getGym();//contenido del json
  renderMembresiaCard(store.gym.membresias, contentMembresia);

}

window.addEventListener('load', init);