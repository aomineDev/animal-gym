import { formulario } from "../dom.js";
import Service from "../../service/index.js"
import { renderEmpleadoCard } from "../render.js";
import { showToast } from "../../toast.js"
// metodo para obtener todos los roles de mi backends importante ya que necesitamos mostrar los select con sus direntes opciones de rol
let roles = [];
async function fetchRoles() {
    try {
        const response = await fetch("/api/roles");
        if (!response.ok) throw new Error("error al traer roles");
        roles = await response.json();

    } catch (error) {
        console.log("error")
    }
}
// crear empleado
export const crearEmpleado = () => {
    fetchRoles();
    //enviar campos del formulario 
    formulario.addEventListener('submit', async function (event) {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.classList.add("was-validated");
            showToast("Ingrese los campos requeridos", 2)
            return;
        }
        //una ves validado todos los campos del formulario recuperamos el form

        const form = event.target; //almacenamos todo el formulario <form></fomr>
        const formData = new FormData(form); // obtiene todos los input del formulario con su name relacion clave ->valor: clave el input valor lo que llegara del fromtend

        console.log(form);
        console.log(formData)

        const file = form.file.files[0]; //obenetemos el file

        let urlImagen = await uploadFile(file); //convertimos este file a una imagen util para nuestro objeto 

        //campos de rol
        const rolSelect = document.getElementById('rol_id');

        //servicios empleado y usuario se mandaran juntos desde el mismo formulario a json diferentes
        const servicioEmpleado = new Service("empleados");
        const servicioUsuario = new Service("usuarios");

        //enviar datos al backemd

        let empleados = [];
        const empleadosList = new Service("empleados");
        empleados = await empleadosList.findAll();
        let dniBuscado = formData.get("dni").trim();
        let telefonoBuscado = formData.get("telefono").trim();
        let emailBuscado = formData.get("email").trim();
        let busquedaDni = empleados.find((emp) => emp.dni == dniBuscado);
        let busquedaEmail = empleados.find((emp) => emp.email == emailBuscado);
        let busquedaTelefono = empleados.find((emp) => emp.telefono == telefonoBuscado);
        if (busquedaDni) {
            showToast("Este dni ya esta registrado en nuestra base de datos", 2);
        } else {
            if (busquedaEmail) {
                showToast("Este email ya fue registrado en nuestra base de datos", 2);
            } else {
                if (busquedaTelefono) {
                    showToast("Este telefono ya fue registrado en nuestra base de datos", 2)
                } else {
                    try {
                        const empleadoData = {
                            //lo llena con clave valor el objeto
                            dni: formData.get("dni"),
                            nombre: formData.get("nombre"),
                            apellido: formData.get("apellido"),
                            telefono: formData.get("telefono"),
                            email: formData.get("telefono"),
                            genero: formData.get("genero"),
                            fechaNacimiento: formData.get("fechaNacimiento"),
                            fechaIngreso: formData.get("fechaIngreso"),
                            salario: formData.get("salario"),
                            tipoContrato: formData.get("tipoContrato"),
                            especialidad: formData.get("especialidad"),
                            foto: urlImagen
                        }

                        let empleadoCreado = await servicioEmpleado.save(empleadoData); // empleadCreado almacena el json que fue enviado por el save (empleadoData) 
                        //construccion objeto usuario
                        const usuarioData = {
                            contraseña: formData.get("contraseña"),
                            rol: {
                                rolId: formData.get("rol_id"),
                                nombreRol: rolSelect.options[rolSelect.selectedIndex].text
                            },
                            persona: {
                                personaId: empleadoCreado.personaId, //personaId almacenara el personaId que viene del json empleado creado con la finalidad de crear un nuevo solo referenciado
                                dni: formData.get("dni"),
                                nombre: formData.get("nombre"),
                                apellido: formData.get("apellido"),
                                telefono: formData.get("telefono"),
                                email: formData.get("email"),
                                genero: formData.get("genero"),
                                fechaNacimiento: formData.get("fechaNacimiento"),
                                fechaIngreso: formData.get("fechaIngreso")
                            }
                        }

                        //primero crear empleado y usar su personaId para unirlo al usuario.persona.personaId  

                        const usuarioCreado = await servicioUsuario.save(usuarioData); // usuarioCreado alamacena un  json que fue enviado pro el save (usuarioData)

                        //renderizar cartas

                        renderEmpleadoCard(empleadoCreado, usuarioCreado, roles);
                        showToast("Empleado creado exitosamente", 1);
                        const modal = bootstrap.Modal.getInstance(
                            document.getElementById("modalAñadirEmpleado")
                        );
                        modal.hide();

                        formulario.reset();
                        formulario.classList.remove("was-validated");

                    } catch (error) {
                        console.log("error", error);
                        showToast("Error al crear empleado", 3)
                    }
                }


            }
        }


    })
}

