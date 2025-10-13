import {
  gestionarInscritosModal,
  tableTitle,
  agregarSocioForm,
  agregarSocioBtn,
  sociosInscritosTable,
} from '../dom.js'
import { renderSociosInscritos, renderDeleteRow } from '../render.js'
import { claseList } from '../store.js'
import Service from '../../service/index.js'
import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'

const service = new Service('clases')
const serviceSocios = new Service('socios')

function renderTableInscritos(e) {
  const button = e.relatedTarget
  const id = button.dataset.id
  agregarSocioBtn.dataset.id = id

  console.log(id)
  tableTitle.textContent = claseList[id].nombre
  renderSociosInscritos(claseList[id])
}

async function handleFormSubmit(e) {
  const dni = this.dni.value.trim()
  const id = agregarSocioBtn.dataset.id

  //Lista de socios
  const socios = await serviceSocios.findAll()

  //Validamos su existencia en BD ** PRIMERA VALIDACION
  let socioEncontrado = socios.find((socio) => socio.dni === dni)
  if (!socioEncontrado) {
    showToast('No existe el socio solicitado', TOAST_TYPES.WARNING)
    return
  }

  //Validamos que no este en la tabla ** SEGUNDA VALIDACION
  let clase = claseList[id] //Obtengo la clase que existe
  console.log(clase)

  let socioYaInscrito = clase.reservas.some(
    (reserva) => reserva.socio.dni === socioEncontrado.dni
  )

  if (socioYaInscrito) {
    showToast('Este socio ya esta inscrito', TOAST_TYPES.WARNING)
    return
  }

  //Validamos la capacidad de la clase ** TERCERA VALIDACION
  if (clase.capacidad === clase.reservas.length) {
    showToast(
      'Se llego al limite de capacidad de la clase',
      TOAST_TYPES.WARNING
    )
    return
  }

  //construyo el objeto
  const reservaClase = {
    fecha: new Date().toISOString().split('T')[0],
    socio: socioEncontrado,
  }

  try {
    const res = await fetch(`/api/clases/${id}/reservas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservaClase),
    })

    const claseActualizada = await res.json()
    claseList[id] = claseActualizada
    renderSociosInscritos(claseActualizada)

    showToast('Socio inscrito correctamente!', TOAST_TYPES.SUCCESS)
  } catch (error) {
    showToast('Error al inscribir socio', TOAST_TYPES.ERROR)
    console.error('Error:', error)
  }
}

async function handleDeleteSocio(e) {
  if (e.target.classList.contains('eliminarSocioBtn')) {
    const claseId = e.target.dataset.id
    const reservaId = e.target.dataset.reservaId

    console.log('la clase ', claseId, ' y su reserva', reservaId)

    try {
      const res = await fetch(`/api/clases/${claseId}/reservas/${reservaId}`, {
        method: 'DELETE',
      })
      const claseActualizada = await res.json()

      claseList[claseId] = claseActualizada
      renderDeleteRow(reservaId)

      showToast(
        'Socio eliminado correctamente de la clase',
        TOAST_TYPES.SUCCESS
      )
    } catch (error) {
      console.error('Error:', error)
      showToast('Error al eliminar socio de la clase', TOAST_TYPES.ERROR)
    }
  }
}

export function registerInscritosModalEvents() {
  gestionarInscritosModal.addEventListener(
    'show.bs.modal',
    renderTableInscritos
  )

  agregarSocioForm.addEventListener('submit', handleFormSubmit)
  sociosInscritosTable.addEventListener('click', handleDeleteSocio)
}
