import { showToast } from '../bootstrap/Toast.js'
import { TOAST_TYPES } from '../constants/ToastTypes.js'

document.getElementById('showToast').addEventListener('click', () => {
	showToast('Hola mundo', TOAST_TYPES.INFO)
})
