export async function getGym() {
  const response = await fetch("/data/gym.json");

  const gym = await response.json();

  return gym;
}
