export function filaTable({ id, nombre, apellido, dni, fecha_ingreso, telefono, correo, fecha_nacimiento, rol_id }) {
  /*html*/
  return `
  <tr>
    <td>${id}</td>
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
            >Editar</a
          >
        </li>
        <li>
          <a
            class="dropdown-item text-danger"
            href="#"
            onclick="borrarFila(this)"
            >Eliminar</a
          >
        </li>
      </ul>
                </div>
    </td>
  </tr>
    `;
}