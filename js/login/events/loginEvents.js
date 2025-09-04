import { loginForm } from "../dom.js"
import { inputDNI, inputPassword } from "../dom.js"
import { setUser } from "../../service.js"

import store from "../../store.js"

function handleLoginSubmit(e) {
	e.preventDefault()

	if (!loginForm.checkValidity()) return

	const empleados = store.gym.empleados

	const user = empleados.find(
		(empleado) =>
			empleado.dni === inputDNI.value &&
			empleado.clave === inputPassword.value
	)

	if (user) {
		setUser(user)
		window.location.href = "home.html"
	} else {
		alert("Credenciales incorrectas")
	}
}

export default function registerLoginEvents() {
	loginForm.addEventListener("submit", handleLoginSubmit)
}