//Eliminar empleado
export const elminarEmpleado = () => {

    //escuchara todos los eventos de la vista util para elementos dinamicos
    document.addEventListener('click', async (event) => {

        //entra en el if cuando el elemento (event.target) que se hizo click tenga la clase 

        //si, dentro del elemento html (event.target) donde se hizo click esta una clase que es btnCOnfimrar ejecutar la siguiente logica 
        if (event.target.classList.contains("btnConfirmarEliminar")) {

            //recuperar dentro de el elemento html(event.target) el atributo que tiene el data-id que nos ayudara para obtener el id que
            //  es dinamico gracias al thymileaft
            const id = event.target.getAttribute("data-id")
            console.log(id);

            //servicioEmpleado y usuario se elminar juntos del json ya que estan unidos

            const servicioE = new Service("empleados");
            const servicioU = new Service("usuarios");

            try {
                const responseE = await servicioE.delete(id); //eliminar su empleado y usuario
                const responseU = await servicioU.delete(id);
                //A difernecia del save que devuelve un json delete devuelve una respuesta en 204

                // si la respuesta fue ok entonces ara la sigueinte logica del if
                if (responseU.ok && responseE.ok) {
                    console.log("Elimino correctamente el json empleado y usuario")

                    //buscar la primera carta (querySelector) que coincida con el id usar el queryselector es igual que usar el document.getElementyById
                    const card = document.querySelector(`#empleado-card-${id}`)
                    //si la carta existe hacer la siguiente logica
                    if (card) {
                        card.remove(); //una ves que se confico que la carta existe habra que eliminarla con el remove 
                    }
                    //obtener el modal y cerrarlo
                    const modal = event.target.closest(".modal");
                    const bootstrapModal = bootstrap.Modal.getInstance(modal);
                    bootstrapModal.hide();
                }
                showToast("Empleado eliminado correctamente", 1)
            } catch (error) {
                console.log("error")
            }

        }
    })
}
//Funcion para recuperar imagen en string
const uploadFile = async (file) => {
    //evaluar que la imagen exista 
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/empleados/upload", {
        method: "POST",
        body: formData,
    })
    //hacer una peticion al controlarEmpelado el controlador usara el file como parametro para almacenar ese file en la pc y esa direccion donde se
    //almaceno devolvera en string, ese string se recupera en text(); y ya tenemos el string que servira para la subida de fotos

    return await response.text();
};

