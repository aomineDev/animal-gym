export const partnerContainer = document.getElementById('partner-container')

export const partnerForm = document.getElementById('partnerForm')

export const partnerFormModal = document.getElementById('partnerFormModal')

export const partnerFormModalTitle =
  partnerFormModal.querySelector('.modal-title')

export const partnerFormSubmit = partnerFormModal.querySelector(
  'button[type="submit"]'
)

export const partnerFormImage =
  partnerFormModal.querySelector('#partnerForm-image')

export const partnerFormImagePreview = partnerFormModal.querySelector(
  '#partnerForm-imagePreview'
)

export const partnerDeleteModal = document.getElementById('partnerDeleteModal')

export const deletePartnerName =
  partnerDeleteModal.querySelector('#deletePartnerName')

export const deletePartnerBtn =
  partnerDeleteModal.querySelector('#deletePartnerBtn')

export const partnerProfileModal = document.querySelector(
  '#partnerProfileModal'
)

const fieldIds = [
  'img',
  'nombre',
  'peso',
  'altura',
  'dni',
  'fechaInscripcion',
  'membresia_nombre',
  'telefono',
  'email',
  'estado',
]

export const partnerProfileFields = Object.fromEntries(
  fieldIds.map((id) => [id, partnerProfileModal.querySelector(`#${id}`)])
)

export const filterByMembership = document.querySelector('#filterMembership')

export const filterEstado = document.getElementById('filterEstado')
export const buscarSocio = document.getElementById('buscarSocio')

export const partnerAccordionContainer = document.querySelector(
  '#partnerAccordionContainer'
)
