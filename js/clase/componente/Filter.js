export function Filter() {
  return /*html*/ `
    <h5 class="mb-3">Filtrar clases</h5>

    <div class="mb-3">
      <label class="form-label">Fecha</label>
      <input type="date" class="form-control">
    </div>

    <div class="mb-3">
      <label class="form-label">Duración</label>
      <select class="form-select">
        <option>20m</option>
        <option>40m</option>
        <option>60m</option>
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label">Entrenador</label>
      <select class="form-select">
        <option>Entrenador 1</option>
        <option>Entrenador 2</option>
        <option>Entrenador 3</option>
      </select>
    </div>

    <div class="mb-3">
      <label class="form-label">Estado</label>
      <select class="form-select">
        <option>Programado</option>
        <option>En curso</option>
        <option>Finalizado</option>
      </select>
    </div>

    <button class="btn btn-primary w-100">Aplicar</button>
  `;
}
