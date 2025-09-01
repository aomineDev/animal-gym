export const RutinaFila = ({ id, nombre, duracion, estado }) => {
  return /*html*/ `
    <tr>
      <td>${nombre}</td>
      <td>${duracion} semanas</td>
      <td><span class="badge bg-success">${estado}</span></td>
      <td>
        <div class="dropdown">
          <button 
            class="btn btn-link text-dark p-0" 
            type="button" 
            data-bs-toggle="dropdown"
          >
            <i class="bi bi-three-dots-vertical"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a 
                class="dropdown-item" 
                href="#" 
                data-bs-toggle="modal"
                data-bs-target="#perfilSocioModal" 
              >
                <i class="bi bi-eye me-2"></i>Ver detalle
              </a>
            </li>
            <li>
              <a 
                class="dropdown-item" 
                href="#" 
                data-bs-toggle="modal" 
                data-bs-target="#editarRutinaModal"
                data-id="${id}"
              >
                <i class="bi bi-pencil me-2"></i>Editar
              </a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
              <a 
                class="dropdown-item text-danger" 
                href="#" 
                data-bs-toggle="modal"
                data-bs-target="#confirmDeleteModal"
                data-id="${id}"
              >
                <i class="bi bi-trash me-2"></i>Eliminar
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  `
}

/** FALTA MODIFICAR LOS TARGET DELOS MODALES */
