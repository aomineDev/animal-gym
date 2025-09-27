export function renderFilaSocio(socio) {
  const filaHtml = /*html*/ `
  
  
  `;
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

export function renderTablaRutinaModal(socio) {
  const tbody = document.querySelector(
    `#tablaRutinasModal__${socio.personaId}`
  );

  if (!tbody) return;

  // Renderizar las filas
  tbody.innerHTML = socio.rutinas
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
                  <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#">
                    <i class="bi bi-pencil me-2"></i>Editar
                  </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal"
                    data-bs-target=#eliminarRutina__${rutina.rutinaId} data-socio-id="${socio.personaId}"">
                    Eliminar
                  </a>
                </li>
              </ul>
            </div>
          </td>
        </tr>
  `
    )
    .join("");
}
