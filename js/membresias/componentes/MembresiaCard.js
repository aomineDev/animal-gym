export function MembresiaCard({id, nombre, precio, descripcion, duracion, estado}){
  return /*html*/`
    <!-- Membresía 1 - Plan Básico Mensual -->
      <div class="col-12 col-md-6 col-lg-4 col-xxl-3">
        <div class="workout-grid shadow-sm">
          <div class="img-wrap position-relative">
            <!-- <a href="#" class="btn-wishlist position-absolute top-0 start-0 m-2 z-3">
              <i class="bi bi-heart-fill text-white fs-5"></i>
            </a> -->
            <div class="dropdown position-absolute top-0 end-0 m-2 z-3">
              <a href="#" class="btn-wishlist text-white" data-bs-toggle="dropdown">
                <i class="bi bi-three-dots-vertical fs-5"></i>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#verMembresiaModal" id="detalleId${id}">
                  <i class="bi bi-eye me-2"></i>Ver detalles
                </a></li>
                <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#membresiaModal">
                  <i class="bi bi-pencil me-2"></i>Editar
                </a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item text-danger" href="#" data-bs-toggle="modal" data-bs-target="#confirmDeleteModal">
                  <i class="bi bi-trash me-2"></i>Eliminar
                </a></li>
              </ul>
            </div>
            <a href="#">
              <img src="https://picsum.photos/600/400?random=1" alt="" class="w-100 rounded-3">
            </a>
          </div>
          <div class="workout-detail p-3">
            <a href="#" class="text-decoration-none">
              <h5 class="fw-semibold mb-2">${nombre}</h5>
            </a>
            <h6 class="fw-semibold text-secondary">
              S/ 100
              <small class="text-decoration-line-through text-muted ms-1">S/ ${precio}</small>
              <span class="ms-2 small text-muted">
                <i class="bi bi-clock"></i> ${duracion} dias
              </span>
            </h6>
            <p class="small text-muted mb-2">${descripcion}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="badge bg-success">${estado}</span>
              <small class="text-muted">35/100 socios</small>
            </div>
          </div>
        </div>
      </div>
  
  `
}