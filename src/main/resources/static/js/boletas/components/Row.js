export default function Row(boleta) {
  return /*html*/ `
  <tr>
    <td>${boleta.boletaId}</td>
    <td>${boleta.fechaEmision}</td>
    <td>${boleta.hora}</td>
    <td>${boleta.grabado}</td>
    <td>${boleta.precioTotal}</td>
  <td>  ${boleta.socio.nombre}</td>
    <td>
      <div class="dropdown">
        <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown">
          <i class="bi bi-three-dots-vertical"></i>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item verBoleta" href="#"
              data-bs-target="#verBoleta"
              data-bs-toggle="modal"
              data-id="${boleta.boletaId}">
              <i class="bi bi-eye me-2"></i>Detalles
            </a>
          </li>
        </ul>
      </div>
    </td>
  </tr>

`

}