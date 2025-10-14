// //llamar al formulario
// export const formulario = document.getElementById("formEmpleado");
// export const cajaDeCartas = document.getElementById("empleado_card");

//contenedor de las cartas
export const empleadoContainerCard = document.getElementById('empleadoContainerCard')

//formulario 
export const empleadoFormulario = document.getElementById('empleadoForm');

//modal del formulario
export const empleadoFormularioModal = document.getElementById('empleadoModal');

export const tituloModal = empleadoFormularioModal.querySelector('.modal-title');

export const empleadoFormularioSubmit = empleadoFormularioModal.querySelector('button[type="submit"]')

export const empleadoFormImagenInput = empleadoFormularioModal.querySelector('#empleadoForm-image')

export const empleadoFormImagenPreview = empleadoFormularioModal.querySelector('#empleadoForm-imagePreview')
// export const dniInput = empleadoFormulario.querySelector('#dni');
//eliminar

export const empleadoModalEliminar = document.getElementById('modalEliminar');

export const empleadoBtnEliminar = empleadoModalEliminar.querySelector('#botonEliminar')

//detalle
// === Selección del modal principal ===
export const verDetalle = document.getElementById("verDetalle");
export const modalDetalle = document.getElementById("detalleModal");

// === Header ===
export const imagenDetalle = modalDetalle.querySelector("#imagen-detalle");
export const nombreDetalle = modalDetalle.querySelector("#nombre-detalle");
export const apellidoDetalle = modalDetalle.querySelector("#apellido-detalle");
export const rolDetalle = modalDetalle.querySelector("#rol-detalle");

// === Información Personal ===
export const nombreCompletoDetalle = modalDetalle.querySelector("#nombre-completo-detalle");
export const fechaNacimientoDetalle = modalDetalle.querySelector("#fecha-nacimiento-detalle");

// === Información de Contacto ===
export const telefonoDetalle = modalDetalle.querySelector("#telefono-detalle");
export const emailDetalle = modalDetalle.querySelector("#email-detalle");

// === Información Laboral ===
export const especialidadDetalle = modalDetalle.querySelector("#especialidad-detalle");
export const contratoDetalle = modalDetalle.querySelector("#contrato-detalle");

// === Fechas Importantes ===
export const fechaIngresoDetalle = modalDetalle.querySelector("#fecha-ingreso-detalle");

// === Información Salarial ===
export const salarioDetalle = modalDetalle.querySelector("#salario-detalle");
//change
