export function SocioItem({id, nombre, apellido, dni, fecha_ingreso,telefono,correo, fecha_nacimiento,altura,foto_perfil,peso,genero,imagen,membresia_id,rutina_id}){
  return /*html*/`

    <tr>
      <td><img src="${foto_perfil}" class="profile-img"></td>
      <td>${nombre.split(" ")[0]} ${apellido.split(" ")[0]}</td>
      <td>${correo}</td>
      <td>+51 ${telefono}</td>
      <td><span class="badge bg-success">Activo</span></td>
      <td>Plan Básico Mensual</td>
      <td>${fecha_ingreso}</td>
      <td>
        <div class="dropdown">
          <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" data-bs-toggle="modal"
                data-bs-target="#perfilSocioModal">
                <i class="bi bi-eye me-2"></i>Ver perfil
              </a></li>
            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#socioModal">
                <i class="bi bi-pencil me-2"></i>Editar
              </a></li>
            <li>
              <hr class="dropdown-divider">
            </li>
            <li><a class="dropdown-item text-danger" href="#" data-bs-toggle="modal"
                data-bs-target="#confirmDeleteModal">
                <i class="bi bi-trash me-2"></i>Eliminar
              </a></li>
          </ul>
        </div>
      </td>
    </tr>

`
}