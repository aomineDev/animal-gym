import { loginForm } from '../dom.js'

function handleLogin(evt) {
  if (loginForm.checkValidity()) location.href = '/home'
}

export default function registerFormEvents() {
  loginForm.addEventListener('submit', handleLogin)
}