//Funcion actualizar empleda
export const actualizarEmpleadoUsuario = () => {

    //obtener el array con los roles que estan en nuestro backends (arrays)
    fetchRoles();

    document.addEventListener('click', async (event) => {
        //despues de hacer la busqueda global buscar el elemtno html donde se hizo click y que tenga la clase btnActualizarEmpleado esta clase viene del form
        if (event.target.classList.contains("btnActualizarEmpleado")) {
            //segurida
            event.preventDefault();
            const modal = event.target.closest(".modal");

            const form = modal.querySelector(".forEmpleadoEditar")

            if (!form.checkValidity()) {
                form.classList.add("was-validated");
                showToast("No te olvides ingresar todos los campos", 2)

                return;
            }
            //capturar el data-id que tiene el btnActualizar del formulario que tambien tiene el thimyleaft y eso ya les da las id que se le asignaro cuando se agrego con el save
            const personaId = event.target.getAttribute("data-id")

            console.log(personaId);
            //va recuperar el modal que esta mas cerca al btn actualiar empleado en ese caso obteine el modalActualizar empleado

            //con la modal podemos accqueder al formulario editar empleado 
            //hacer que todo el formulario acepte clave valor

            const formData = new FormData(form);

            console.log("RolId del FormData:", formData.get("rolId"));
            //obtener el file igual procedimineto

            const file = form.file.files[0];
            let urlImagen = await uploadFile(file);

            // const rolSelect = document.getElementById('rol_id');
            const rolSelect = form.querySelector('select[name="rolId"]');

            const empleadoData = {
                personaId: null,
                dni: formData.get("dni"),
                nombre: formData.get("nombre"),
                apellido: formData.get("apellido"),
                telefono: formData.get("telefono"),
                email: formData.get("email"),
                genero: formData.get("genero"),
                fechaNacimiento: formData.get("fechaNacimiento"),
                fechaIngreso: formData.get("fechaIngreso"),
                salario: formData.get("salario"),
                tipoContrato: formData.get("tipoContrato"),
                especialidad: formData.get("especialidad"),
                foto: urlImagen //devuelto en string listo para ser enviado
                // cambiar campo porque devuelve un file y
                //  en el modelo pinta String
                // si le paso file revienta todoxd    foto: formData.get("file")
            }
            //nos quedamos con el id para no generar errores de duplicacion
            empleadoData.personaId = personaId; // en este caso el idPersona del objeto empleadoDATA tiene que ser igual al personaID que fue capturado del dom 
            // de esta manera cunado actualizemos el idPersona no generar otro sino usara el mismo personaId que le esta llegando

            //creacion del objeto usuarioDATa
            const usuarioData = {
                usuarioId: personaId,
                contraseña: formData.get("contraseña"),
                rol: {
                    rolId: formData.get("rolId"),
                    nombreRol: rolSelect.options[rolSelect.selectedIndex].text
                },
                persona: {
                    personaId: null,
                    dni: formData.get("dni"),
                    nombre: formData.get("nombre"),
                    apellido: formData.get("apellido"),
                    telefono: formData.get("telefono"),
                    email: formData.get("email"),
                    genero: formData.get("genero"),
                    fechaNacimiento: formData.get("fechaNacimiento"),
                    fechaIngreso: formData.get("fechaIngreso")
                }
            }
            usuarioData.persona.personaId = personaId; //con esto al momneto de actualizar se ara en el json por su usarioData sino crearia otro usuario

            //servicios
            const service = new Service("empleados");
            const servicioUsuario = new Service("usuarios")

            try {

                const dataEmpleado = await service.update(empleadoData, personaId); //almacena un json que le llega del update
                const dataUsuario = await servicioUsuario.update(usuarioData, personaId); //almacena un json que llega del update

                //funcionar los actualizar
                console.log(dataEmpleado)
                console.log(dataUsuario)
                //si la carta existe por que ahi es donde estad dando a editar abirar un if
                let cardd = document.querySelector(`#empleado-card-${personaId}`);
                const bootstrapModal = bootstrap.Modal.getInstance(modal);
                if (bootstrapModal) {
                    bootstrapModal.hide();
                }
                if (cardd) {
                    //hacer los cambios que le ayas hecho con los 3 principales cambios
                    renderEmpleadoCard(dataEmpleado, dataUsuario, roles);
                }
                showToast("Actualizado correctamente", 1);
            } catch (error) {
                console.log("error");
            }
        }

    })
}