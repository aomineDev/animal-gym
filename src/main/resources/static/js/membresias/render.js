import { contenedorMembresias } from "./dom.js";

export function renderMembresiaCard(membresia){
  
  const itemMembresia = /*html*/`
    <div class="col-12 col-md-6 col-lg-4 col-xxl-3" id="membresiaCard__${membresia.menbresiaId}">
      <div class="workout-grid shadow-sm">
          <div class="img-wrap position-relative">
              <!-- <a href="#" class="btn-wishlist position-absolute top-0 start-0 m-2 z-3">
            <i class="bi bi-heart-fill text-white fs-5"></i>
          </a> -->
              <div class="dropdown position-absolute top-0 end-0 m-2 z-3">
                  <a href="#" class="btn-wishlist text-white" data-bs-toggle="dropdown">
                      <i class="bi bi-three-dots-vertical fs-5"></i>
                  </a>
                  <ul class="dropdown-menu">
                      <!--<li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#verMembresiaModal" id="membresia-detalle" data-id="${membresia.menbresiaId}">
                                            <i class="bi bi-eye me-2"></i>Ver detalles
                                          </a></li>-->
                      <li>
                          <!-- data-bs-target="editarMembresia" -->
                          <a class="dropdown-item" href="#" data-bs-toggle="modal"
                            data-bs-target="#editarMembresia__${membresia.menbresiaId}">
                              <i class="bi bi-pencil me-2"></i> Editar
                          </a>
                      </li>
                      <li>
                          <hr class="dropdown-divider">
                      </li>
                      <li><a class="dropdown-item text-danger" href="#" data-bs-toggle="modal"
                              data-bs-target="#eliminarMembresia__${membresia.menbresiaId}">
                              <i class="bi bi-trash me-2"></i>Eliminar
                          </a></li>
                  </ul>
              </div>
              <a href="#">
                  <img src="${membresia.imagen}" alt="" class="w-100 rounded-3">
              </a>
          </div>
          <div class="workout-detail p-3">
              <a href="#" class="text-decoration-none">
                  <h5 class="fw-semibold mb-2" >${membresia.nombre}</h5>
              </a>
              <h6 class="fw-semibold text-secondary">
                  S/ <span>${membresia.precio*0.50}</span>
                  <small class="text-decoration-line-through text-muted ms-1">S/ <span
                          >${membresia.precio}</span></small>
                  <span class="ms-2 small text-muted">
                      <i class="bi bi-clock"></i> <span>${membresia.duracion}</span> dias
                  </span>
              </h6>
              <p class="small text-muted mb-2">${membresia.descripcion}</p>
              <div class="d-flex justify-content-between align-items-center">
                  <span class="${membresia.estado ? ' badge bg-success' : ' badge bg-secondary'}">${membresia.estado ? "Activo" : "Inactivo"}</span>
                  <small class="text-muted">35/<span>${membresia.limiteCupos}</span> socios</small>
              </div>
          </div>
      </div>
  </div>
  `;

  const modalEditarMembresia = /*html*/`
    <div class="modal fade" id="editarMembresia__${membresia.menbresiaId}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Editar Membresía</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                  <form class="row g-3 needs-validation" id="editarMembresiaForm" novalidate>
                      <div class="col-md-6">
                          <label class="form-label">Nombre del Plan</label>
                          <div class="input-group">
                              <input type="text" class="form-control" name="nombre" value="${membresia.nombre}" required>

                          </div>
                          <div class="valid-feedback">Nombre válido</div>
                          <div class="invalid-feedback">Ingrese un nombre válido (mínimo 3 caracteres)</div>
                      </div>



                      <div class="col-md-3">
                          <label class="form-label">Precio Regular (S/)</label>
                          <div class="input-group">
                              <input type="number" class="form-control" name="precio"
                                value="${membresia.precio}" min="1" step="0.01" required>

                          </div>
                          <div class="valid-feedback">Precio válido</div>
                          <div class="invalid-feedback">Ingrese un precio válido</div>
                      </div>

                      <div class="col-md-3">
                          <label class="form-label">Precio Promocional (S/)</label>
                          <div class="input-group">
                              <input type="number" name="precioOferta" class="form-control"
                                  value="${membresia.precioOferta}" min="0" step="0.01">

                          </div>
                          <div class="valid-feedback">Precio promocional válido</div>
                          <div class="invalid-feedback">Debe ser menor al precio regular</div>
                      </div>

                      <!--<div class="col-md-6">
                          <label class="form-label">Duración (días)</label>
                          <div class="input-group">
                              <input type="number" name="duracion" class="form-control"
                                  value="${membresia.duracion}" min="1" required>

                          </div>
                          <div class="valid-feedback">Duración válida</div>
                          <div class="invalid-feedback">Ingrese una duración válida</div>
                      </div>-->
                      <div class="col-md-6">
                          <label class="form-label">Fecha Inicio</label>
                          <div class="input-group">
                              <input type="date" class="form-control" name="inicioOferta"
                                  value="${membresia.inicioOferta}" required>

                          </div>
                          <div class="valid-feedback">Fecha válida</div>
                          <div class="invalid-feedback">Seleccione una fecha válida</div>
                      </div>

                      <div class="col-md-6">
                          <label class="form-label">Fecha Final</label>
                          <div class="input-group">
                              <input type="date" class="form-control" name="finOferta"
                                  value="${membresia.finOferta}" required>
                              <span class="input-group-text">
                                  <i class="bi bi-calendar-check"></i>
                              </span>
                          </div>
                          <!-- <small class="text-muted">Calculada automáticamente</small> -->

                      </div>

                    
                      
                      <div class="col-md-6">
                      <label class="form-label">Estado</label>
                      <select class="form-select" name="estado" required>
                      <option value="" ${membresia.estado === '' ? 'selected' : ''}>Seleccione...</option>
                      <option value="activo" ${membresia.estado === true ? 'selected' : ''}>Activo</option>
                      <option value="inactivo" ${membresia.estado === false ? 'selected' : ''}>Inactivo</option>
                      </select>
                      
                      <div class="valid-feedback">Estado válido</div>
                      <div class="invalid-feedback">Seleccione un estado</div>
                      </div>
                      
                      
                      
                      <div class="col-md-6">
                      <label class="form-label">Capacidad Máxima</label>
                      <div class="input-group">
                      <input type="number" name="limiteCupos" value="${membresia.limiteCupos}"
                      class="form-control" min="1" required>
                      
                      </div>
                      <div class="valid-feedback">Capacidad válida</div>
                      <div class="invalid-feedback">Ingrese una capacidad válida</div>
                      </div>
                      
                     <div class="row">

  <div class="col-md-6 d-flex align-items-center justify-content-center">
    <div class="w-100 text-center">
      <label for="file" class="form-label">Foto de la membresía</label>
      <img src="${membresia.imagen}" id="vistaPrevia${membresia.menbresiaId}" alt="Foto de la membresía" class="img-fluid rounded" style="max-height: 100%; object-fit: contain;">
        
      </div>
  </div>


  <div class="col-md-6">
    <label for="descripcion" class="form-label">Descripción</label>
    <textarea id="descripcion" class="form-control" rows="8" name="descripcion" required>${membresia.descripcion}</textarea>
    <div class="valid-feedback">Descripción válida</div>
    <div class="invalid-feedback">Ingrese una descripción (mínimo 10 caracteres)</div>
  </div>
</div>

                    <div class="col-md-12">
                        <label for="file" class="form-label">Actualizar foto de la membresia</label>
                        <input type="file" data-preview="vistaPrevia${membresia.menbresiaId}" id="file" class="form-control" name="file" accept="image/jpeg,image/jpg,image/png">
                        <input type="hidden" name="imagenActual" value="${membresia.imagen}" />
                    </div>
                      <!-- <div class="col-12">
                      <div class="alert alert-info">
                      <i class="bi bi-info-circle me-2"></i>
                      <strong>Socios inscritos actualmente:</strong> 12
                      </div>
                      </div> -->
                      <div class="col-12 d-flex justify-content-end">
                          <button type="button" class="btn btn-secondary w-25 m-1"
                              data-bs-dismiss="modal">Cancelar</button>
                          <button type="submit" class="btn btn-primary w-25 m-1 actualizarMembresia" data-id="${membresia.menbresiaId}">Actualizar</button>
                      </div>
                  </form>
              </div>
              <div class="modal-footer">

              </div>
          </div>
      </div>
  </div>
  `;

  const modalEliminarMembresia = /*html*/`
    <div class="modal fade" id="eliminarMembresia__${membresia.menbresiaId}" tabindex="-1"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Confirmar Eliminación</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                  <div class="text-center">
                      <i class="bi bi-exclamation-triangle text-warning" style="font-size: 3rem;"></i>
                      <h6 class="mt-3">¿Está seguro de que desea eliminar la membresia "<span
                              class="text-danger">${membresia.nombre}</span>"?</h6>
                      <p class="text-muted">Esta acción no se puede deshacer y afectará a los socios
                          asociados.
                      </p>
                      <!-- <div class="alert alert-warning">
                      <i class="bi bi-people-fill me-2"></i>
                      <strong>35 socios</strong> tienen esta membresía actualmente
                  </div> -->
                  </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-danger eliminarMembresia" data-id="${membresia.menbresiaId}">
                      <i class="bi bi-trash me-2"></i>Eliminar
                  </button>
              </div>
          </div>
      </div>
    </div>
  `;

  insertarDOM(contenedorMembresias, itemMembresia);
  insertarDOM(document.body, modalEditarMembresia);
  insertarDOM(document.body, modalEliminarMembresia);
}

function insertarDOM(before, after){
  return before.insertAdjacentHTML('beforeend', after);
}