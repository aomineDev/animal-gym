export async function getGym() {
  const response = await fetch("/data/gym.json");

  const gym = await response.json();

  return gym;
}

export function setUser(user)  {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  return JSON.parse(localStorage.getItem("user")) || null;
}

export function clearUser() {
  localStorage.removeItem("user");
}