import { formulario } from "../dom.js";
import Service from "../../service/index.js"
import { renderClaseCard } from "../render.js";
export const crearEmpleado = () => {
    formulario.addEventListener('submit', async function (event) {
        event.preventDefault();
        console.log("funciona formulario")

        // if (!formulario.checkValidity()) {
        //     formulario.classList.add("was-validated");
        //     return;
        // }
        //una ves validado todos los campos del formulario recuperamos el form

        const form = event.target;
        const formData = new FormData(form);
        console.log(form);
        console.log(formData)
        const file = form.file.files[0];
        // console.log(file) devuele un file esto
        //se tiene que pasar a tring para ello el
        //metood upload
        //image
        let urlImagen = await uploadFile(file);
        //nombre del rol
        const rolSelect = document.getElementById('rol_id');
        //servicios
        const servicioEmpleado = new Service("empleados");
        const servicioUsuario = new Service("usuario");
        //enviar datos al backemd
        //objetos
        try {
            const empleadoData = {
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
                foto: urlImagen //devuelto en string listo para ser enviado
                // cambiar campo porque devuelve un file y
                //  en el modelo pinta String
                // si le paso file revienta todoxd    foto: formData.get("file")
            }
            let empleadoCreado = await servicioEmpleado.save(empleadoData);
            const usuarioData = {
                contraseña: formData.get("contraseña"),
                rol: {
                    rolId: formData.get("rol_id"),
                    nombreRol: rolSelect.options[rolSelect.selectedIndex].text
                },
                persona: {
                    personaId: empleadoCreado.personaId,
                    dni: formData.get("dni"),
                    nombre: formData.get("nombre"),
                    apellido: formData.get("apellido"),
                    telefono: formData.get("telefono"),
                    email: formData.get("telefono"),
                    genero: formData.get("genero"),
                    fechaNacimiento: formData.get("fechaNacimiento"),
                    fechaIngreso: formData.get("fechaIngreso")
                }
            }
            const usuarioCreado = await servicioUsuario.save(usuarioData);
            //renderizar
            renderClaseCard(empleadoCreado, usuarioCreado);
        } catch (error) {
            console.log("error", error);
        }



    })
}
export const elminarEmpleado = () => {

}
//Funcion para recuperar imagen en string
const uploadFile = async (file) => {
    if (!file) return null;

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/empleados/upload", {
        method: "POST",
        body: formData,
    })
    //una ves se aya subido nos devuelve un string para pintarlo nosostros en 
    //nuestro objeto
    return await response.text();
};