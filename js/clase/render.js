import { Filter } from './componente/Filter.js'
import { ClaseCard } from './componente/ClaseCard.js'
import { DetailCard } from './componente/DetailCard.js'
import { EditClase } from './componente/EditClase.js'
import { formEditarClase } from './dom.js'

export const renderFilter = (form) => {

    form.forEach((e) => {
        e.innerHTML = Filter()
    })

}

export const renderClaseCard = (gym, container) => {

    container.innerHTML = ''

    gym.forEach(item => {
        container.innerHTML += ClaseCard(item)
    })

}

export const renderDetailCard = (clase, container) => {
    container.innerHTML = ""
    container.innerHTML += DetailCard(clase)
}

export const renderEntrenadoresSelect = (entrenadorSelect, empleados, roles) => {

    entrenadorSelect.innerHTML = `<option value="">Seleccione un entrenador</option>`

    empleados.forEach(emp => {
        const rol = roles.find(r => r.id === emp.rol_id)
        if (rol && rol.nombre === "Entrenador") {
            const option = document.createElement("option")
            option.value = emp.id
            option.textContent = emp.nombre + " " + emp.apellido
            entrenadorSelect.appendChild(option)
        }
    })
}

export const renderEntrenadoresSelectEditar = (entrenadorSelect, empleados, roles) => {

    entrenadorSelect.innerHTML = `<option value="">Seleccione un entrenador</option>`

    empleados.forEach(emp => {
        const rol = roles.find(r => r.id === emp.rol_id)
        if (rol && rol.nombre === "Entrenador") {
            const option = document.createElement("option")
            option.value = emp.id
            option.textContent = emp.nombre + " " + emp.apellido
            entrenadorSelect.appendChild(option)
        }
    })
}

export const renderEditForm = (clase) => {
    formEditarClase.innerHTML = ""
    formEditarClase.innerHTML += EditClase(clase)
    console.log("estas en el render editar con " + clase.entrenador.nombre)
}