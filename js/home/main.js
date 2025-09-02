import { requireAuth } from '../util.js'
import { clearUser, getUser } from '../service.js'

function init() {
  requireAuth()

	const user = getUser()

	document.getElementById('username').textContent = user.nombre + ' ' + user.apellido
}

init()

document.getElementById('logoutBtn').addEventListener('click', () => {
	clearUser()
	window.location.href = "login.html"
})