export function CreateClase(clase = {}) {
  return /*html*/ `
    <form id="formClase" class="row needs-validation" novalidate>
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre de la clase</label>
        <input type="text" name="nombre" class="form-control" required value="${clase.nombre || ""}">
      </div>

      <div class="mb-3">
        <label for="descripcion" class="form-label">Descripción</label>
        <textarea name="descripcion" class="form-control" rows="3" required>${clase.descripcion || ""}</textarea>
      </div>

      <div class="mb-3">
        <label for="duracion" class="form-label">Duración (minutos)</label>
        <input type="number" name="duracion" class="form-control" min="1" step="5" required value="${clase.duracion || ""}">
      </div>

      <div class="mb-3">
        <label for="fecha" class="form-label">Fecha</label>
        <input type="date" name="fecha" class="form-control" required value="${clase.fecha || ""}">
      </div>

      <div class="mb-3">
        <label for="hora" class="form-label">Hora</label>
        <input type="time" name="hora" class="form-control" required value="${clase.hora || ""}">
      </div>

      <div class="mb-3">
        <label for="capacidad" class="form-label">Capacidad</label>
        <input type="number" name="capacidad" class="form-control" min="1" required value="${clase.capacidad || ""}">
      </div>

      <div class="mb-4">
        <label for="entrenador" class="form-label">Entrenador</label>
        <select name="entrenador" class="form-select" required>
          <option value="">Seleccione un entrenador</option>
          <option value="1">Juan Pérez</option>
          <option value="2">María Gómez</option>
          <option value="3">Carlos Ruiz</option>
        </select>
      </div>

      <button type="submit" class="btn btn-primary">
        ${clase.id ? "Guardar cambios" : "Crear clase"}
      </button>
    </form>
  `

}