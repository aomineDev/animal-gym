export const rutinaSocioDetailModal = document.getElementById(
  'rutinaSocioDetailModal'
)

export const rutinaSocioTable = document.getElementById('rutinaSocioTable-body')

export const rutinaSocioDetailModalTitle =
  rutinaSocioDetailModal.querySelector('.modal-title')

export const rutinaTable =
  rutinaSocioDetailModal.querySelector('#rutinaTable-body')

// Modal rutina
export const rutinaFormModal = document.getElementById('rutinaFormModal')

export const rutinaForm = document.getElementById('rutinaForm')

export const rutinaFormModalTitle =
  rutinaFormModal.querySelector('.modal-title')

export const rutinaFormSubmit = rutinaFormModal.querySelector(
  'button[type="submit"]'
)

export const rutinaFormFechaInicio = rutinaForm.querySelector(
  '#rutinaForm-fechaInicio'
)

export const rutinaFormFechaFin = rutinaForm.querySelector(
  '#rutinaForm-fechaFin'
)

//Modal eliminar
export const deleteModal = document.getElementById('deleteModal')

export const deleteModalTitle = deleteModal.querySelector('#deleteModal-title')

export const deleteBtn = deleteModal.querySelector('#deleteBtn')

//Detalle rutina
export const detalleRutinaContainer = rutinaSocioDetailModal.querySelector(
  '#detalleRutinaContainer'
)

export const detalleRutinaFormModal = document.getElementById(
  'detalleRutinaFormModal'
)

export const detalleRutinaForm =
  detalleRutinaFormModal.querySelector('#detalleRutinaForm')

//Filtros
export const buscarInput = document.getElementById('buscarInput')

export const entrenadorInput = document.getElementById('entrenadorInput')

export const estadoInput = document.getElementById('estadoInput')

export const resetFiltrosBtn = document.getElementById('resetFiltrosBtn')
