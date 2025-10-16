import { fechaInput, tablaFilas, rangeInput, empleadoSelectInput, rangeValue, tablaBoleta } from "../dom.js";
import { boletaList } from "../store.js";


const data = Object.values(boletaList);


//funcion propida de bootstrap para el input range
rangeInput.addEventListener('input', function () {
  rangeValue.textContent = rangeInput.value;
  rangeValue.textContent = this.value;
})


function rangoDePrecios() {
  const precioMax = parseFloat(rangeInput.value);
  const fecha = fechaInput.value;

  const resultados = data.filter(b => {
    const cumpleFecha = !fecha || b.fechaEmision === fecha;
    const cumplePrecio = parseFloat(b.precioTotal) >= precioMax;
    return cumpleFecha && cumplePrecio;
  });

  pintarTabla(resultados);
}

function pintarTabla(resultados) {
  if (resultados.length === 0) {
    tablaBoleta.innerHTML = '<tr><td colspan="6" class="text-center">No se encontraron resultados</td></tr>';
    return;
  }

  const filas = resultados.map(b => `
    <tr>
      <td>${b.boletaId}</td>
      <td>${b.fechaEmision}</td>
      <td>${b.hora}</td>
      <td>${b.grabado}</td>
      <td>${b.precioTotal}</td>
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
                 data-id="${b.boletaId}">
                <i class="bi bi-eye me-2"></i>Detalles
              </a>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  `).join('');

  tablaBoleta.innerHTML = filas;
}
export default function call() {
  fechaInput.addEventListener('change', rangoDePrecios)
  rangeInput.addEventListener('input', rangoDePrecios)
  // empleadoSelectInput.addEventListener('change', filtros)
}

