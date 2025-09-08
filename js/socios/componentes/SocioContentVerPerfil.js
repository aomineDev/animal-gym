export function SocioContentVerPerfil({id,nombre,apellido,dni,estado,fecha_ingreso,telefono,correo,fecha_nacimiento,altura,foto_perfil,peso,genero,imagen,membresia_id,rutina_id}){

  return /*html*/`
  <div class="row g-4">
    <!-- Información Personal -->
    <div class="col-12 col-lg-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img src="./${foto_perfil}" class="profile-img-large mb-3">
          <h5 class="card-title mb-0">${nombre} ${apellido}</h5>
          <p class="text-muted">Membresía Activa</p>

          <!--<div class="d-grid gap-2 mb-3">
            <button class="btn btn-outline-primary btn-sm">
              <i class="bi bi-arrow-repeat me-1"></i>Renovar Membresía
            </button>
          </div>-->

          <div class="d-flex justify-content-around mb-3">
            <div>
              <small class="text-muted">Peso</small>
              <div class="fw-bold">${peso} kg</div>
            </div>
            <div>
              <small class="text-muted">Altura</small>
              <div class="fw-bold">${altura} m</div>
            </div>
            <div>
              <small class="text-muted">Edad</small>
              <div class="fw-bold">${new Date().getFullYear() - new Date(fecha_nacimiento).getFullYear()} años</div>
            </div>
          </div>

          <hr>
          <ul class="list-group text-start small">
            <li class="list-group-item d-flex justify-content-between">
              <span><i class="bi bi-calendar3 me-2"></i>Fecha de inscripción:</span>
              <span class="fw-bold">${fecha_ingreso}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span><i class="bi bi-card-checklist me-2"></i>Plan actual:</span>
              <span class="fw-bold">Plan Básico Mensual</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span><i class="bi bi-person-badge me-2"></i>DNI:</span>
              <span class="fw-bold">${dni}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span><i class="bi bi-telephone me-2"></i>Teléfono:</span>
              <span class="fw-bold">+51 ${telefono}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span><i class="bi bi-envelope me-2"></i>Correo:</span>
              <span class="fw-bold">${correo}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Historial de Clases -->
    <div class="col-12 col-lg-8">
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="card-title mb-0">
              <i class="bi bi-clock-history me-2"></i>Historial de Clases
            </h5>
            <span class="badge bg-primary">Clases inscritas</span>
          </div>

          <div class="table-responsive">
            <table class="table table-sm table-hover">
              <thead class="table-light">
                <tr>
                  <th>Clase</th>
                  <th>Instructor</th>
                  <th>Fecha Inicio</th>
                  <th>Fecha Final</th>
                  <th>Horario</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div>
                      <strong>Yoga Matutino</strong>
                    </div>
                  </td>
                  <td>
                    <div>
                      <strong>María García</strong>
                    </div>
                  </td>
                  <td>15/08/2025</td>
                  <td>30/09/2025</td>
                  <td>
                    <span class="badge bg-info">07:00 - 08:00</span>
                  </td>
                  <td><span class="badge bg-secondary">Finalizado</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <!--<div class="mt-3">
            <div class="d-flex justify-content-between align-items-center">
              <button class="btn btn-outline-primary btn-sm">
                <i class="bi bi-plus-circle me-1"></i>Inscribir a nueva clase
              </button>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>  
  `;
}