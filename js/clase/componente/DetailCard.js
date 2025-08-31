export function DetailCard({ id, nombre, descripcion, entrenador, fecha, hora, duracion, estado, capacidad }) {
    return /*html*/ `
    <div class="mb-3">
      <h5 class="card-title mb-2">${nombre}</h5>
      <p class="card-text">${descripcion}</p>
    </div>

    <div class="mb-3">
      <h5 class="mb-2">Entrenador</h5>
      <div class="d-flex gap-2 border border-2 rounded-3 p-3 align-items-center">
        <i class="bi bi-person-fill"></i>
        <h5 class="mb-0">${entrenador.nombre} ${entrenador.apellido}</h5>
      </div>
    </div>

    <div class="d-flex flex-wrap gap-2 justify-content-center mb-3">
      <div class="border border-2 p-2 rounded-2 d-flex align-items-center justify-content-center gap-2 card-separation">
        <i class="fa-solid fa-calendar"></i>
        <h5 class="mb-0">${fecha}</h5>
      </div>
      <div class="border border-2 p-2 rounded-2 d-flex align-items-center justify-content-center gap-2 card-separation">
        <i class="fa-solid fa-clock"></i>
        <h5 class="mb-0">${hora}</h5>
      </div>
      <div class="border border-2 p-2 rounded-2 d-flex align-items-center justify-content-center gap-2 card-separation">
        <i class="fa-solid fa-hourglass"></i>
        <h5 class="mb-0">${duracion}m</h5>
      </div>
    </div>

    <div class="d-flex flex-wrap gap-2 justify-content-center">
      <div class="d-flex flex-column col-12 col-md-5 card-separation">
        <h5 class="mb-2">Capacidad</h5>
        <div class="border border-2 rounded-2 p-3 d-flex align-items-center justify-content-center flex-grow-1">
          <h5 class="mb-0">${capacidad} personas</h5>
        </div>
      </div>

      <div class="d-flex flex-column col-12 col-md-5 card-separation">
        <h5 class="mb-2">Estado</h5>
        <div class="border border-2 rounded-2 p-3 d-flex align-items-center justify-content-center flex-grow-1">
          <h5 class="mb-0 text-primary">${estado}</h5>
        </div>
      </div>
    </div>
  `
}
