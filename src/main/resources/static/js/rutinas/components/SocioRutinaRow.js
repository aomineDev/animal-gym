export default function (socio) {
  return /*html*/ `
    <tr data-id="${socio.personaId}">
      <td>${socio.nombre}</td>
      <td>${socio.dni}</td>
      <td>
        <div class="d-flex flex-column">
          ${socio.rutinas
            .map(
              (rutina) =>
                `<span class="badge bg-primary mb-1 align-self-start">${rutina.nombre}</span>`
            )
            .join('')}
        </div>
      </td>
      <td>
        <div class="d-flex flex-column">
          ${socio.rutinas
            .map(
              (rutina) =>
                `<span class="badge bg-success mb-1 align-self-start">${rutina.fechaInicio}</span>`
            )
            .join('')}
        </div>
      </td>
      <td>
        <div class="d-flex flex-column">
          ${socio.rutinas
            .map(
              (rutina) =>
                `<span class="badge bg-warning mb-1 align-self-start">${rutina.fechaFin}</span>`
            )
            .join('')}
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
                 data-bs-target=#rutinaSocioDetailModal data-id="${
                   socio.personaId
                 }">
                <i class="bi bi-eye me-2"></i>Ver detalle
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr> 
  `
}
