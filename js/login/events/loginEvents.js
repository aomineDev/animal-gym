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
		document.querySelector('.needs-validation').classList.remove('was-validated')
		inputPassword.value = ''

		const toastLiveExample = document.getElementById('toast-login')
		const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
		toastBootstrap.show()
		// inputPassword.classList.add('is-invalid')
	}
}

function handleInput(evt) {
		inputPassword.classList.remove('is-invalid')
}

export default function registerLoginEvents() {
	// inputPassword.addEventListener('input', handleInput)
	loginForm.addEventListener("submit", handleLoginSubmit)
}
