export function filaBoleta({ id, fechaEmision, socio_id, dni, telefono, menbresia_id, opGrabada, igv, importeTotal }) {
  /*html*/
  return `
    
    <tr>
      <td>${fechaEmision}</td>
      <td>${socio_id}</td>
      <td>${dni}</td>
    <td>+51 ${telefono}</td>
        <td>${importeTotal}</td>


      <td>
        <div class="dropdown">
          <button class="btn btn-link text-dark p-0" type="button" data-bs-toggle="dropdown">
            <i class="bi bi-three-dots-vertical"></i>
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item verBoleta" href="#" data-bs-toggle="modal"
                data-bs-target="#boletaModal"
                data-id="${id}">
                <i class="bi bi-eye me-2"></i>Ver detalle de la boleta
              </a></li>
          </ul>
        </div>
      </td>
    </tr>

`;

}
