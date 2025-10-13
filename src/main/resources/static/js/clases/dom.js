//Para crear y editar
export const claseContainer = document.getElementById('clase-container')

export const claseForm = document.getElementById('claseForm')

export const claseFormModal = document.getElementById('claseFormModal')

export const claseFormModalTitle = claseFormModal.querySelector('.modal-title')

export const claseFormSubmit = claseFormModal.querySelector(
  'button[type="submit"]'
)

export const claseFormDate = claseFormModal.querySelector('#claseForm-date')
export const claseFormHoraInicio = claseFormModal.querySelector(
  '#claseForm-horaInicio'
)
export const claseFormHoraFin =
  claseFormModal.querySelector('#claseForm-horaFin')
export const claseFormImage = claseFormModal.querySelector('#claseForm-image')

export const claseFormImagePreview = claseFormModal.querySelector(
  '#claseForm-imagePreview'
)

//Para eliminar
export const claseDeleteModal = document.getElementById('claseDeleteModal')

export const deleteClaseName =
  claseDeleteModal.querySelector('#deleteClaseName')

export const deleteClaseBtn = claseDeleteModal.querySelector('#deleteClaseBtn')

//Para detalles
export const claseDetailModal = document.getElementById('claseDetailModal')

export const claseDetailImagen = claseDetailModal.querySelector(
  '#claseDetail-imagen'
)

export const claseDetailNombre = claseDetailModal.querySelector(
  '#claseDetail-nombre'
)

export const claseDetailDescripcion = claseDetailModal.querySelector(
  '#claseDetail-descripcion'
)

export const claseDetailObjetivo = claseDetailModal.querySelector(
  '#claseDetail-objetivo'
)

export const claseDetailEntrenador = claseDetailModal.querySelector(
  '#claseDetail-entrenador'
)

export const claseDetailIntensidad = claseDetailModal.querySelector(
  '#claseDetail-intensidad'
)

export const claseDetailDuracion = claseDetailModal.querySelector(
  '#claseDetail-duracion'
)

export const claseDetailFecha =
  claseDetailModal.querySelector('#claseDetail-fecha')

export const claseDetailHoraInicio = claseDetailModal.querySelector(
  '#claseDetail-horaInicio'
)

export const claseDetailHoraFin = claseDetailModal.querySelector(
  '#claseDetail-horaFin'
)

export const claseDetailCapacidad = claseDetailModal.querySelector(
  '#claseDetail-capacidad'
)

export const claseDetailEstado = claseDetailModal.querySelector(
  '#claseDetail-estado'
)
