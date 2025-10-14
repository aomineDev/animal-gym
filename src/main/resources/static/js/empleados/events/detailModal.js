import {
  apellidoDetalle,
  contratoDetalle,
  emailDetalle,
  rolDetalle,
  imagenDetalle,
  nombreDetalle,
  salarioDetalle,
  telefonoDetalle,
  especialidadDetalle,
  fechaIngresoDetalle,
  fechaNacimientoDetalle,
  nombreCompletoDetalle,
  verDetalle
} from '../dom.js'

import {
  empledoList, usuarioList
} from '../store.js'

export default function empleadoDetalle() {
  verDetalle.addEventListener('show.bs.modal', (e) => {
    const btn = e.relatedTarget
    const id = btn.dataset.id
    console.log(id);

    const empleado = empledoList[id];
    const usuario = usuarioList[id];
    console.log(usuario)

    nombreDetalle.textContent = empleado.nombre;
    apellidoDetalle.textContent = empleado.apellido;
    imagenDetalle.src = empleado.imagen
    imagenDetalle.alt = empleado.imagen
    nombreCompletoDetalle.textContent = empleado.nombre + ' ' + empleado.apellido
    fechaIngresoDetalle.textContent = empleado.fechaIngreso
    fechaNacimientoDetalle.textContent = empleado.fechaNacimiento
    emailDetalle.textContent = empleado.email
    contratoDetalle.textContent = empleado.tipoContrato
    especialidadDetalle.textContent = empleado.especialidad
    salarioDetalle.textContent = empleado.salario
    telefonoDetalle.textContent = empleado.telefono
    rolDetalle.textContent = usuario.rol.nombreRol


  })
}