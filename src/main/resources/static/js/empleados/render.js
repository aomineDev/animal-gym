// import { cajaDeCartas } from "./dom.js";
// export function renderEmpleadoCard(empleado, usuario, roles) {
//   //renderizado de cartas
//   const card =  /*html*/`
//     <div class="col-12 col-md-6 col-xl-3" id="empleado-card-${empleado.personaId}">
//         <div class="mt-4 border-0 card overflow-hidden rounded-4">
//             <div class="overflow-hidden">
//                 <img src="${empleado.foto}" class="card-img-top w-100"
//                     style="height:200px; object-fit:cover;">
//             </div>

//             <div class="row d-flex align-items-center card-body">
//                 <div class="col-9">
//                     <h5 class="card-title mb-1">
//                         ${empleado.nombre} ${empleado.apellido}
//                     </h5>
//                     <p class="text-muted mb-1">
//                         ${usuario.rol.nombreRol}
//                     </p>
//                 </div>
//                 <div class="col-3 text-end">
//                     <div class="dropdown">
//                         <button class="btn btn-link text-dark p-0" type="button"
//                             data-bs-toggle="dropdown">
//                             <i class="bi bi-three-dots-vertical"></i>
//                         </button>
//                         <ul class="dropdown-menu">
//                             <li>
//                                 <a class="dropdown-item" href="#" data-bs-toggle="modal"
//                                     data-bs-target="#verDetalle__${empleado.personaId}">
//                                     Ver detalles
//                                 </a>
//                             </li>
//                             <li>
//                                 <a class="dropdown-item" href="#" data-bs-toggle="modal"
//                                     data-bs-target="#editar__${empleado.personaId}">
//                                     Editar
//                                 </a>
//                             </li>
//                             <li>
//                                 <a class="dropdown-item text-danger" href="#" data-bs-toggle="modal"
//                                     data-bs-target="#eliminar__${empleado.personaId}">
//                                     Eliminar
//                                 </a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//   //renderizados del modal eliminar
//   const modalEliminar = /*html*/ `
//  <div class="modal fade" id="eliminar__${empleado.personaId}" tabindex="-1" aria-hidden="true">
//                 <div class="modal-dialog modal-dialog-centered">
//                     <div class="modal-content">
//                         <!-- Header -->
//                         <div class="modal-header">
//                             <h5 class="modal-title">Confirmar Eliminación</h5>
//                             <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
//                         </div>

//                         <!-- Body -->
//                         <div class="modal-body">
//                             <div class="text-center">
//                                 <i class="bi bi-exclamation-triangle text-warning" style="font-size: 3rem"></i>
//                                 <h6 class="mt-3">
//                                     ¿Está seguro de que desea eliminar empleado <p>${empleado.nombre}>
//                                     </p>
//                                 </h6>
//                                 <p class="text-muted">
//                                     Esta acción no se puede deshacer.
//                                 </p>
//                             </div>
//                         </div>

//                         <!-- Footer -->
//                         <div class="modal-footer">
//                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
//                                 Cancelar
//                             </button>
//                             <button type="button" class="btn btn-danger btnConfirmarEliminar" data-id="${empleado.personaId}">
//                                 <i class="bi bi-trash me-2"></i>Eliminar
//                             </button>
//                         </div>
//                     </div>
//                 </div>


//   `
//   //renderizados de constante ver detalles 
//   const verDetalle = /*html*/`
//   <div class="modal fade" id="verDetalle__${empleado.personaId}" tabindex="-1" aria-hidden="true">
//     <div class="modal-dialog modal-xl">
//       <div class="modal-content">

//         <!-- Header con gradiente Bootstrap -->
//         <div class="modal-header bg-primary text-white position-relative">
//           <div class="container-fluid">
//             <div class="row align-items-center">
//               <div class="col-auto">
//                 <img src="${empleado.foto}" alt="${empleado.nombre}"
//                   class="rounded-circle border border-3 border-white"
//                   style="width: 80px; height: 80px; object-fit: cover;">
//               </div>
//               <div class="col">
//                 <h3 class="modal-title mb-1 fw-bold">
//                   ${empleado.nombre} ${empleado.apellido}
//                 </h3>
//                 <span class="badge bg-light text-primary fs-6">
//                   ${usuario.rol.nombreRol}
//                 </span>
//               </div>
//             </div>
//           </div>
//           <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
//         </div>

//         <!-- Body del Modal -->
//         <div class="modal-body p-4">

