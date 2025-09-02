export const EditRutina = ({ id, nombre, duracion, descripcion, estado }) => {

  return /*html*/ `
    <div class="col-md-6">
              <label class="form-label">Nombre</label>
              <div class="input-group">
                <input type="text" id="nombre" name="nombre" class="form-control" value="${nombre}" required />
                <span class="input-group-text">
                  <i class="bi bi-person"></i>
                </span>
              </div>
            </div>

            <div class="col-md-6">
              <label class="form-label">Duracion (semanas)</label>
              <div class="input-group">
                <input type="number" id="duracion" name="duracion" class="form-control" min="1" value="${duracion}" required />
                <span class="input-group-text">
                  <i class="bi bi-arrows-vertical"></i>
                </span>
              </div>
            </div>

            <div class="col-md-6">
              <label class="form-label">Descripción</label>
              <div class="input-group">
                <textarea class="form-control" rows="3" id="descripcion" name="descripcion" required>${descripcion}</textarea>
              </div>
            </div>

            <div class="col-md-6">
              <label class="form-label">Estado</label>
              <select id="estado" name="estado" class="form-select" required>
                <option value="">Seleccione...</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>

            <div class="col-12 d-flex justify-content-end">
              <button type="button" class="btn btn-secondary w-25 m-1" data-bs-dismiss="modal">
                Cancelar
              </button>
              <button type="submit" class="btn btn-primary w-25 m-1" data-id=${id}>
                Editar rutina
              </button>
            </div>`

}