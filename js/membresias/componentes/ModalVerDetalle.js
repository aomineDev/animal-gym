export function ModalVerDetalle({id, nombre, precio, descripcion, duracion, estado}){

return /*html*/`
  <div class="modal fade" id="verMembresiaModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Detalles de Membresía - Plan Básico Mensual</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label fw-bold">${nombre}</label>
              <p class="form-control-plaintext border rounded p-2 bg-light">Plan Básico Mensual</p>
            </div>
            <div class="col-md-3">
              <label class="form-label fw-bold">Precio Regular</label>
              <p class="form-control-plaintext border rounded p-2 bg-light">S/ ${precio}</p>
            </div>
            <div class="col-md-3">
              <label class="form-label fw-bold">Precio Promocional</label>
              <p class="form-control-plaintext border rounded p-2 bg-light text-success fw-bold">S/ 100</p>
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Duración</label>
              <p class="form-control-plaintext border rounded p-2 bg-light">${duracion} días</p>
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Fecha Inicio</label>
              <p class="form-control-plaintext border rounded p-2 bg-light">01/01/2025</p>
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Fecha Final</label>
              <p class="form-control-plaintext border rounded p-2 bg-light">31/12/2025</p>
            </div>
            <div class="col-12">
              <label class="form-label fw-bold">Descripción</label>
              <p class="form-control-plaintext border rounded p-2 bg-light">Acceso libre a todas las máquinas, área de cardio y pesas. Incluye casillero personal y acceso a duchas.</p>
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Estado</label>
              <p class="form-control-plaintext border rounded p-2 bg-light">
                <span class="badge bg-success">Activo</span>
              </p>
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Capacidad</label>
              <p class="form-control-plaintext border rounded p-2 bg-light">100 socios</p>
            </div>
            <div class="col-md-4">
              <label class="form-label fw-bold">Socios Inscritos</label>
              <p class="form-control-plaintext border rounded p-2 bg-light">
                <span class="text-primary fw-bold">35</span>
                <small class="text-muted">(35% ocupación)</small>
              </p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#membresiaModal">
            <i class="bi bi-pencil me-2"></i>Editar
          </button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
`;

}