//           <!-- Información Personal -->
//           <div class="mb-4">
//             <h5 class="text-primary mb-3 border-bottom border-primary pb-2">
//               <i class="bi bi-person-fill me-2"></i>Información Personal
//             </h5>
//             <div class="row g-3">
//               <div class="col-md-6">
//                 <div class="card border-0 bg-light h-100">
//                   <div class="card-body p-3">
//                     <div class="d-flex align-items-center mb-2">
//                       <i class="bi bi-person text-primary me-2 fs-5"></i>
//                       <small class="text-muted fw-semibold">NOMBRE COMPLETO</small>
//                     </div>
//                     <h6 class="mb-0">${empleado.nombre} ${empleado.apellido}</h6>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-md-6">
//                 <div class="card border-0 bg-light h-100">
//                   <div class="card-body p-3">
//                     <div class="d-flex align-items-center mb-2">
//                       <i class="bi bi-calendar-heart text-primary me-2 fs-5"></i>
//                       <small class="text-muted fw-semibold">FECHA NACIMIENTO</small>
//                     </div>
//                     <h6 class="mb-0">${empleado.fechaNacimiento}</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <!-- Información de Contacto -->
//           <div class="mb-4">
//             <h5 class="text-success mb-3 border-bottom border-success pb-2">
//               <i class="bi bi-telephone-fill me-2"></i>Información de Contacto
//             </h5>
//             <div class="row g-3">
//               <div class="col-md-6">
//                 <div class="card border-0 bg-light h-100">
//                   <div class="card-body p-3">
//                     <div class="d-flex align-items-center mb-2">
//                       <i class="bi bi-phone text-success me-2 fs-5"></i>
//                       <small class="text-muted fw-semibold">TELÉFONO</small>
//                     </div>
//                     <h6 class="mb-0">${empleado.telefono}</h6>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-md-6">
//                 <div class="card border-0 bg-light h-100">
//                   <div class="card-body p-3">
//                     <div class="d-flex align-items-center mb-2">
//                       <i class="bi bi-envelope text-success me-2 fs-5"></i>
//                       <small class="text-muted fw-semibold">EMAIL</small>
//                     </div>
//                     <h6 class="mb-0">${empleado.email}</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <!-- Información Laboral -->
//           <div class="mb-4">
//             <h5 class="text-info mb-3 border-bottom border-info pb-2">
//               <i class="bi bi-briefcase-fill me-2"></i>Información Laboral
//             </h5>
//             <div class="row g-3">
//               <div class="col-md-4">
//                 <div class="card border-0 bg-light h-100">
//                   <div class="card-body p-3">
//                     <div class="d-flex align-items-center mb-2">
//                       <i class="bi bi-award text-info me-2 fs-5"></i>
//                       <small class="text-muted fw-semibold">ROL</small>
//                     </div>
//                     <span class="badge bg-light text-primary fs-6">${usuario.rol.nombreRol}</span>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-md-4">
//                 <div class="card border-0 bg-light h-100">
//                   <div class="card-body p-3">
//                     <div class="d-flex align-items-center mb-2">
//                       <i class="bi bi-star text-info me-2 fs-5"></i>
//                       <small class="text-muted fw-semibold">ESPECIALIDAD</small>
//                     </div>
//                     <h6 class="mb-0">${empleado.especialidad}</h6>
//                   </div>
//                 </div>
//               </div>
//               <div class="col-md-4">
//                 <div class="card border-0 bg-light h-100">
//                   <div class="card-body p-3">
//                     <div class="d-flex align-items-center mb-2">
//                       <i class="bi bi-file-text text-info me-2 fs-5"></i>
//                       <small class="text-muted fw-semibold">TIPO CONTRATO</small>
//                     </div>
//                     <h6 class="mb-0">${empleado.tipoContrato}</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <!-- Fechas Importantes -->
//           <div class="mb-4">
//             <h5 class="text-warning mb-3 border-bottom border-warning pb-2">
//               <i class="bi bi-calendar-check me-2"></i>Fechas Importantes
//             </h5>
//             <div class="row g-3">
//               <div class="col-md-6">
//                 <div class="card border-0 bg-light h-100">
//                   <div class="card-body p-3">
//                     <div class="d-flex align-items-center mb-2">
//                       <i class="bi bi-calendar-plus text-warning me-2 fs-5"></i>
//                       <small class="text-muted fw-semibold">FECHA INGRESO</small>
//                     </div>
//                     <h6 class="mb-0">${empleado.fechaIngreso}</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <!-- Información Salarial -->
//           <div class="mb-4">
//             <h5 class="text-danger mb-3 border-bottom border-danger pb-2">
//               <i class="bi bi-cash-stack me-2"></i>Información Salarial
//             </h5>
//             <div class="row g-3">
//               <div class="col-md-12">
//                 <div class="card border-0 bg-light">
//                   <div class="card-body p-3">
//                     <div class="d-flex align-items-center justify-content-between">
//                       <div class="d-flex align-items-center">
//                         <i class="bi bi-currency-dollar text-danger me-2 fs-5"></i>
//                         <small class="text-muted fw-semibold">SALARIO MENSUAL</small>
//                       </div>
//                       <h4 class="mb-0 text-danger fw-bold">
//                         S/. ${empleado.salario}
//                       </h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div> <!-- modal-body -->

