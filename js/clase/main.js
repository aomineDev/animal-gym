import { renderFilter, renderClaseCard, renderEntrenadoresSelect } from './render.js'
import { form, card, selectEntrenador } from '../clase/dom.js'
import { getGym } from '../service.js'
import store from "../store.js"

import { objectClase } from './objeto.js'
import { renderSelectedCardEvent, createClaseFormEvents } from './events/cardEvents.js'

async function init() {

    store.gym = await getGym()

    //crearClase
    createClaseFormEvents(store.gym.clases, store.gym.empleados)
    //renderizar cartas
    renderClaseCard(objectClase(store.gym.clases, store.gym.empleados),
        card, card)

    //El select del entrenador (Crear)
    renderEntrenadoresSelect(selectEntrenador, store.gym.empleados, store.gym.roles)

    //Dropdown
    renderSelectedCardEvent(store.gym.clases, store.gym.empleados)

}

renderFilter(form)
window.addEventListener('load', init)
