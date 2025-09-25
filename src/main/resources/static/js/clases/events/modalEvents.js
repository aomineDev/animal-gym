import { formCrearClase } from "../dom.js";
import Service from "../../service/index.js";

export const crearClaseEvents = () => {
  formCrearClase.addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;

    //Subir archivo primero
    const file = form.file.files[0];
    let imageUrl = null;

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      const uploadResponse = await fetch("/api/clases/upload", {
        method: "POST",
        body: formData,
      });

      if (!uploadResponse.ok) {
        alert("Error al subir imagen");
        return;
      }
      imageUrl = await uploadResponse.text();
    }

    console.log(imageUrl);

    //2
    const clase = {
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
      entrenador: {
        personaId: parseInt(form.entrenador.value),
      },
      reservas: null,
    };

    //Se llama la clase del service
    const service = new Service("clases");

    try {
      const data = await service.save(clase);

      console.log(data);
      //   console.log(document.getElementById("pruebaList"));
      //   document
      //     .getElementById("pruebaList")
      //     .insertAdjacentHTML("beforeend", listItem(data));
      //   nameInput.value = "";
    } catch (error) {
      console.error("Error:", error);
    }
  });
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