//       </div>
//     </div>
//   </div>
// `;
//   //renderizado de editar
//   const editar = /*html*/ `
// <div class="modal fade" id="editar__${empleado.personaId}" tabindex="-1" aria-hidden="true">
//   <div class="modal-dialog modal-dialog-centered modal-lg" id="modal-hijo">
//     <div class="modal-content rounded-4">
//       <div class="modal-header">
//         <h5 class="modal-title text-center w-100">Actualizar Empleado</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close"></button>
//       </div>
//       <div class="modal-body">
//         <!-- formulario del modal -->
//         <form id="formEmpleado-${empleado.personaId}" class="needs-validation forEmpleadoEditar" novalidate method="post">

//           <!-- Sección Datos Personales -->
//           <div class="form-section mb-4">
//             <h6 class="section-title text-primary border-bottom pb-2 mb-3">Datos Personales</h6>
//             <div class="row g-3">

//               <!-- dni -->
//               <div class="col-md-6">
//                 <label for="dni-${empleado.personaId}" class="form-label">DNI *</label>
//                 <input type="text" id="dni-${empleado.personaId}" class="form-control" name="dni"
//                        pattern="[0-9]{8}" maxlength="8" value="${empleado.dni}" required />
//               </div>

//               <!-- foto -->
//               <div class="col-md-6">
//                 <label for="file-${empleado.personaId}" class="form-label">Foto del empleado</label>
//                 <input type="file" id="file-${empleado.personaId}" class="form-control" name="file"
//                        accept="image/jpeg,image/jpg,image/png" value="${empleado.foto}" required>
//               <!-- nombre -->
//               <div class="col-md-6">
//                 <label for="nombre-${empleado.personaId}" class="form-label">Nombre *</label>
//                 <input type="text" id="nombre-${empleado.personaId}" name="nombre" class="form-control"
//                        pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]+" value="${empleado.nombre}" required />
//               </div>

//               <!-- apellido -->
//               <div class="col-md-6">
//                 <label for="apellido-${empleado.personaId}" class="form-label">Apellido *</label>
//                 <input type="text" id="apellido-${empleado.personaId}" name="apellido" class="form-control"
//                        pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\\s]+" value="${empleado.apellido}" required />
//               </div>

//               <!-- telefono -->
//               <div class="col-md-4">
//                 <label for="telefono-${empleado.personaId}" class="form-label">Teléfono</label>
//                 <input type="tel" id="telefono-${empleado.personaId}" class="form-control" name="telefono"
//                        pattern="9[0-9]{8}" placeholder="9XXXXXXXX"
//                        value="${empleado.telefono}" required />
//               </div>

//               <!-- genero -->
//               <div class="col-md-4">
//                 <label for="genero-${empleado.personaId}" class="form-label">Género</label>
//                 <select id="genero-${empleado.personaId}" class="form-select" name="genero" required>
//                   <option value="">Seleccionar...</option>
//                   <option value="Masculino" ${empleado.genero === "Masculino" ? "selected" : ""}>Masculino</option>
//                   <option value="Femenino" ${empleado.genero === "Femenino" ? "selected" : ""}>Femenino</option>
//                 </select>
//               </div>

//               <!-- email -->
//               <div class="col-md-4">
//                 <label for="email-${empleado.personaId}" class="form-label">Correo electrónico *</label>
//                 <input type="email" id="email-${empleado.personaId}" class="form-control" name="email"
//                        pattern="[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}"
//                        value="${empleado.email}" required />
//               </div>

//               <!-- fecha nacimiento -->
//               <div class="col-md-6">
//                 <label for="fechaNacimiento-${empleado.personaId}" class="form-label">Fecha de nacimiento</label>
//                 <input type="date" id="fechaNacimiento-${empleado.personaId}" class="form-control"
//                        name="fechaNacimiento" value="${empleado.fechaNacimiento}" required />
//               </div>

//               <!-- fecha ingreso -->
//               <div class="col-md-6">
//                 <label for="fechaIngreso-${empleado.personaId}" class="form-label">Fecha de ingreso</label>
//                 <input type="date" id="fechaIngreso-${empleado.personaId}" class="form-control"
//                        name="fechaIngreso" value="${empleado.fechaIngreso}" required />
//               </div>
//             </div>
//           </div>

