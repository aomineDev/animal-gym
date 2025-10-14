export default function (clase) {
  return /*html*/ `
  ${clase.reservas
    .map(
      (reserva) => /*html*/ `
        <tr>
          <td>${reserva.socio.nombre}</td>
          <td>${reserva.socio.apellido}</td>
          <td>${reserva.socio.dni}</td>
          <td>${reserva.fecha}</td>
          <td>
            <button class="btn btn-sm btn-danger eliminarSocioBtn" data-id="${clase.claseId}" data-reserva-id="${reserva.reservaClaseId}">
              Eliminar
            </button>
          </td>
        </tr>
      `
    )
    .join('')}
  `
}
