import { getGym, getUser } from '../service.js'
import store from "../store.js"
import { validationCredentialEvents } from './events/loginEvents.js'

async function init() {

    const user = getUser()
    
    if (user != null) {
        window.location.href = "home.html"
        return
    }

    store.gym = await getGym()

    validationCredentialEvents(store.gym.empleados)




}

window.addEventListener('load', init)
