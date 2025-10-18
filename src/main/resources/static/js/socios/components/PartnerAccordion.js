export default function PartnerAccordion(rutinas = []) {
  if (!rutinas || rutinas.length === 0) {
    return /*html*/ `
      <div class="text-center text-muted py-4">
        <i class="bi bi-exclamation-circle me-2"></i>
        No tiene rutinas registradas
      </div>`
  }

  return /*html*/ `
    <div class="accordion" id="accordionRutinasSocio">
      ${rutinas
        .map(
          (rutina, index) => `
          <div class="accordion-item mb-3 shadow-sm border-0 rounded-3">
            <h2 class="accordion-header">
              <button class="accordion-button fw-semibold collapsed" 
                      type="button" data-bs-toggle="collapse" 
                      data-bs-target="#collapseRutina-${index}">
                🏋️ ${rutina.nombre} 
                <span class="ms-2 text-secondary small">(${
                  rutina.objetivo
                })</span>
              </button>
            </h2>

            <div id="collapseRutina-${index}" class="accordion-collapse collapse" data-bs-parent="#accordionRutinasSocio">
              <div class="accordion-body bg-light rounded-3">
                <p class="mb-1"><strong>Instructor:</strong> ${
                  rutina.empleado.nombre
                } ${rutina.empleado.apellido}</p>
                <p class="mb-1"><strong>Duración:</strong> ${
                  rutina.fechaInicio
                } — ${rutina.fechaFin}</p>
                <p class="mb-2"><strong>Descripción:</strong> ${
                  rutina.descripcion
                }</p>
                <hr>
                ${
                  rutina.detalleRutinaList &&
                  rutina.detalleRutinaList.length > 0
                    ? rutina.detalleRutinaList
                        .map(
                          (detalle, i) => `
                          <div class="p-3 bg-white border rounded-3 shadow-sm mb-2">
                            <div class="d-flex justify-content-between align-items-center">
                              <h6 class="fw-bold mb-0">${detalle.ejercicio.nombre}</h6>
                              <span class="badge bg-info small">${detalle.diaSemana}</span>
                            </div>
                            <small class="text-muted">Grupo Muscular: ${detalle.ejercicio.grupoMuscular} | Equipo: ${detalle.ejercicio.equipo}</small>
                            <hr class="my-2">
                            <div class="d-flex justify-content-between small">
                              <span>Series: <strong>${detalle.serie}</strong></span>
                              <span>Reps: <strong>${detalle.repeticiones}</strong></span>
                              <span>Peso: <strong>${detalle.peso}kg</strong></span>
                            </div>
                            <div class="d-flex justify-content-between small mt-1">
                              <span>Calorías: <strong>${detalle.calorias}kcal</strong></span>
                              <span>Descanso: <strong>${detalle.tiempoDescanso}s</strong></span>
                            </div>
                          </div>`
                        )
                        .join('')
                    : `<p class="text-muted small mb-0">Sin ejercicios asignados.</p>`
                }
              </div>
            </div>
          </div>`
        )
        .join('')}
    </div>`
}
