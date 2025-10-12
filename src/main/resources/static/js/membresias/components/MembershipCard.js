export default function (membership) {
  const {
    membresiaId,
    imagen,
    nombre,
    precio,
    limiteCupos,
    descripcion,
    duracion,
    precioOferta,
    inicioOferta,
    finOferta,
    estado,
  } = membership

  return /*html*/ `
		<div
			class="col-12 col-md-6 col-lg-4 col-xxl-3"
			data-id="${membresiaId}"
		>
			<div class="workout-grid shadow-sm">
				<div class="img-wrap position-relative">
					<div class="dropdown position-absolute top-0 end-0 m-2 z-3">
						<a href="#" class="btn-wishlist text-white" data-bs-toggle="dropdown">
							<i class="bi bi-three-dots-vertical fs-5"></i>
						</a>
						<ul class="dropdown-menu">
							<li>
								<a
									class="dropdown-item"
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#membershipFormModal"
									data-id="${membresiaId}"
								>
									<i class="bi bi-pencil me-2"></i> Editar
								</a>
							</li>
							<li>
								<hr class="dropdown-divider" />
							</li>
							<li>
								<a
									class="dropdown-item text-danger"
									href="#"
									data-bs-toggle="modal"
									data-bs-target="#membershipDeleteModal"
									data-id="${membresiaId}"
								>
									<i class="bi bi-trash me-2"></i>Eliminar
								</a>
							</li>
						</ul>
					</div>
			
					<a href="#">
						<img src="${imagen}" alt="membership Image" class="w-100 rounded-3" />
					</a>
				</div>
				<div class="workout-detail p-3">
					<a href="#" class="text-decoration-none">
						<h5 class="fw-semibold mb-2">${nombre}</h5>
					</a>
					<h6 class="fw-semibold text-secondary">
						 ${precioOferta ? 'S/. ' + precioOferta.toFixed(2) : ''}
						<small 
							class="${precioOferta ? 'text-decoration-line-through' : ''} text-muted ms-1"
						>
							S/ ${precio.toFixed(2)}
						</small>
						<span class="ms-2 small text-muted">
							<i class="bi bi-clock"></i> <span>${duracion}</span> dias
						</span>
					</h6>
					<p class="small text-muted mb-2">${descripcion || ''}</p>
					<div class="d-flex justify-content-between align-items-center">
						<span
							class="badge ${estado ? 'bg-success' : 'bg-secondary'}"
						>
							${estado ? 'Activo' : 'Inactivo'}
							</span>
						<small class="text-muted">
							limite: ${limiteCupos} socios
						</small>
					</div>
				</div>
			</div>
		</div>
  `
}
