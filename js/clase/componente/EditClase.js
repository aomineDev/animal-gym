export function EditClase({ id, nombre, descripcion, entrenador, fecha, hora, duracion, estado, capacidad }) {
  return /*html*/ `
    
      <div class="mb-3 col-md-6">
        <label for="nombre" class="form-label">Nombre de la clase</label>
        <input type="text" name="nombre" class="form-control" required value="${nombre}">
      </div>

      <div class="mb-3 col-md-6">
        <label for="descripcion" class="form-label">Descripción</label>
        <textarea name="descripcion" class="form-control" rows="3" required>${descripcion}</textarea>
      </div>

      <div class="mb-3 col-md-6">
        <label for="duracion" class="form-label">Duración (minutos)</label>
        <input type="number" name="duracion" class="form-control" min="1" required value="${duracion}">
      </div>

      <div class="mb-3 col-md-6">
        <label for="fecha" class="form-label">Fecha</label>
        <input type="date" name="fecha" class="form-control" required value="${fecha}">
      </div>

      <div class="mb-3 col-md-6">
        <label for="hora" class="form-label">Hora</label>
        <input type="time" name="hora" class="form-control" required value="${hora}">
      </div>

      <div class="mb-3 col-md-6">
        <label for="capacidad" class="form-label">Capacidad</label>
        <input type="number" name="capacidad" class="form-control" min="1" required value="${capacidad}">
      </div>

      <div class="mb-4">
        <label for="entrenador" class="form-label">Entrenador</label>
        <select name="entrenador" class="form-select" id="select_editar" required>
          <option value="">Seleccione un entrenador</option>
          <option value="${entrenador.id}" selected>
            ${entrenador.nombre} ${entrenador.apellido}
          </option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary col-5 ms-3" data-id=${id}>Actualizar clase</button>
  `

}