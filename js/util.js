import { getUser, clearUser } from  './service.js'

export function requireAuth() {
  const user = getUser()

  if (user == null) {
    window.location.href = "login.html"
  } 
}

export function logout() {
  clearUser()
	window.location.href = "login.html"
}