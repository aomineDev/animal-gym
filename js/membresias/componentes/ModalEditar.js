export function ModalEditar({id, nombre, precio, descripcion, fecha_inicio, fecha_final, estado}){
  return /*html*/`
    <div class="col-md-6">
              <label class="form-label">Nombre del Plan</label>
              <div class="input-group">
                <input type="text" class="form-control" value="${nombre}" name="nombre" required>
                
              </div>
              <div class="valid-feedback">Nombre válido</div>
              <div class="invalid-feedback">Ingrese un nombre válido (mínimo 3 caracteres)</div>
            </div>

            <div class="col-md-3">
              <label class="form-label">Precio Regular (S/)</label>
              <div class="input-group">
                <input type="number" class="form-control" name=precio value="${precio}" min="1" step="0.01" required>
                
              </div>
              <div class="valid-feedback">Precio válido</div>
              <div class="invalid-feedback">Ingrese un precio válido</div>
            </div>

            <div class="col-md-3">
              <label class="form-label">Precio Promocional (S/)</label>
              <div class="input-group">
                <input type="number" class="form-control" value="100" min="0" step="0.01">
                
              </div>
              <div class="valid-feedback">Precio promocional válido</div>
              <div class="invalid-feedback">Debe ser menor al precio regular</div>
            </div>

            <div class="col-md-4">
              <label class="form-label">Duración (días)</label>
              <div class="input-group">
                <input type="number" class="form-control" value="" min="1" required>
                
              </div>
              <div class="valid-feedback">Duración válida</div>
              <div class="invalid-feedback">Ingrese una duración válida</div>
            </div>

            <div class="col-md-4">
              <label class="form-label">Fecha Inicio</label>
              <div class="input-group">
                <input type="date" class="form-control" name="fecha_inicio" value="${fecha_inicio}" required>
                
              </div>
              <div class="valid-feedback">Fecha válida</div>
              <div class="invalid-feedback">Seleccione una fecha válida</div>
            </div>

            <div class="col-md-4">
              <label class="form-label">Fecha Final</label>
              <div class="input-group">
                <input type="date" class="form-control" name="fecha_final" value="${fecha_final}" readonly>
                <span class="input-group-text">
                  <i class="bi bi-calendar-check"></i>
                </span>
              </div>
              <small class="text-muted">Calculada automáticamente</small>
            </div>

            <div class="col-12">
              <label class="form-label">Descripción</label>
              <div class="input-group">
                <textarea class="form-control" rows="3" name="descripcion" required>${descripcion}</textarea>
                
              </div>
              <div class="valid-feedback">Descripción válida</div>
              <div class="invalid-feedback">Ingrese una descripción (mínimo 10 caracteres)</div>
            </div>

            <div class="col-md-6">
              <label class="form-label">Estado</label>
              <select class="form-select" required>
                <option value="" name="estado">Seleccione...</option>
                <option value="activo" selected>Activo</option>
                <option value="inactivo">Inactivo</option>
              </select>
              <div class="valid-feedback">Estado válido</div>
              <div class="invalid-feedback">Seleccione un estado</div>
            </div>

            <div class="col-md-6">
              <label class="form-label">Capacidad Máxima</label>
              <div class="input-group">
                <input type="number" class="form-control" value="100" min="1" required>
                
              </div>
              <div class="valid-feedback">Capacidad válida</div>
              <div class="invalid-feedback">Ingrese una capacidad válida</div>
            </div>

            <div class="col-12">
              <div class="alert alert-info">
                <i class="bi bi-info-circle me-2"></i>
                <strong>Socios inscritos actualmente:</strong> 35
              </div>
            </div>
            <div class="col-12 d-flex justify-content-end">
              <button type="button" class="btn btn-secondary w-25 m-1" data-bs-dismiss="modal">Cancelar</button>
              <button type="submit" class="btn btn-primary w-25 m-1" data-id="${id}">Guardar</button>
            </div>
  `
}