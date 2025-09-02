import { getUser } from  './service.js'

export function requireAuth() {
  const user = getUser()

  if (user == null) {
    window.location.href = "login.html"
  } 
}
