import { formCrearClase } from "../dom.js";
import Service from "../../service/index.js";
import { renderClaseCard } from "../render.js";

let usuarios = [];

async function fetchUsuarios() {
  try {
    const response = await fetch("/api/usuarios");
    if (!response.ok) throw new Error("Error al obtener usuarios");
    usuarios = await response.json();
    console.log("Usuarios cargados:", usuarios);
  } catch (error) {
    console.error(error);
  }
}

export const crearClaseEvents = () => {
  fetchUsuarios();
  formCrearClase.addEventListener("submit", async function (event) {
    event.preventDefault();

    if (!formCrearClase.checkValidity()) {
      formCrearClase.classList.add("was-validated");
      return;
    }

    const form = event.target;

    //Subir archivo primero
    const file = form.file.files[0];
    let imageUrl = await uploadFile(file);

    console.log(imageUrl);

    //Reconstruimos el objeto
    const clase = objetoConstruido(form, imageUrl);

    //Se llama la clase del service
    const service = new Service("clases");

    try {
      const data = await service.save(clase);

      console.log(data);

      //Para renderizar dinamicamente
      renderClaseCard(data, usuarios);

      //Para cerrar el modal
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("crearClase")
      );
      modal.hide();

      formCrearClase.reset();
      formCrearClase.classList.remove("was-validated");
    } catch (error) {
      console.error("Error:", error);
    }
  });
};

export const editarClaseEvents = () => {
  fetchUsuarios();
  document.body.addEventListener("click", async (event) => {
    if (!event.target.classList.contains("btnActualizarClase")) return;

    const modal = event.target.closest(".modal");
    const form = modal.querySelector(".editarClaseForm");
    if (!form) return;

    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    console.log("bien");

    //Recuperamos el Claseid del modal
    const idClase = form.getAttribute("data-id");
    console.log("el id es: ", idClase);

    //Subir archivo primero
    const file = form.file.files[0];
    let imageUrl = await uploadFile(file);

    //Reconstruimos el objeto
    const clase = objetoConstruido(form, imageUrl);
    clase.claseId = idClase;

    //Se llama la clase del service
    const service = new Service("clases");

    try {
      const data = await service.update(clase, idClase);

      console.log(data);

      let card = document.querySelector(`#clase-card-${idClase}`);

      //para cerrar modal
      const bootstrapModal = bootstrap.Modal.getInstance(modal);
      if (bootstrapModal) {
        bootstrapModal.hide();
      }

      if (card) {
        renderClaseCard(data, usuarios);
      }

      form.reset();
      form.classList.remove("was-validated");
    } catch (error) {
      console.error("Error:", error);
    }
  });
};

export const eliminarClaseEvents = () => {
  document.addEventListener("click", async (event) => {
    if (event.target.classList.contains("btnConfirmarEliminar")) {
      const id = event.target.getAttribute("data-id");

      console.log("carta", id);

      //Se llama la clase del service
      const service = new Service("clases");

      try {
        const response = await service.delete(id);

        if (response.ok) {
          console.log("eliminado bien");

          const card = document.querySelector(`#clase-card-${id}`);

          if (card) {
            card.remove();
          }

          // cerrar el modal
          const modal = event.target.closest(".modal");
          const bootstrapModal = bootstrap.Modal.getInstance(modal);
          bootstrapModal.hide();
        } else {
          console.error("Error al eliminar la clase", response);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });
};

const uploadFile = async (file) => {
  if (!file) return null;

  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/clases/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Error al subir la imagen");
    }

    return await response.text();
  } catch (error) {
    console.error("Error en uploadFile:", error);
    return null;
  }
};

const objetoConstruido = (form, imageUrl) => {
  const clase = {
    claseId: null,
    nombre: form.nombre.value.trim(),
    descripcion: form.descripcion.value.trim(),
    capacidad: parseInt(form.capacidad.value),
    fecha: form.fecha.value,
    horaInicio: form.horaInicio.value,
    horaFin: form.horaFin.value,
    duracion: calcularDuracion(form.horaInicio.value, form.horaFin.value),
    estado: calcularEstado(
      form.fecha.value,
      form.horaInicio.value,
      form.horaFin.value
    ),
    objetivo: form.objetivo.value.trim(),
    intensidad: form.intensidad.value,
    imagen: imageUrl,
    empleado: {
      personaId: parseInt(form.entrenador.value),
    },
  };

  return clase;
};

function calcularDuracion(horaInicio, horaFin) {
  const inicio = new Date(`1970-01-01T${horaInicio}:00`);
  const fin = new Date(`1970-01-01T${horaFin}:00`);
  return Math.floor((fin - inicio) / (1000 * 60));
}

function calcularEstado(fecha, horaInicio, horaFin) {
  const ahora = new Date();
  const fechaClase = new Date(`${fecha}T${horaInicio}`);
  const fechaFin = new Date(`${fecha}T${horaFin}`);

  if (ahora < fechaClase) {
    return "Programado";
  } else if (ahora >= fechaClase && ahora <= fechaFin) {
    return "En curso";
  } else {
    return "Finalizado";
  }
}
