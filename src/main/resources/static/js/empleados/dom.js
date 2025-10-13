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

//eliminar

export const empleadoModalEliminar = document.getElementById('modalEliminar');

export const empleadoBtnEliminar = empleadoModalEliminar.querySelector('#botonEliminar')
