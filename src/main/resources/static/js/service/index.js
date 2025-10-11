export default class Service {
  constructor(service) {
    this.service = service
  }

  async findById(id) {
    const response = await fetch(`/api/${this.service}/${id}`)

    if (!response.ok) throw new Error('Error al obtener la entidad')

    const data = await response.json()

    return data
  }

  async findAll() {
    const response = await fetch(`/api/${this.service}`)

    if (!response.ok) throw new Error('Error al obtener la entidad')

    const data = await response.json()

    return data
  }

  async save(entity) {
    const response = await fetch(`/api/${this.service}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entity),
    })

    if (!response.ok) throw new Error('Error al guardar la entidad')

    const data = await response.json()

    return data
  }

  async update(entity, id) {
    const response = await fetch(`/api/${this.service}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entity),
    })

    if (!response.ok) throw new Error('Error al actualizar la entidad')

    const data = await response.json()

    return data
  }

  async delete(id) {
    const response = await fetch(`/api/${this.service}/${id}`, {
      method: 'DELETE',
    })

    if (!response.ok) throw new Error('Error al eliminar la entidad')
  }
}
