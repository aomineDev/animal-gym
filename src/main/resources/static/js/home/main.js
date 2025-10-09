import { showToast, TOAST_TYPES } from '../bootstrap/Toast.js'

document.getElementById('showToast').addEventListener('click', () => {
	showToast('Hola mundo', TOAST_TYPES.INFO)
})
