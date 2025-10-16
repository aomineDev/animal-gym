import { fechaInput, tablaFilas, rangeInput, empleadoSelectInput, rangeValue, tablaBoleta } from "../dom.js";
import { boletaList } from "../store.js";
import { renderRow } from "../render.js";

const data = Object.values(boletaList);


//funcion propida de bootstrap para el input range
rangeInput.addEventListener('input',
  function range() {
    rangeValue.textContent = rangeInput.value;
    rangeValue.textContent = this.value;
  })


function filtros() {
  const precioMax = parseFloat(rangeInput.value);
  const fecha = fechaInput.value;

  const resultados = data.filter(b => {
    const cumpleFecha = !fecha || b.fechaEmision === fecha;
    const cumplePrecio = parseFloat(b.precioTotal) >= precioMax;
    return cumpleFecha && cumplePrecio;

  });

  renderRow(resultados, tablaBoleta)
}

export default function filter() {
  fechaInput.addEventListener('change', filtros)
  rangeInput.addEventListener('input', filtros)
  // empleadoSelectInput.addEventListener('change', filtros)
}

