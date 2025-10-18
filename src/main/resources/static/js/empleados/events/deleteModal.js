import { empleadoModalEliminar, empleadoBtnEliminar } from '../dom.js'

import { empledoList } from '../store.js'

import Service from '../../service/index.js'

import { showToast, TOAST_TYPES } from '../../bootstrap/Toast.js'

import { rendeEmpleadoEliminar } from '../render.js'

const service = new Service('empleados');
const bsModal = bootstrap.Modal.getOrCreateInstance(empleadoModalEliminar);

async function eliminarEmpleado() {

  const id = this.dataset.id;
  try {
    await service.delete(id)
    rendeEmpleadoEliminar(id)
    delete empledoList[id]
    bsModal.hide();
    showToast('Empleado eliminado ', TOAST_TYPES.SUCCESS)
  } catch (error) {
    showToast('Error al eliminar empleado', TOAST_TYPES.ERROR)

  }
}

export default function eliminarEmpleadoModal() {

  empleadoModalEliminar.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id
    empleadoBtnEliminar.dataset.id = id
  })
  empleadoBtnEliminar.addEventListener('click', eliminarEmpleado)
}