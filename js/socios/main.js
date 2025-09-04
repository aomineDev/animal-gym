import { contentSocios } from "../socios/dom.js";
import { renderSociosCard } from "../socios/render.js";

import { getGym } from "../service.js";
import store from "../store.js";

import { requireAuth, logout } from '../util.js'

requireAuth()

async function init(){
  store.gym = await getGym();//contenido del json
  renderSociosCard(store.gym.socios, contentSocios);

}

window.addEventListener('load', init);

document.getElementById('logoutBtn').addEventListener('click', logout)
