export default class Service {
  constructor(service) {
    this.service = service
  }

  async save(entity) {
    const response = await fetch(`/api/${service}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entity)
    })

    const data = await response.json();

    return data
  }

  async update(entity, id) {
    const response = await fetch(`/api/${service}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(entity)
    })

    const data = await response.json();

    return data
  }

  async delete(id) {
    const response = await fetch(`/api/${service}/${id}`, {
      method: 'DELETE'
    })

    return response
  }
}