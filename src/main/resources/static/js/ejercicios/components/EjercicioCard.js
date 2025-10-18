export default function (ejercicio) {
  const { ejercicioId, equipo, grupoMuscular, nombre, descripcion } = ejercicio

  return /*html*/ `
    <tr data-id="${ejercicioId}">
      <td>${ejercicioId}</td>
      <td>${nombre}</td>
      <td>${descripcion}</td>
      <td>${grupoMuscular}</td>
      <td>${equipo}</td>
      <td>
        <div class="dropdown">
          <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-id="${ejercicioId}" data-bs-target="#ejercicioFormModal">
                <i class="bi bi-pencil me-2"></i>Editar
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-id="${ejercicioId}" data-bs-target="#ejercicioDeleteModal">
                <i class="bi bi-trash me-2"></i>Eliminar
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  `
}
