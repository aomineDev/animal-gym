import { sectionCards } from "./dom.js";

export function renderClaseCard(clase, usuarios) {
  const cardHtml = /*html*/ `
    <div class="col-12 col-md-6 col-xl-3" id="clase-card-${clase.claseId}">
      <div class="mt-4 border-0 card overflow-hidden rounded-4">
        <div class="overflow-hidden">
          <img src="${clase.imagen}" class="card-img-top w-100" alt="${clase.nombre
    }"
            style="height:200px; object-fit:cover;">
        </div>
        <div class="row d-flex align-items-center card-body">
          <div class="col-9">
            <h5 class="card-title mb-1">${clase.nombre}</h5>
            <p class="text-muted mb-1">${clase.descripcion}</p>
            <span class="badge ${estadoClase(clase.estado)}">${clase.estado
    }</span>
          </div>
          <div class="col-3 text-end">
            <div class="dropdown">
              <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#" data-bs-toggle="modal"
                     data-bs-target="#verClase__${clase.claseId}">
                    Ver detalles
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#editarClase__${clase.claseId
    }">
                    Editar
                  </a>
                      </li>
                <li>
                  <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal"
                     data-bs-target="#eliminarClase__${clase.claseId}">
                    Eliminar
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // --- Modal Ver Detalles ---
  const modalDetallesHtml = /*html*/ `
      <div class="modal fade" id="verClase__${clase.claseId
    }" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">

            <div class="modal-header p-0 position-relative">
              <img class="img-fluid w-100 rounded-top" style="max-height: 300px; object-fit: cover;"
                src="${clase.imagen}" alt="${clase.nombre}">
              <button type="button" class="btn-close position-absolute top-0 end-0 m-2" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>

            <div class="modal-body" id="modalDetailClase">

              <!-- Título y descripción -->
              <div class="mb-4 text-center">
                <h3 class="fw-bold">${clase.nombre}</h3>
                <p class="text-muted">${clase.descripcion}</p>
              </div>

              <!-- Objetivo -->
              <div class="mb-4">
                <h5 class="mb-2"><i class="bi bi-bullseye me-2"></i> Objetivo</h5>
                <p>${clase.objetivo}</p>
              </div>

              <!-- Entrenador -->
              <div class="mb-4">
                <h5 class="mb-2"><i class="bi bi-person-badge me-2"></i> Entrenador</h5>
                <div class="d-flex gap-2 border border-2 rounded-3 p-3 align-items-center">
                  <i class="bi bi-person-fill fs-4 text-primary"></i>
                  <h5 class="mb-0">${clase.empleado.nombre + " " + clase.empleado.apellido
    }</h5>
                </div>
              </div>

              <!-- Información -->
              <div class="row g-3 text-center">

                <div class="col-12 col-md-4">
                  <div class="border border-2 rounded-3 p-3 h-100">
                    <h6 class="mb-2"><i class="bi bi-lightning-charge-fill me-1"></i> Intensidad</h6>
                    <h5 class="mb-0 ${estadoIntensidad(clase.intensidad)}">${clase.intensidad
    }</h5>
                  </div>
                </div>

                <div class="col-12 col-md-4">
                  <div class="border border-2 rounded-3 p-3 h-100">
                    <h6 class="mb-2"><i class="bi bi-clock-fill me-1"></i> Duración</h6>
                    <h5>${clase.duracion} minutos</h5>
                  </div>
                </div>

                <div class="col-12 col-md-4">
                  <div class="border border-2 rounded-3 p-3 h-100">
                    <h6 class="mb-2"><i class="bi bi-calendar-event-fill me-1"></i> Fecha</h6>
                    <h5>${clase.fecha}</h5>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="border border-2 rounded-3 p-3 h-100">
                    <h6 class="mb-2"><i class="bi bi-alarm-fill me-1"></i> Hora Inicio</h6>
                    <h5>${clase.horaInicio} h</h5>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="border border-2 rounded-3 p-3 h-100">
                    <h6 class="mb-2"><i class="bi bi-alarm me-1"></i> Hora Fin</h6>
                    <h5>${clase.horaFin} h</h5>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="border border-2 rounded-3 p-3 h-100">
                    <h6 class="mb-2"><i class="bi bi-people-fill me-1"></i> Capacidad</h6>
                    <h5>${clase.capacidad} personas</h5>
                  </div>
                </div>

                <div class="col-12 col-md-6">
                  <div class="border border-2 rounded-3 p-3 h-100">
                    <h6 class="mb-2"><i class="bi bi-check-circle-fill me-1"></i> Estado</h6>
                    <h5 class="text-primary ${estadoClase(clase.estado)}">${clase.estado
    }</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

  // --- Modal Editar ---
  const modalEditarHtml = /*html*/ `
    <div class="modal fade" id="editarClase__${clase.claseId
    }" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content rounded-4">
          <div class="modal-header">
            <h1 class="modal-title fs-5">Editar Clase</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form data-id="${clase.claseId
    }" class="editarClaseForm row needs-validation" novalidate>
              
              <!-- Nombre -->
              <div class="mb-3 col-md-6">
                <label for="nombre" class="form-label">Nombre de la clase</label>
                <input type="text" name="nombre" class="form-control" value="${clase.nombre
    }" required>
              </div>

              <!-- Imagen -->
              <div class="col-md-6">
                <label for="file" class="form-label">Foto de la clase</label>
                <input type="file" class="form-control" name="file" accept="image/jpeg,image/jpg,image/png">
              </div>

              <!-- Descripción -->
              <div class="mb-3 col-md-6">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea name="descripcion" class="form-control" rows="3" placeholder="Escribe una breve descripción de la clase">${clase.descripcion
    }</textarea>
              </div>

              <!-- Objetivo -->
              <div class="mb-3 col-md-6">
                <label for="objetivo" class="form-label">Objetivo</label>
                <textarea name="objetivo" class="form-control" rows="3" placeholder="Escribe el objetivo de la clase">${clase.objetivo
    }</textarea>
              </div>

              <!-- Capacidad -->
              <div class="mb-3 col-md-6">
                <label for="capacidad" class="form-label">Capacidad</label>
                <input type="number" name="capacidad" class="form-control" min="1" value="${clase.capacidad
    }" required>
              </div>

              <!-- Fecha -->
              <div class="mb-3 col-md-6">
                <label for="fecha" class="form-label">Fecha</label>
                <input type="date" name="fecha" id="fecha" class="form-control" value="${clase.fecha
    }" required>
              </div>

              <!-- Hora Inicio -->
              <div class="mb-3 col-md-6">
                <label for="horaInicio" class="form-label">Hora Inicio</label>
                <input type="time" name="horaInicio" class="form-control" value="${clase.horaInicio
    }" required>
              </div>

              <!-- Hora Fin -->
              <div class="mb-3 col-md-6">
                <label for="horaFin" class="form-label">Hora Fin</label>
                <input type="time" name="horaFin" class="form-control" value="${clase.horaFin
    }" required>
              </div>

              <!-- Intensidad -->
              <div class="mb-3 col-md-6">
                <label for="intensidad" class="form-label">Intensidad</label>
                <select name="intensidad" class="form-select" required>
                  <option value="" ${clase.intensidad === "" ? "selected" : ""
    }>Seleccione la intensidad</option>
                  <option value="Baja" ${clase.intensidad === "Baja" ? "selected" : ""
    }>Baja</option>
                  <option value="Media" ${clase.intensidad === "Media" ? "selected" : ""
    }>Media</option>
                  <option value="Alta" ${clase.intensidad === "Alta" ? "selected" : ""
    }>Alta</option>
                </select>
              </div>

              <!-- Entrenador -->
              <div class="mb-3 col-md-6">
                <label for="entrenador" class="form-label">Entrenador</label>
                <select name="entrenador" class="form-select" required>
                  <option value="">Seleccione un entrenador</option>
                  ${usuarios
      .filter((u) => u.rol.rolId === 2)
      .map(
        (u) => `<option value="${u.persona.personaId}" ${u.persona.personaId === clase.empleado.personaId
            ? "selected"
            : ""
          }>
                              ${u.persona.nombre} ${u.persona.apellido}
                             </option>`
      )
      .join("")}
                </select>
              </div>

              <button type="submit" class="btn btn-primary col-5 ms-3 btnActualizarClase">Actualizar clase</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;

  // --- Modal Eliminar ---
  const modalEliminarHtml = /*html*/ `
    <div class="modal fade" id="eliminarClase__${clase.claseId}" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Eliminar</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>¿Estás seguro que deseas eliminar la clase "${clase.nombre}"?</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-danger btnConfirmarEliminar"
                    data-id="${clase.claseId}">
              Confirmar eliminación
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // --- Inyectar o reemplazar ---
  const cardExistente = document.querySelector(`#clase-card-${clase.claseId}`);
  if (cardExistente) {
    cardExistente.outerHTML = cardHtml;
  } else {
    sectionCards.insertAdjacentHTML("beforeend", cardHtml);
  }

  const modalDetallesExistente = document.querySelector(
    `#verClase__${clase.claseId}`
  );
  if (modalDetallesExistente) {
    modalDetallesExistente.outerHTML = modalDetallesHtml;
  } else {
    document.body.insertAdjacentHTML("beforeend", modalDetallesHtml);
  }

  const modalExistente = document.querySelector(
    `#editarClase__${clase.claseId}`
  );
  if (modalExistente) {
    modalExistente.outerHTML = modalEditarHtml;
  } else {
    document.body.insertAdjacentHTML("beforeend", modalEditarHtml);
  }

  const modalEliminarExistente = document.querySelector(
    `#eliminarClase__${clase.claseId}`
  );
  if (modalEliminarExistente) {
    modalEliminarExistente.outerHTML = modalEliminarHtml;
  } else {
    document.body.insertAdjacentHTML("beforeend", modalEliminarHtml);
  }
}

function estadoClase(estado) {
  switch (estado) {
    case "Programado":
      return "bg-outline-primary text-primary";
    case "En curso":
      return "bg-outline-success text-success";
    case "Finalizado":
      return "bg-outline-danger text-danger";
    case "Cancelada":
      return "bg-outline-secondary text-secondary";
    default:
      return "bg-outline-dark text-dark";
  }
}

function estadoIntensidad(intensidad) {
  switch (intensidad) {
    case "Baja":
      return "bg-outline-success text-success";
    case "Media":
      return "bg-outline-warning text-warning";
    case "Alta":
      return "bg-outline-danger text-danger";
    default:
      return "bg-outline-dark text-dark";
  }
}
