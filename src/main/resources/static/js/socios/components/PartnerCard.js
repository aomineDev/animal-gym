export default function (partner) {
  const {
    personaId,
    dni,
    nombre,
    apellido,
    telefono,
    genero,
    email,
    fechaNacimiento,
    fechaIngreso,
    fechaVencimiento,
    estado,
    puntos,
    peso,
    altura,
    imagen,
    membresia,
    rutinas,
  } = partner

  return /*html*/ `
		<tr data-id="${personaId}">
      <td>
        <img src="${imagen}" class="profile-img" alt="foto">
      </td>
      <td>${nombre} + ' ' + ${apellido}</td>
      <td>${email}</td>
      <td>+51 ${telefono}</td>
      <td>
        <span class="${estado} ? 'badge bg-success' : 'badge bg-danger'">${
    estado ? 'Activo' : 'Inactivo'
  } </span>
      </td>
      <!-- <td></td> -->
      <td>${membresia != null ? membresia.nombre : 'Sin membresía'}</td>
      <td>${fechaIngreso}</td>
      <td>
        <div class="dropdown">
          <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#partnerProfileModal" data-id="${personaId}">
                <i class="bi bi-eye me-2"></i>Ver perfil
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#partnerFormModal"
                data-id="${personaId}">
                <i class="bi bi-pencil me-2"></i>Editar
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li>
              <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal"
                data-bs-target="#partnerDeleteModal" data-id="${personaId}">
                <i class="bi bi-trash me-2"></i>Eliminar
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  `
}
