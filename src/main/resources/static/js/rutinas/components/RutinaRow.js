export default function (rutina) {
  return /* html */ `
    <tr>
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
              <a class="dropdown-item" href="#" data-bs-toggle="modal"
                data-bs-target=#rutinaFormModal data-rutina-id="${rutina.rutinaId}">
                <i class="bi bi-pencil me-2"></i>Editar
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" data-bs-toggle="modal"
                data-bs-target=#ejercicioFormModal data-rutina-id="${rutina.rutinaId}">
                + Agrega ejercicio
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal"
                data-bs-target=#rutinaDeleteModal data-rutina-id="${rutina.rutinaId}">
                Eliminar
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  `
}
