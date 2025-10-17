import { fechaI, fechaF, rangeInput, empleadoSelectInput, socioInput, rangeValue, tablaBoleta } from "../dom.js";
import { boletaList } from "../store.js";
import { renderRow } from "../render.js";
import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'
const data = Object.values(boletaList);


//funcion propida de bootstrap para el input range
rangeInput.addEventListener('input',
  function range() {
    rangeValue.textContent = rangeInput.value;
    rangeValue.textContent = this.value;
  })


function filtros() {
  const precioMax = parseFloat(rangeInput.value);
  const fechaInicio = fechaI.value;
  const fechaFin = fechaF.value;
  const socio = socioInput.value.toLowerCase();

  fechaF.disabled = !fechaInicio;

  // Validación de fechas
  if (fechaInicio && fechaFin && fechaFin < fechaInicio) {
    fechaF.classList.add('is-invalid');
    showToast('La fecha final debe ser mayor o igual a la inicial', TOAST_TYPES.WARNING);
    return;
  }
  fechaF.classList.remove('is-invalid');

  const resultados = data.filter(b => {
    // Filtro precio
    const cumplePrecio = !rangeInput.value || parseFloat(b.precioTotal) >= precioMax;

    // Filtro socio
    const socioEncontrado = !socio || b.socio.nombre.toLowerCase().includes(socio);

    // Filtro fechas
    let cumpleRango = true;
    if (fechaInicio && fechaFin) {
      cumpleRango = b.fechaEmision >= fechaInicio && b.fechaEmision <= fechaFin;
    } else if (fechaInicio && !fechaFin) {
      cumpleRango = b.fechaEmision === fechaInicio;
    } else if (!fechaInicio && fechaFin) {
      fechaF.value = ""
      fechaF.disabled = true
    }

    return cumplePrecio && socioEncontrado && cumpleRango;
  });

  // Ordenar por fecha
  const ordenados = resultados.sort((a, b) => a.fechaEmision.localeCompare(b.fechaEmision));

  // Renderizar la tabla
  renderRow(ordenados, tablaBoleta);
}



export default function filter() {
  fechaI.addEventListener('change', filtros)
  fechaF.addEventListener('change', filtros)
  rangeInput.addEventListener('input', filtros)
  socioInput.addEventListener('input', filtros)
}

