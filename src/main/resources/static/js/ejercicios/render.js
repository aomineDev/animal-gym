import { listaEjercicio } from "./dom.js";

export function renderEjercicioCard(ejercicio) {

  // Items ejercicio insertar
  const itemEjercicio = /*html*/`
    <tr id="elementEjercicio_${ejercicio.ejercicioId}">
      <td>${ejercicio.ejercicioId}</td>
      <td>${ejercicio.nombre}</td>
      <td>${ejercicio.descripcion}</td>
      <td>${ejercicio.grupoMuscular}</td>
      <td>${ejercicio.equipo}</td>
      <td>
          <div class="dropdown">
              <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown">
                  <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                  <li>
                      <a class="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          
                          data-bs-target="#editarEjercicio__${ejercicio.ejercicioId}">
                          <i class="bi bi-pencil me-2"></i>Editar
                      </a>
                  </li>
                  <li><hr class="dropdown-divider"></li>
                  <li>
                      <a class="dropdown-item text-danger"
                          href="#"
                          data-bs-toggle="modal"
                          
                          data-bs-target="#eliminarEjercicio__${ejercicio.ejercicioId}">
                          <i class="bi bi-trash me-2"></i>Eliminar
                      </a>
                  </li>
              </ul>
          </div>
      </td>
    </tr>
  `;

  //Modal editar
  const modalEditar = /*html*/`
    <div class="modal fade"  id="editarEjercicio__${ejercicio.ejercicioId}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Editar Ejercicio</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                  <form id="socioForm" class="row g-3 needs-validation" novalidate>
  
                      <div class="col-md-6">
                          <label class="form-label">Nombre</label>
                          <div class="input-group">
                              <input type="text" id="nombre" name="nombre" value="${ejercicio.nombre}" class="form-control" pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,50}$"
                                  required>
                              <span class="input-group-text">
                                  <i class="bi bi-person"></i>
                              </span>
                          </div>
                          <div class="valid-feedback">des</div>
                          <div class="invalid-feedback">Ingrese un nombre válido</div>
                      </div>
  
                      <div class="col-md-6">
                          <label class="form-label">Grupo Muscular</label>
                          <div class="input-group">
                              <input type="text" id="grupoMuscular" name="grupoMuscular" value="${ejercicio.grupoMuscular}" class="form-control" required>
                              <span class="input-group-text">
                                  <i class="bi bi-person"></i>
                              </span>
                          </div>
                          <div class="valid-feedback">Apellido válido</div>
                          <div class="invalid-feedback">Ingrese un apellido válido</div>
                      </div>

                      <div class="col-md-6">
                          <label class="form-label">Equipo</label>
                          <div class="input-group">
                              <input type="text" id="equipo" name="equipo" value="${ejercicio.equipo}" class="form-control" pattern="^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{2,50}$"
                                  required>
                              <span class="input-group-text">
                                  <i class="bi bi-person"></i>
                              </span>
                          </div>
                          <div class="valid-feedback">dess</div>
                          <div class="invalid-feedback">Ingrese un nombre válido</div>
                      </div>
  
                      <div class="mb-3 col-md-6"> <label for="descripcion" class="form-label">Descripción</label>
                          <textarea name="descripcion" id="descripcion" class="form-control" rows="3"
                           required>${ejercicio.descripcion}</textarea>
                      </div>
                      
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                          <button type="submit" class="btn btn-primary actualizarEjercicio" data-id="${ejercicio.ejercicioId}">Actualizar</button>
                      </div>
                  </form>
              </div>
  
          </div>
      </div>
  </div>
  `;

  //Modal eliminar
  const modalEliminar = /*html*/`
    <div class="modal fade" id="eliminarEjercicio__${ejercicio.ejercicioId}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Confirmar Eliminación</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                  <div class="text-center">
                      <i class="bi bi-exclamation-triangle text-warning" style="font-size: 3rem;"></i>
                      <h6 class="mt-3">¿Está seguro de que desea eliminar este ejercicio?</h6>
                      <p class="text-muted">Esta acción no se puede deshacer.</p>
                      <div class="alert alert-danger">
                          <i class="bi bi-person-x me-2"></i>
                          Se eliminará toda la información del ejercicio: <strong>${ejercicio.nombre}</strong>
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                  <button type="button" class="btn btn-danger btnEliminarEjercicio" data-id="${ejercicio.ejercicioId}">
                      <i class="bi bi-trash me-2"></i>Eliminar Definitivamente
                  </button>
              </div>
          </div>
      </div>
  </div>
  `;




  insertarDOM(listaEjercicio, itemEjercicio);
  insertarDOM(document.body, modalEditar);
  insertarDOM(document.body, modalEliminar);
}

function insertarDOM(before, after){
  return before.insertAdjacentHTML('beforeend', after);
}