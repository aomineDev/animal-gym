export function ClaseCard({ id, nombre, estado }) {
    return /*html*/ `
    <div class="col-12 col-md-6 col-xl-4">
      <div class="mt-4 border-0 card overflow-hidden rounded-4">
        <div class="overflow-hidden">
          <img src="img/clase-1.jpg" class="card-img-top" alt="#">
        </div>
        <div class="row d-flex align-items-center card-body">

          <div class="col-9">
            <h5 class="card-title mb-1">${nombre}</h5>
            <span class="badge bg-outline-primary text-primary">${estado}</span>
          </div>

          <div class="col-3 text-end">
            <div class="dropdown">
              <button 
                class="btn btn-link text-dark p-0" 
                type="button"
                data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a 
                    class="dropdown-item" 
                    href="#" 
                    data-bs-toggle="modal"
                    data-bs-target="#verClase" 
                    data-id=${id}>
                    Ver detalles
                  </a>
                </li>
                <li>
                  <a 
                    class="dropdown-item" 
                    href="#" 
                    data-bs-toggle="modal"
                    data-bs-target="#biClase"
                    data-id=${id}>
                    Editar
                  </a>
                </li>
                <li>
                  <a 
                    class="dropdown-item text-danger" 
                    href="#" 
                    data-bs-toggle="modal"
                    data-bs-target="#eliminarClase"
                    data-id=${id}>
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
