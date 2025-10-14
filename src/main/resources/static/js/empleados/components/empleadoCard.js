export default function (empleado, usuario) {
    const {
        personaId,
        nombre,
        apellido,
        imagen
    } = empleado

    const {
        rol: {
            nombreRol
        }
    } = usuario
    return /*html*/ `

<div class="col-12 col-md-6 col-xl-3" data-id = ${personaId}>
                        <div class="mt-4 border-0 card overflow-hidden rounded-4">

                            <div class="overflow-hidden">
                                <img src="${imagen}" class="card-img-top w-100"
                                    style=" height:200px; object-fit:cover;">
                            </div>

                            <div class="row d-flex align-items-center card-body">

                                <div class="col-9">
                                    <h5 class="card-title mb-1">
                                      ${nombre} ${apellido}
                                    </h5>
                                      <p class="text-muted mb-1">${nombreRol}</p>
                                </div>
                                <div class="col-3 text-end">
                                    <div class="dropdown">
                                        <button class="btn btn-link text-dark p-0" type="button"
                                            data-bs-toggle="dropdown">
                                            <i class="bi bi-three-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li>
                                                 <a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#verDetalle" data-id=${personaId}>
                                                    Ver detalles
                                                </a> 
                                            </li>
                                            <li>
                                                <a class="dropdown-item" href="#" data-bs-toggle="modal"
                                                    data-bs-target="#empleadoModal" data-id=${personaId}>
                                                    Editar
                                                </a>
                                            </li>
                                            <li>
                                                <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal"
                                                    data-id="${personaId}" data-bs-target="#modalEliminar">
                                                    Eliminar
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
  `
}