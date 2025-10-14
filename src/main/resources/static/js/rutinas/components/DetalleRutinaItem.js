export default function (detalleRutina) {
  const collapseId = `detalleCollapse-${detalleRutina.detalleRutinaId}`

  return /* html */ `

  <div class="accordion-item mb-2 shadow-sm rounded-3 border-0">
    <h2 class="accordion-header d-flex justify-content-between align-items-center">
      <button class="accordion-button fw-semibold" type="button" data-bs-toggle="collapse"
        data-bs-target="#${collapseId}" aria-expanded="true" aria-controls="${collapseId}">
        🏋️ ${detalleRutina.ejercicio.nombre} — <span class="ms-2 text-secondary small">${detalleRutina.diaSemana}
</span>
      </button>
      <button class="btn btn-sm btn-outline-danger me-3 ms-2 eliminarDetalleBtn" data-id="1">
        <i class="bi bi-trash"></i>
      </button>
    </h2>

    <div id="${collapseId}" class="accordion-collapse collapse show"
      data-bs-parent="#detalleRutinaAccordion">
      <div class="accordion-body">
        <div class="p-3 bg-light rounded-3 shadow-sm">
          <h6 class="fw-bold mb-1">Ejercicio: ${detalleRutina.ejercicio.nombre}</h6>
          <p class="mb-1 text-muted small">Grupo Muscular: ${detalleRutina.ejercicio.grupoMuscular}</p>
          <p class="mb-1 text-muted small">Equipo: ${detalleRutina.ejercicio.equipo}</p>
          <hr class="my-2">
          <div class="d-flex justify-content-between small">
            <span>Series: <strong>${detalleRutina.serie}</strong></span>
            <span>Reps: <strong>${detalleRutina.repeticiones}</strong></span>
            <span>Peso: <strong>${detalleRutina.peso}kg</strong></span>
          </div>
          <div class="d-flex justify-content-between small mt-1">
            <span>Calorías: <strong>${detalleRutina.calorias}kcal</strong></span>
            <span>Descanso: <strong>${detalleRutina.tiempoDescanso}s</strong></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  `
}
