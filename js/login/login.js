import { getGym } from '../service.js'
import store from "../store.js"
import { validationCredentialEvents } from './events/loginEvents.js'

async function init() {

    store.gym = await getGym()

    validationCredentialEvents(store.gym.empleados)

}

window.addEventListener('load', init)
