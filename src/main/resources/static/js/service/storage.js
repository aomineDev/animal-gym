export default class StorageService {
  constructor(folder) {
    this.folder = folder
  }

  async upload(file) {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(`/api/storage/${this.folder}`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) throw new Error('Error al subir la imagen')

    return await response.text()
  }
}
