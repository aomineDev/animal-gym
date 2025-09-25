export function ClaseCard({ claseId, nombre, descripcion, estado, imagen }) {
  return /*html*/ `
    <div class="col-12 col-md-6 col-xl-4" data-id="${claseId}">
      <div class="mt-4 border-0 card overflow-hidden rounded-4">
        <div class="overflow-hidden">
          <img src="${imagen}" class="card-img-top" alt="${nombre}">
        </div>
        <div class="row d-flex align-items-center card-body">
          <div class="col-9">
            <h5 class="card-title mb-1">${nombre}</h5>
            <p class="text-muted mb-1">${descripcion}</p>
            <span class="badge ${estadoClase(estado)}">${estado}</span>
          </div>
          <div class="col-3 text-end">
            <div class="dropdown">
              <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#verClase__${claseId}">Ver detalles</a></li>
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#editarClase__${claseId}">Editar</a></li>
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#gestionarInscritos__${claseId}">Gestionar Inscritos</a></li>
                <li><a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#eliminarClase__${claseId}">Eliminar</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>`;
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
