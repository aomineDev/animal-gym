import Row from "./components/Row.js";
import NoRow from "./components/NoRow.js";

export function renderRow(resultados, tablaBoleta) {
  if (resultados.length === 0) {
    tablaBoleta.innerHTML = NoRow();
    return;
  }
  const filas = resultados.map(boleta => Row(boleta)).join('')
  tablaBoleta.innerHTML = filas
}