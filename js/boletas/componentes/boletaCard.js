/*funcion de la estructura*/
export function boletaCard({
  id,
  fechaEmision,
  socio_id,
  dni,
  telefono,
  menbresia_id,
  opGrabada,
  igv,
  importeTotal,
}) {
  return /*html*/ `  


    <div>
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="caja-titulo"><h4 class="fw-bold">Gimnasio Animal Gym</h4></div>
        <div><img src="img/logo.jpg" alt="logo"  class="logos"></div>
      </div>
      <hr />
      <div class="mb-3">
        <p><strong>Boleta N°:</strong> ${id}</p>
        <p><strong>Fecha de emisión:</strong> ${fechaEmision}</p>
        <p><strong>Socio:</strong> ${socio_id}</p>
        <p><strong>DNI:</strong> ${dni}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Membresía:</strong> ${menbresia_id}</p>
      </div>
      <div class="row justify-content-end">
        <div class="col-12 col-sm-6 totales caja-importe">
          <table class="table table-borderless text-center text-sm-end">
            <tr><th>Op. Grabadas:</th><td>${opGrabada}</td></tr>
            <tr><th>IGV (18%):</th><td>${igv}</td></tr>
            <tr class="table-active"><th>Importe Total:</th><td class="fw-bold">${importeTotal}</td></tr>
          </table>
        </div>
      </div>
      <div class="text-center mt-3">
        <p class="mb-0">¡Gracias por confiar en nosotros!</p>
        <small>Este documento no tiene validez tributaria</small>
      </div>
    </div>

       
    
        `;
}
