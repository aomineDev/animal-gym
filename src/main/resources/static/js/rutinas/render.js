export function renderTablaDetalle(tablaEjercicios, detalleRutina) {
  tablaEjercicios.innerHTML += `
        <tr>
            <td>${detalleRutina.diaSemana}</td>
            <td>${detalleRutina.ejercicio.nombre}</td>
            <td>${detalleRutina.serie}</td>
            <td>${detalleRutina.repeticiones}</td>
            <td>${detalleRutina.peso}</td>
            <td>${detalleRutina.calorias}</td>
            <td>${detalleRutina.tiempoDescanso}</td>
            <td>
            <button class="btn btn-sm btn-danger">Eliminar</button>
            </td>
        </tr>`;
}