//           <!-- Sección Datos Laborales -->
//           <div class="form-section mb-4">
//             <h6 class="section-title text-primary border-bottom pb-2 mb-3">Datos Laborales</h6>
//             <div class="row g-3">
//               <!-- salario -->
//               <div class="col-md-4">
//                 <label for="salario-${empleado.personaId}" class="form-label">Salario *</label>
//                 <input type="number" id="salario-${empleado.personaId}" class="form-control" name="salario"
//                        step="1" min="0" value="${empleado.salario}" required />
//               </div>

//               <!-- tipo contrato -->
//               <div class="col-md-4">
//                 <label for="tipoContrato-${empleado.personaId}" class="form-label">Tipo de contrato</label>
//                 <select id="tipoContrato-${empleado.personaId}" class="form-select" name="tipoContrato" required>
//                   <option value="">Seleccione...</option>
//                   <option value="Anual" ${empleado.tipoContrato === "Anual" ? "selected" : ""}>Anual</option>
//                   <option value="Indefinido" ${empleado.tipoContrato === "Indefinido" ? "selected" : ""}>Indefinido</option>
//                 </select>
//               </div>

//               <!-- especialidad -->
//               <div class="col-md-4">
//                 <label for="especialidad-${empleado.personaId}" class="form-label">Especialidad</label>
//                 <input type="text" id="especialidad-${empleado.personaId}" class="form-control"
//                        name="especialidad" value="${empleado.especialidad}" required />
//               </div>
//             </div>
//           </div>

//           <!-- Usuario -->
//           <div class="row g-3">
//             <div class="col-md-6">
//               <label for="usernameDisplay-${empleado.personaId}" class="form-label">Nombre de Usuario</label>
//               <input type="text" class="form-control" value="${empleado.dni}"
//                      id="usernameDisplay-${empleado.personaId}" readonly
//                      placeholder="Se generará con el DNI" style="background-color: #f8f9fa;">
//               <div class="form-text">Este será el nombre para iniciar sesión (basado en el DNI)</div>
//             </div>


//           </div>
//           <div class="col-md-6">
//                  <label for="rol_id-${empleado.personaId}" class="form-label">Rol *</label>
//               <select name="rolId" id="rol_id-${empleado.personaId}" class="form-select crearRol" required>
//                 <option value="">Seleccione un rol...</option>
//                 ${roles
//       .map(rol => `<option value="${rol.rolId}" ${rol.rolId === usuario.rol.rolId ? "selected" : ""}>
//                                 ${rol.nombreRol}
//                                </option>`)
//       .join("")}
//               </select>
//             </div>

//           <div class="modal-footer">
//             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
//             <button type="submit" class="btn btn-primary btnActualizarEmpleado" data-id="${empleado.personaId}">Actualizar Empleado</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>`;

//   ;
//   //insertar las cartas
//   const cardExistente = document.querySelector(`#empleado-card-${empleado.personaId}`);
//   if (cardExistente) {
//     cardExistente.outerHTML = card;
//   } else {
//     cajaDeCartas.insertAdjacentHTML("beforeend", card);
//   }
//   if (!document.querySelector(`#editar__${empleado.personaId}`)) {
//     document.body.insertAdjacentHTML("beforeend", editar);
//   }
//   const detalleExistente = document.querySelector(`#verDetalle__${empleado.personaId}`);
//   if (detalleExistente) {
//     // Si ya existe el modal, lo reemplazamos
//     detalleExistente.outerHTML = verDetalle;
//   } else {
//     // Si no existe, lo agregamos al body
//     document.body.insertAdjacentHTML("beforeend", verDetalle);
//   }
//   if (!document.querySelector(`#eliminar__${empleado.personaId}`)) {
//     document.body.insertAdjacentHTML("beforeend", modalEliminar);
//   }

// }



import { empleadoContainerCard } from "./dom.js"
import empleadoCard from "./components/empleadoCard.js"

export function renderEmpleadoCard(empleado, usuario) {
  empleadoContainerCard.insertAdjacentHTML('afterbegin', empleadoCard(empleado, usuario))
}

export function renderEmpleadoActualizar(empleado, usuario) {
  const empleadoCards = empleadoContainerCard.querySelector(

    `div[data-id="${empleado.personaId}"]`
  )
  if (empleadoCards) empleadoCards.outerHTML = empleadoCard(empleado, usuario);
}

export function rendeEmpleadoEliminar(id) {
  const card = empleadoContainerCard.querySelector('div[data-id="' + id + '"]')
  if (card) card.remove();
}