import {
  empleadoFormImagenInput,
  empleadoFormulario,
  empleadoFormularioModal,
  empleadoFormularioSubmit,
  tituloModal, empleadoFormImagenPreview
} from '../dom.js'

import FORM_ACTIONS from '../../constants/formActions.js'

import Service from '../../service/index.js'

import StorageService from '../../service/storage.js'
import { showToast, TOAST_TYPES } from '../../bootstrap/toast.js'

import { empledoList, usuarioList } from '../store.js'
import { PERSONA_TYPE } from '../../constants/personaType.js'
import { renderEmpleadoCard, renderEmpleadoActualizar } from '../render.js'
const empleadoServicio = new Service('empleados');
const usuarioServicio = new Service('usuarios');
const storageService = new StorageService('empleados');
const bsModal = bootstrap.Modal.getOrCreateInstance(empleadoFormularioModal);
//imagen del formulario
const defaultFormImagen = '/img/form/image-preview.png';

const tipo = PERSONA_TYPE.EMPLEADO

async function handleFormSubmit(e) {
  if (!this.checkValidity()) return

  //empleado
  const dni = this.dni.value.trim();
  const nombre = this.nombre.value.trim();
  const apellido = this.apellido.value.trim();
  const telefono = this.telefono.value.trim();
  const genero = this.genero.value;
  const email = this.email.value.trim();
  const fechaNacimiento = this.fechaNacimiento.value;
  const fechaIngreso = this.fechaIngreso.value;
  const salario = parseFloat(this.salario.value);
  const tipoContrato = this.tipoContrato.value;
  const especialidad = this.especialidad.value.trim();
  let file = this.file.files[0]
  let imagen = empledoList[this.dataset.id]?.imagen || null
  //usuario
  const clave = this.contraseña.value.trim();
  const rol = this.rol.value;
  try {
    if (file) imagen = await storageService.upload(file)

    const empleado = {
      tipo,
      dni,
      nombre,
      apellido,
      telefono,
      genero,
      email,
      fechaNacimiento,
      fechaIngreso,
      salario,
      tipoContrato,
      especialidad,
      imagen
    }

    if (this.dataset.type === FORM_ACTIONS.CREATE) {
      const data = await empleadoServicio.save(empleado);
      console.log(clave)
      console.log((rol))
      const usuario = {
        clave,
        rol: {
          rolId: parseInt(rol)
        },
        persona: {
          tipo,
          personaId: data.personaId,
        }
      }
      const dataUsuario = await usuarioServicio.save(usuario);

      console.log(data)
      console.log(usuario)
      console.log(dataUsuario)

      renderEmpleadoCard(data, dataUsuario)
      empledoList[data.personaId] = data;
      usuarioList[dataUsuario.persona.personaId] = dataUsuario;
      showToast('Empleado creado con exito', TOAST_TYPES.SUCCESS)
    } else {
      if (this.dataset.type === FORM_ACTIONS.UPDATE) {
        const id = this.dataset.id;
        const data = await empleadoServicio.update(empleado, id);
        renderEmpleadoActualizar(data);
        empledoList[data.personaId] = data;
        showToast('Empleado actualizada con exito!', TOAST_TYPES.SUCCESS)
      }
    }
    bsModal.hide();
  } catch (error) {
    showToast('Error', TOAST_TYPES.ERROR)
    console.log(error);

  }

}

function rellenarEmpleado(empleado, usuario) {
  empleadoFormulario.dni.value = empleado.dni;
  empleadoFormulario.nombre.value = empleado.nombre;
  empleadoFormulario.apellido.value = empleado.apellido;
  empleadoFormulario.telefono.value = empleado.telefono;
  empleadoFormulario.email.value = empleado.email;
  empleadoFormulario.genero.value = empleado.genero
  empleadoFormulario.fechaIngreso.value = empleado.fechaIngreso
  empleadoFormulario.fechaNacimiento.value = empleado.fechaNacimiento
  empleadoFormulario.salario.value = empleado.salario;
  empleadoFormulario.especialidad.value = empleado.especialidad;
  empleadoFormulario.tipoContrato.value = empleado.tipoContrato;
  empleadoFormImagenPreview.src = empleado.imagen
  empleadoFormulario.usuarioDni.value = empleado.dni;
  empleadoFormulario.contraseña.value = usuario.clave
  //usuario
  empleadoFormulario.rol.value = usuario.rol.rolId
}
function handleImageChange(e) {
  const imageFile = this.files[0]
  const imageURL = URL.createObjectURL(imageFile)
  empleadoFormImagenPreview.src = imageURL
}
export default function registrarEmpleado() {
  empleadoFormulario.addEventListener('submit', handleFormSubmit)

  empleadoFormularioModal.addEventListener('show.bs.modal', (e) => {
    const button = e.relatedTarget
    const id = button.dataset.id
    if (id) {
      empleadoFormulario.dataset.type = FORM_ACTIONS.UPDATE
      empleadoFormulario.dataset.id = id
      tituloModal.textContent = 'Actualizar empleado'
      empleadoFormularioSubmit.textContent = 'Guardar empleado'
      rellenarEmpleado(empledoList[id], usuarioList[id])
    } else {
      empleadoFormulario.dataset.type = FORM_ACTIONS.CREATE
      tituloModal.textContent = 'Nuevo empleado'
      empleadoFormularioSubmit.textContent = 'Crear empleado'
      empleadoFormImagenPreview.src = defaultFormImagen
    }
  })
  empleadoFormImagenInput.addEventListener('change', handleImageChange)
}