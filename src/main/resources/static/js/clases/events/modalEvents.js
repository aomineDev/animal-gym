import { formCrearClase, modalCrearClase } from "../dom.js";
import Service from "../../service/index.js";
import { renderClaseCard, renderTablaInscritos } from "../render.js";
import { showToast, resetFormModalClose } from "../../utils.js";

let usuarios = [];

async function fetchUsuarios() {
  try {
    const response = await fetch("/api/usuarios");
    if (!response.ok) throw new Error("Error al obtener usuarios");
    usuarios = await response.json();
  } catch (error) {
    console.error(error);
  }
}

export const crearClaseEvents = () => {
  fetchUsuarios();

  resetFormModalClose(modalCrearClase, formCrearClase);

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
      showToast("Clase creada correctamente", 1);

      //Para cerrar el modal
      const modal = bootstrap.Modal.getInstance(
        document.getElementById("crearClase")
      );
      modal.hide();

      formCrearClase.reset();
      formCrearClase.classList.remove("was-validated");
    } catch (error) {
      console.error("Error:", error);
      showToast("Error al crear clase", 2);
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

      showToast("Clase modificada correctamente", 1);

      form.reset();
      form.classList.remove("was-validated");
    } catch (error) {
      console.error("Error:", error);
      showToast("Error al modificar clase", 2);
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

          showToast("Clase eliminada correctamente", 1);

          // cerrar el modal
          const modal = event.target.closest(".modal");
          const bootstrapModal = bootstrap.Modal.getInstance(modal);
          bootstrapModal.hide();
        } else {
          console.error("Error al eliminar la clase", response);
          showToast("Error al eliminar clase", 2);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  });
};

export const agregarSocioClase = () => {
  document.body.addEventListener("click", async (event) => {
    if (!event.target.classList.contains("btnAgregarSocio")) return;

    const modal = event.target.closest(".modal");
    const form = modal.querySelector(".agregarSocioForm");
    if (!form) return;

    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    //Recuperamos el Claseid del modal y el dni del input
    const idClase = form.getAttribute("data-id");
    let dniBuscado = form.dni.value.trim();

    //traigo la lista de socios de bd ** PRIMERA VALIDACION
    let socios = [];
    const serviceSocios = new Service("socios");
    socios = await serviceSocios.findAll();

    //Validamos su existencia en BD ** PRIMERA VALIDACION
    let socioEncontrado = socios.find((socio) => socio.dni === dniBuscado);
    if (!socioEncontrado) {
      showToast("No existe el socio solicitado", 3);
      return;
    }

    //servicio Clases para traer toda la clase a rellenar
    const serviceClase = new Service("clases");

    //Validamos que no este en la tabla ** SEGUNDA VALIDACION
    let clase = await serviceClase.findById(idClase);
    let socioYaInscrito = clase.reservas.some(
      (reserva) => reserva.socio.dni === socioEncontrado.dni
    );

    if (socioYaInscrito) {
      showToast("Socio ya esta inscrito", 3);
      return;
    }

    //Validamos el aforo de la clase ** TERCERA VALIDACION
    if (clase.capacidad === clase.reservas.length) {
      showToast("Se llego al limite de capacidad de la clase", 3);
      return;
    }

    //construyo el objeto
    const reservaClase = {
      fecha: new Date().toISOString().split("T")[0],
      estado: true,
      socio: socioEncontrado,
    };

    //servicios del ClaseReserva para guardar el objeto y traerlo con id
    const serviceReserva = new Service("reservaClase");
    let nuevoReservaClase = await serviceReserva.save(reservaClase);

    try {
      clase.reservas.push(nuevoReservaClase);
      let nuevaClase = await serviceClase.update(clase, idClase);
      console.log("el objeto guardado fue ", nuevaClase);
      renderTablaInscritos(nuevaClase);

      showToast("Socio inscrito correctamente", 1);
      form.reset();
      form.classList.remove("was-validated");
    } catch (error) {
      showToast("Error al inscribir socio", 2);
      console.error("Error:", error);
    }
  });
};

export const eliminarSocioClase = () => {
  document.body.addEventListener("click", async (e) => {
    if (!e.target.classList.contains("btnEliminarReserva")) return;

    const reservaId = e.target.getAttribute("data-reserva-id");
    const claseId = e.target.getAttribute("data-clase-id");

    console.log("Eliminar reserva:", reservaId, "de la clase:", claseId);

    const serviceReserva = new Service("reservaClase");

    try {
      let response = await serviceReserva.delete(reservaId);
      if (response.ok) {
        // Actualizar en memoria
        let clase = await new Service("clases").findById(claseId);

        clase.reservas = clase.reservas.filter(
          (r) => String(r.reservaClaseId) !== String(reservaId)
        );

        let nuevaClase = await new Service("clases").update(clase, claseId);

        console.log("Clase actualizada en BD:", nuevaClase);

        renderTablaInscritos(nuevaClase);
        showToast("Socio eliminado correctamente de la clase", 1);
      } else {
        console.error("Error al eliminar socio de la clase", response);
        showToast("Error al eliminar socio de la clase", 2);
      }
    } catch (error) {
      console.error("Error:", error);
      showToast("Error al eliminar socio de la clase", 2);
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
