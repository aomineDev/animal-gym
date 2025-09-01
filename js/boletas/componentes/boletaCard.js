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
    <div class="card shadow mt-5 mb-5 p-5">
                <!-- Encabezado -->
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <div>
                  <h4 class="fw-bold">Gimnasio Animal Gym</h4>
                  </div>
                  <div>
                  <img src="img/logo.jpg" alt="logo" style="height:90px;">
                  </div>

         
                </div>
         <hr />
                  <h5 class="fw-bold text-center">BOLETA DE VENTA</h5>
                <!-- Datos principales -->
                <div class="mb-3">
                  <p><strong>Boleta N° </strong> ${id}</p>
                
                  <p><strong>Fecha de emisión:</strong> ${fechaEmision}</p>
                  <p><strong>Socio:</strong> ${socio_id}</p>
                  <p><strong>Dni:</strong> ${dni}</p>
                  <p><strong>Telefono:</strong> ${telefono}</p>
 
                  <p><strong>Membresía:</strong> ${menbresia_id}</p>
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
