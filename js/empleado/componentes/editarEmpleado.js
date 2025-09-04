export function editarEmpleado({ id, nombre, apellido, dni, fecha_ingreso, telefono, correo, fecha_nacimiento, rolNombre }) {
  return /*html*/ `
    <div class="col-12 mb-3">
              <input type="text" id="nombre" name="nombre" class="form-control" placeholder="Nombre" pattern="[A-Za-z]+"
                title="Solo letras minusculas" required value="${nombre}"/>
            </div>
            <div class="col-12 mb-3">
              <input type="text" id="apellido" name="apellido" class="form-control" placeholder="Apellido"
               pattern="[A-Za-z]+" required value="${apellido}" />
            </div>
            <div class="col-12 mb-3">
              <input type="text" id="dni" class="form-control" name="dni" placeholder="Dni" pattern="[0-9]{8}"
                required value="${dni}"/>
            </div>
            <div class="col-12 mb-3">
              <label for="">Fecha de registro</label>
              <input type="date" id="fechaRegistro" class="form-control" name="fecha_ingreso"
                placeholder="Fecha de registro" required value="${fecha_ingreso}"/>
            </div>
            <div class="col-12 mb-3">
              <input type="tel" id="telefono" class="form-control" name="telefono" placeholder="Numero de telefono"
                pattern="9[0-9]{8}" required value="${telefono}"/>
            </div>
            <div class="col-12 mb-3">
              <input type="email" id="correo" class="form-control" name="correo" placeholder="Correo"
                 required value="${correo}"/>
            </div>
            <div class="col-12 mb-3">
              <label for="">Fecha de nacimiento</label>
              <input type="date" id="fechaNacimiento" class="form-control" name="fecha_nacimiento"
                placeholder="Fecha de nacimiento" required value="${fecha_nacimiento}" />
            </div>
            <div class="col-12 mb-3">
              <select name="rol_id" class="form-select crearRol"  required>
                <option value="">Seleccion un rol..</option>
                <option value="${rolNombre}" selected>${rolNombre}</option>
              
              </select>
            </div>

            <div class="modal-footer">
              <!-- boton cerrar modal + boton guardar empleado  -->
              <button type="submit" class="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
              <button type="submit" class="btn btn-primary" data-id=${id}>
                Actualizar empleado
              </button>
            </div>
      
  `
}