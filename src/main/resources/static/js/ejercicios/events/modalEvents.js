import { formulario } from "../dom.js";
import Service from "../../service/index.js"
import { renderEjercicioCard } from "../render.js";
import { showToast } from "../../utils.js";

const servicioEjercicio = new Service("ejercicios");


export const crearEjercicio = () => {

  formulario.addEventListener('submit', async function (e) {

    e.preventDefault();
    e.stopPropagation();
    // console.log(this)
    // validacion de Bootstrap
    if (!this.checkValidity()) {
      this.classList.add("was-validated");
      return;
    }
    //a la instancia le paso el formulario
    const formData = new FormData(this);
    // obj para enviar al backedn con los valores del formulario
    const objEjercicioData = {
      nombre: formData.get("nombre"),//name del input
      descripcion: formData.get("descripcion"),
      grupoMuscular: formData.get("grupoMuscular"),
      equipo: formData.get("equipo"),
    };


    try {
      // enviar el obj al backend mediante el servicio
      const ejercicioCreado = await servicioEjercicio.save(objEjercicioData);

      // pasar el obj a renderizar en template
      renderEjercicioCard(ejercicioCreado);

      // Limpiar el formulario y ocultar modal si exiiste
      formulario.reset();
      formulario.classList.remove("was-validated");
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("nuevoEjercicio")
      );
      if (modal) modal.hide();

      showToast(`Se ha creado el ejercicio ${objEjercicioData.nombre}`, 1);

    } catch (error) {
      console.error("Error al crear ejercicio:", error);
    }



  })
}


export const eliminarEjercicio = () => {
  // Escuchamos todos los clicks en botones de eliminar
  document.addEventListener("click", async (e) => {
    // console.log(e.target);
    if (e.target.closest(".btnEliminarEjercicio")) {
      const id = e.target.closest(".btnEliminarEjercicio").dataset.id;

      try {
        const response = await servicioEjercicio.delete(id);

        if (response.ok) {
          const item = document.querySelector(`#elementEjercicio_${id}`);
          if (item) item.remove();

          // Cerrar modal
          const modal = bootstrap.Modal.getInstance(
            document.getElementById(`eliminarEjercicio__${id}`)
          );
          if (modal) modal.hide();

          document.querySelector("#editarEjercicio__" + id).remove();
          document.querySelector("#eliminarEjercicio__" + id).remove();

          showToast(`Ejercicio ${id} eliminado`, 2);

        } else {
          console.error("Error al eliminar la clase", response);
        }

      } catch (error) {
        console.error("Error al eliminar ejercicio:", error);
        showToast("No se pudo eliminar el ejercicio", 0);
      }
    }
  });
};


export const actualizarEjercicio = () => {

  document.body.addEventListener("click", async function (e) {
    const btn = e.target.closest(".actualizarEjercicio");
    // console.log(btn);
    if (btn) {
      e.preventDefault();
      const id = btn.dataset.id;//data-id
      const formValid = document.querySelector('#editarEjercicio__' + id + " #socioForm")

      const formData = new FormData(formValid)

      const obj = {
        nombre: formData.get("nombre"),
        descripcion: formData.get("descripcion"),
        grupoMuscular: formData.get("grupoMuscular"),
        equipo: formData.get("equipo")
      };

      try {
        const ejercicioActualizado = await servicioEjercicio.update(obj, id);

        const edit = document.getElementById("elementEjercicio_" + id);
        if (edit) {
          edit.remove();
        }

        renderEjercicioCard(ejercicioActualizado);

        formValid.reset();
        formValid.classList.remove("was-validated");
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("editarEjercicio__" + id)
        );
        if (modal) modal.hide();

        document.querySelector("#editarEjercicio__" + id).remove();
        document.querySelector("#eliminarEjercicio__" + id).remove();

        showToast(`Se ha editado el ejercicio "${obj.nombre}"`, 1);

      } catch (error) {
        console.error("Error al actualizar:", error);
      }
    }
  });

}