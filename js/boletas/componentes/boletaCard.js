/*funcion de la estructura*/
export function boletaCard({
  id,
  fechaEmision,
  socio_id,
  menbresia_id,
  opGrabada,
  igv,
  importeTotal,
}) {
  return /*html*/ ` 
    <div class="card-body">
                <!-- Encabezado -->
                <div class="text-center mb-4">
                  <h4 class="fw-bold">Gimnasio Animal Gym</h4>
                  <p class="mb-0">Av. Siempre Viva 123</p>
                  <p class="mb-0">Tel: (01) 555-1234</p>
                  <hr />
                  <h5 class="fw-bold">BOLETA DE VENTA</h5>
                </div>

                <!-- Datos principales -->
                <div class="mb-3">
                  <p><strong>Fecha de emisión:</strong>${fechaEmision}</p>
                  <p><strong>Socio:</strong>${socio_id}</p>
                  <p><strong>Membresía:</strong>${menbresia_id}</p>
                </div>

                <!-- Totales -->
                <div class="row justify-content-end">
                  <div class="col-12 col-sm-6 totales">
                    <table class="table table-borderless text-center text-sm-end">
                      <tr>
                        <th>Op. Grabadas:</th>
                        <td>${opGrabada}</td>
                      </tr>
                      <tr>
                        <th>IGV (18%):</th>
                        <td>${igv}</td>
                      </tr>
                      <tr class="table-active">
                        <th>Importe Total:</th>
                        <td class="fw-bold">${importeTotal}</td>
                      </tr>
                    </table>
                  </div>
                </div>

                <!-- Pie -->
                <div class="text-center mt-3">
                  <p class="mb-0">¡Gracias por confiar en nosotros!</p>
                  <small>Este documento no tiene validez tributaria</small>
                </div>
              </div>
        `;
}
