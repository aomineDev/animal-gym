import { requireAuth , logout } from '../util.js'
import {  getUser } from '../service.js'

requireAuth()

function init() {

	const user = getUser()

	document.getElementById('username').textContent = user.nombre + ' ' + user.apellido
}

document.addEventListener('DOMContentLoaded', init)

document.getElementById('logoutBtn').addEventListener('click', logout)