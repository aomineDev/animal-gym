export function filaTable({ nombre, apellido, dni, fecha_ingreso, telefono, correo, fecha_nacimiento, rol_id }) {
  /*html*/
  return `
  <tr>
        <td><img src="img/emp.png" class="profile-img"></td>
      <td>${nombre}</td>
      <td>${apellido}</td>
      <td>${dni}</td>
      <td>${fecha_ingreso}</td> 
      <td>${telefono}</td>
      <td>${correo}</td>
      <td>${fecha_nacimiento}</td>
      <td>${rol_id}</td>
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
            onclick="editarFila(this)";
            ><i class="bi bi-pencil me-2"></i>Editar</a
          >
        </li>
          <li>
              <hr class="dropdown-divider">
            </li>
        <li>
          <a
            class="dropdown-item text-danger"
            href="#"
            onclick="borrarFila(this)"
            ><i class="bi bi-trash me-2"></i>Eliminar</a
          >
        </li>
      </ul>
                </div>
    </td>
  </tr>
    `;
}