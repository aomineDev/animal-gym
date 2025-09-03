import { requireAuth } from '../util.js'
import { clearUser, getUser } from '../service.js'

requireAuth()

function init() {

	const user = getUser()

	document.getElementById('username').textContent = user.nombre + ' ' + user.apellido
}

document.addEventListener('DOMContentLoaded', init)

document.getElementById('logoutBtn').addEventListener('click', () => {
	clearUser()
	window.location.href = "login.html"
})