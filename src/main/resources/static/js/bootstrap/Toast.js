import { toastBody, toastEl } from './dom.js'

const bsToast = bootstrap.Toast.getOrCreateInstance(toastEl)

export const TOAST_TYPES = Object.freeze({
	SUCCESS: 1,
	ERROR: 2,
	WARNING: 3,
	INFO: 4,
})

export function showToast(message, type = TOAST_TYPES.INFO) {
	toastEl.className = 'toast align-items-center border-0'

	if (type == TOAST_TYPES.SUCCESS) {
		toastEl.classList.add('text-bg-success')
	} else if (type == TOAST_TYPES.ERROR) {
		toastEl.classList.add('text-bg-danger')
	} else if (type == TOAST_TYPES.WARNING) {
		toastEl.classList.add('text-bg-warning')
	} else {
		toastEl.classList.add('text-bg-info')
	}

	toastBody.textContent = message

	bsToast.show()
}
