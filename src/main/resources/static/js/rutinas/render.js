export function renderFilaSocio(socio, usuarios) {
  const filaHtml = /*html*/ `
    <tr id="socio-fila-${socio.personaId}">
      <td>${socio.nombre}</td>
      <td>${socio.dni}</td>
      <td>
        <div class="d-flex flex-column">
          ${socio.rutinas
            .map(
              (rutina) =>
                `<span class="badge bg-primary mb-1 align-self-start">${rutina.nombre}</span>`
            )
            .join("")}
        </div>
      </td>
      <td>
        <div class="d-flex flex-column">
          ${socio.rutinas
            .map(
              (rutina) =>
                `<span class="badge bg-success mb-1 align-self-start">${rutina.fechaInicio}</span>`
            )
            .join("")}
        </div>
      </td>
      <td>
        <div class="d-flex flex-column">
          ${socio.rutinas
            .map(
              (rutina) =>
                `<span class="badge bg-warning mb-1 align-self-start">${rutina.fechaFin}</span>`
            )
            .join("")}
        </div>
      </td>
      <td>
        <div class="dropdown">
          <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#"
                 data-bs-toggle="modal"
                 data-bs-target="#detalleSocioModal__${socio.personaId}">
                <i class="bi bi-eye me-2"></i>Ver detalle
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  `;

  // --- Modal de detalle del socio ---
  const modalHtml = /*html*/ `
    <div class="modal fade" id="detalleSocioModal__${
      socio.personaId
    }" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-fullscreen modal-dialog-centered">
        <div class="modal-content rounded-4 p-3">

          <!-- Header -->
          <div class="modal-header">
            <h5 class="modal-title">Rutinas de ${socio.nombre}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <!-- Body -->
          <div class="modal-body">
            <div class="row g-4">

              <!-- Tabla Rutinas -->
              <div class="col-12 col-lg-6">
                <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                  <h6 class="mb-0">Rutinas</h6>
                  <button class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#crearRutina"
                      data-socio-id="${socio.personaId}">+
                      Agregar rutina</button>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Objetivo</th>
                        <th>Fecha Inicio</th>
                        <th>Fecha Fin</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody id="tablaRutinasModal__${socio.personaId}">
                      ${
                        socio.rutinas && socio.rutinas.length > 0
                          ? socio.rutinas
                              .map(
                                (rutina) => `
                              <tr class="fila-rutina" data-rutina-id="${rutina.rutinaId}" data-socio-id="${socio.personaId}">
                                <td>${rutina.nombre}</td>
                                <td>${rutina.descripcion}</td>
                                <td>${rutina.objetivo}</td>
                                <td>${rutina.fechaInicio}</td>
                                <td>${rutina.fechaFin}</td>
                                <td>
                                  <div class="dropdown">
                                    <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown">
                                      <i class="bi bi-three-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                      <li>
                                        <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#editarRutina__${rutina.rutinaId}" data-socio-id="${socio.personaId}">
                                          <i class="bi bi-pencil me-2"></i>Editar
                                        </a>
                                      </li>
                                      <li><hr class="dropdown-divider"></li>
                                      <li>
                                        <a class="dropdown-item text-danger" href="#"
                                          data-bs-toggle="modal"
                                          data-bs-target="#eliminarRutina__${rutina.rutinaId}"
                                          data-socio-id="${socio.personaId}">
                                          Eliminar
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </td>
                              </tr>`
                              )
                              .join("")
                          : `<tr><td colspan="6" class="text-muted">No hay rutinas</td></tr>`
                      }
                    </tbody>
                  </table>
                </div>
              </div>

              <!-- Tabla Ejercicios -->
              <div class="col-12 col-lg-6">
                <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
                  <h6 class="mb-0">Ejercicios</h6>
                  <button class="btn btn-sm btn-success">+ Agregar ejercicio</button>
                </div>
                <div class="table-responsive">
                  <table id="tablaEjercicios" class="table table-hover table-bordered align-middle">
                    <thead class="table-light text-center">
                      <tr>
                        <th>Día Semana</th>
                        <th>Ejercicio</th>
                        <th>Series</th>
                        <th>Reps</th>
                        <th>Peso (kg)</th>
                        <th>Calorias</th>
                        <th>Descanso (seg)</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody class="text-center">
                      <tr>
                        <td colspan="8" class="text-muted">Selecciona una rutina para ver sus ejercicios</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div> 
        </div>
      </div>
    </div>
  `;

  // --- Modal Eliminar ---
  const modalEliminarHtml = socio.rutinas
    .map(
      (rutina) => /*html*/ `
      <div class="modal fade" id="eliminarRutina__${rutina.rutinaId}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Eliminar</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>¿Estás seguro que deseas eliminar esta rutina?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-danger btnConfirmarEliminar"
                      data-id="${rutina.rutinaId}"
                      data-socio-id="${socio.personaId}">
                Confirmar eliminación
              </button>
            </div>
          </div>
        </div>
      </div>`
    )
    .join("");

  // --- Modal Editar ---
  const modalEditarHtml = socio.rutinas
    .map(
      (rutina) => /*html*/ `
        <div class="modal fade" id="editarRutina__${
          rutina.rutinaId
        }" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content rounded-4">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar Rutina</h1> <button type="button"
                  class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form class="row needs-validation editarRutinaForm" novalidate>

                  <!-- nombre-->
                  <div class="mb-3 col-md-6"> <label for="nombre" class="form-label">Nombre de la rutina</label>
                    <input type="text" name="nombre" class="form-control" value="${
                      rutina.nombre
                    }" required>
                  </div>

                  <!-- Entrenador -->
                  <div class="mb-3 col-md-6">
                    <label for="entrenador" class="form-label">Entrenador</label>
                    <select name="entrenador" class="form-select" required>
                      <option value="">Seleccione un entrenador</option>
                      ${usuarios
                        .filter((u) => u.rol.rolId === 2)
                        .map(
                          (u) => `
                            <option value="${u.persona.personaId}" 
                              ${
                                u.persona.personaId ===
                                rutina.empleado.personaId
                                  ? "selected"
                                  : ""
                              }>
                              ${u.persona.nombre} ${u.persona.apellido}
                            </option>`
                        )
                        .join("")}
                    </select>
                  </div>

                  <!-- descripcion -->
                  <div class="mb-3 col-md-6"> <label for="descripcion" class="form-label">Descripción</label>
                    <textarea name="descripcion" class="form-control" rows="3"
                      placeholder="Escribe una breve descripción de la rutina"
                      required>${rutina.descripcion}</textarea>
                  </div>

                  <!-- objetivo -->
                  <div class="mb-3 col-md-6"> <label for="objetivo" class="form-label">Objetivo</label>
                    <textarea name="objetivo" class="form-control" rows="3"
                      placeholder="Escribe el objetivo de la rutina" required>${
                        rutina.objetivo
                      }</textarea>
                  </div>

                  <!-- fechaInicio -->
                  <div class="mb-3 col-md-6"> <label for="fechaInicio" class="form-label">Fecha Inicio</label> <input
                      type="date" name="fechaInicio" class="form-control" value="${
                        rutina.fechaInicio
                      }" required>
                  </div>

                  <!-- fechaFin -->
                  <div class="mb-3 col-md-6"> <label for="fechaFin" class="form-label">Fecha Fin</label> <input
                      type="date" name="fechaFin" class="form-control" value="${
                        rutina.fechaFin
                      }" required> </div>
                  <button type="submit" class="btn btn-primary col-5 ms-3 btnEditarRutina"
                    data-socio-id="${socio.personaId}" data-id="${
        rutina.rutinaId
      }">Editar rutina</button>
                </form>
              </div>
            </div>
          </div>
        </div>    
    `
    )
    .join("");

  // Inyectar o reemplazar la fila en la tabla principal
  const filaExistente = document.querySelector(
    `#socio-fila-${socio.personaId}`
  );
  if (filaExistente) {
    filaExistente.outerHTML = filaHtml;
  } else {
    document
      .querySelector("#tablaPrincipal tbody")
      .insertAdjacentHTML("beforeend", filaHtml);
  }

  const modalExistente = document.querySelector(
    `#detalleSocioModal__${socio.personaId}`
  );
  if (modalExistente) {
    modalExistente.outerHTML = modalHtml;
  } else {
    document.body.insertAdjacentHTML("beforeend", modalHtml);
  }

  const modalEditarExistente = document.querySelector(
    `#editarRutina__${socio.personaId}`
  );
  if (modalEditarExistente) {
    modalEditarExistente.outerHTML = modalEditarHtml;
  } else {
    document.body.insertAdjacentHTML("beforeend", modalEditarHtml);
  }

  const modalEliminarExistente = document.querySelector(
    `#eliminarRutina__${socio.personaId}`
  );
  if (modalEliminarExistente) {
    modalEliminarExistente.outerHTML = modalEliminarHtml;
  } else {
    document.body.insertAdjacentHTML("beforeend", modalEliminarHtml);
  }
}

export function renderTablaDetalle(tablaEjercicios, detalleRutina) {
  tablaEjercicios.innerHTML += `
        <tr>
            <td>${detalleRutina.diaSemana}</td>
            <td>${detalleRutina.ejercicio.nombre}</td>
            <td>${detalleRutina.serie}</td>
            <td>${detalleRutina.repeticiones}</td>
            <td>${detalleRutina.peso}</td>
            <td>${detalleRutina.calorias}</td>
            <td>${detalleRutina.tiempoDescanso}</td>
            <td>
            <button class="btn btn-sm btn-danger">Eliminar</button>
            </td>
        </tr>`;
}
