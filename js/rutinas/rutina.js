import { renderRutinaFila } from "./render.js";
import { rutinaTable } from "./dom.js"
import { getGym } from '../service.js'
import store from "../store.js"
import { agregarRutinaEvents } from "./events/agrearRutinaEvents.js";
import { selectedFilaEvents } from "./events/filaEvents.js";

import { requireAuth, logout } from '../util.js'

requireAuth()

async function init() {

    store.gym = await getGym()

    renderRutinaFila(store.gym.rutinas, rutinaTable)
    agregarRutinaEvents(store.gym.rutinas, rutinaTable)
    selectedFilaEvents(store.gym.rutinas, rutinaTable)

}

window.addEventListener('load', init)

document.getElementById('logoutBtn').addEventListener('click', logout)

