import { contentSocios, socioContentVerPerfil } from "../socios/dom.js";
import { renderSociosCard, renderSocioVerPerfil } from "../socios/render.js";
import { eventSocioVerPerfil } from "./events/itemSocioEvent.js";


import { getGym } from "../service.js";
import store from "../store.js";

import { requireAuth, logout } from '../util.js'

requireAuth()

// 4. Enviamos datos al render
async function init(){

  store.gym = await getGym();//contenido del json

  renderSociosCard(store.gym.socios, contentSocios);

  eventSocioVerPerfil(store.gym.socios);


}


window.addEventListener('load', init);

document.getElementById('logoutBtn').addEventListener('click', logout)
