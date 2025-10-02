import Service from "../../service/index.js";
import { renderFilaSocio, renderTablaDetalle } from "../render.js";
import { formCrearRutina, crearRutinaModal } from "../dom.js";
import { resetFormModalClose, showToast } from "../../utils.js";

let usuarios = [];
let ejercicioss = [];

async function fetchUsuarios() {
  try {
    const response = await fetch("/api/usuarios");
    if (!response.ok) throw new Error("Error al obtener usuarios");
    usuarios = await response.json();
  } catch (error) {
    console.error(error);
  }
}

async function fetchEjercicios() {
  let ejercicioService = new Service("ejercicios");

  try {
    ejercicioss = await ejercicioService.findAll();
  } catch (error) {
    console.error(error);
  }
}

export const renderFilaEvents = () => {
  document.body.addEventListener("click", async (event) => {
    const fila = event.target.closest(".fila-rutina");
    if (!fila) return;

    const rutinaId = fila.getAttribute("data-rutina-id");
    console.log("clickeaste fila ", rutinaId);

    //en base al id del socio de esa fila recuperamos el cuerpo y pintamos en rutina
    const socioId = fila.getAttribute("data-socio-id");
    const modal = document.getElementById(`detalleSocioModal__${socioId}`);
    const tablaEjercicios = modal.querySelector("#tablaEjercicios tbody");

    let rutinaService = new Service("rutinas");

    try {
      //recupero el objeto completo de rutina
      let rutinaData = await rutinaService.findById(rutinaId);

      console.log(rutinaData);

      //pintar en mi tabla
      tablaEjercicios.innerHTML = "";

      if (rutinaData.detalleRutinaList.length === 0) {
        tablaEjercicios.innerHTML = `
              <tr><td colspan="8" class="text-muted">No hay ejercicios para esta rutina</td></tr>`;
      } else {
        rutinaData.detalleRutinaList.forEach((detalleRutina) => {
          renderTablaDetalle(tablaEjercicios, detalleRutina);
        });
      }
    } catch (err) {
      console.error("Error cargando ejercicios:", err);
      tablaEjercicios.innerHTML = `
        <tr><td colspan="8" class="text-danger">Error al cargar ejercicios</td></tr>`;
    }
  });
};

export const crearRutinaEvents = () => {
  fetchUsuarios();
  fetchEjercicios();

  //reseteo del modal: Solo si cierra sin hacer cambios
  resetFormModalClose(crearRutinaModal, formCrearRutina);

  crearRutinaModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget;
    const socioId = button.getAttribute("data-socio-id");
    crearRutinaModal.dataset.socioId = socioId;
  });

  formCrearRutina.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!formCrearRutina.checkValidity()) {
      formCrearRutina.classList.add("was-validated");
      return;
    }

    // Obtener el socioId desde el modal
    const modal = formCrearRutina.closest("#crearRutina");
    const socioId = modal.dataset.socioId;

    let rutina = objetoConstruido(formCrearRutina);

    try {
      const response = await fetch(`/api/socios/${socioId}/rutinas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(rutina),
      });

      const socioReconstruido = await response.json();
      console.log("socio reconstruido ", socioReconstruido);

      showToast("Rutina creado correctamente", 1);

      // Cerrar el modal de creación
      const bootstrapModal = bootstrap.Modal.getInstance(crearRutinaModal);
      bootstrapModal.hide();

      renderFilaSocio(socioReconstruido, usuarios, ejercicioss);
      //renderTablaRutinaModal(socioCompleto);

      // Abrir el modal de detalle
      const detalleModalId = `detalleSocioModal__${socioId}`;
      const detalleModalEl = document.getElementById(detalleModalId);
      const detalleModal = new bootstrap.Modal(detalleModalEl);
      detalleModal.show();
    } catch (err) {
      console.error("Error al crear rutina", err);
      showToast("Error al crear rutina", 2);
    }
  });
};

export const editarRutinaEvents = () => {
  fetchUsuarios();
  document.body.addEventListener("click", async (event) => {
    if (!event.target.classList.contains("btnEditarRutina")) return;

    const rutinaId = Number(event.target.getAttribute("data-id"));
    const socioId = Number(event.target.getAttribute("data-socio-id"));

    console.log("rutina ", rutinaId, " y socio ", socioId);

    //Busca de abajo a arriba el modal
    const modal = event.target.closest(".modal");
    const form = modal.querySelector(".editarRutinaForm");

    if (!form) return;

    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    let rutina = objetoConstruido(form);
    rutina.rutinaId = rutinaId;

    console.log("objeto incompleto ", rutina);

    let rutinaService = new Service("rutinas");
    let socioService = new Service("socios");

    try {
      //actualizo la rutina
      let rutinaCompleta = await rutinaService.update(rutina, rutinaId);

      //llamo al socio de esa rutina
      let socioIncompleto = await socioService.findById(socioId);

      //busco la rutina del socio incompleto para actulizar
      let index = socioIncompleto.rutinas.findIndex(
        (r) => r.rutinaId === rutinaId
      );
      console.log(index);

      socioIncompleto.rutinas[index] = rutinaCompleta;

      let socioActualizado = await socioService.update(
        socioIncompleto,
        socioId
      );

      showToast("Rutina actualizada correctamente", 1);

      // Cerrar el modal de creación
      const bootstrapModal = bootstrap.Modal.getInstance(
        document.getElementById(`editarRutina__${rutinaId}`)
      );
      bootstrapModal.hide();

      renderFilaSocio(socioActualizado, usuarios, ejercicioss);

      // Abrir el modal de detalle
      const detalleModal = new bootstrap.Modal(
        document.getElementById(`detalleSocioModal__${socioId}`)
      );
      detalleModal.show();

      console.log(
        "Socio actualizado con rutina reemplazada: ",
        socioActualizado
      );
    } catch (err) {
      console.error("Error al actualizar rutina", err);
      showToast("Error al actualizar rutina", 2);
    }
  });
};

export const eliminarRutinaEvents = () => {
  fetchUsuarios();
  document.body.addEventListener("click", async (event) => {
    if (!event.target.classList.contains("btnConfirmarEliminar")) return;

    const rutinaId = event.target.getAttribute("data-id");
    const socioId = event.target.getAttribute("data-socio-id");

    console.log("socio", socioId);
    console.log("rutina", rutinaId);

    let rutinaService = new Service("rutinas");
    let socioService = new Service("socios");

    try {
      let response = await rutinaService.delete(rutinaId);

      if (response.ok) {
        let socioDesactualizado = await socioService.findById(socioId);
        console.log(socioDesactualizado);

        socioDesactualizado.rutinas = socioDesactualizado.rutinas.filter(
          (rutina) => String(rutina.rutinaId) !== String(rutinaId)
        );

        let socioActualizado = await socioService.update(
          socioDesactualizado,
          socioId
        );

        console.log(socioActualizado);
        console.log("eliminado bien");

        // Cerrar el modal de creación
        const bootstrapModal = bootstrap.Modal.getInstance(
          document.getElementById(`eliminarRutina__${rutinaId}`)
        );
        bootstrapModal.hide();

        //renderizo
        renderFilaSocio(socioActualizado, usuarios, ejercicioss);
        //renderTablaRutinaModal(socioActualizado);
        showToast("Rutina eliminada correctamente", 1);

        // Abrir el modal de detalle
        const detalleModalId = `detalleSocioModal__${socioId}`;
        const detalleModalEl = document.getElementById(detalleModalId);
        const detalleModal = new bootstrap.Modal(detalleModalEl);
        detalleModal.show();
      } else {
        console.error("Error al eliminar la rutina", response);
        showToast("Error al eliminar rutina", 2);
      }
    } catch (err) {
      console.error("Error al eliminar rutina", err);
      showToast("Error al eliminar rutina", 2);
    }
  });
};

export const agregarEjercicioEvents = () => {
  document.body.addEventListener("click", async (event) => {
    if (!event.target.classList.contains("btnAgregarEjercicio")) return;

    const rutinaId = event.target.getAttribute("data-id");
    const socioId = event.target.getAttribute("data-socio-id");

    console.log("rutina ", rutinaId, " y socio ", socioId);

    //Busca de abajo a arriba el modal
    const modal = event.target.closest(".modal");
    const form = modal.querySelector(".agregarEjercicioForm");

    if (!form) return;

    event.preventDefault();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    let detalleRutina = detalleRutinaConstruido(form);

    console.log(detalleRutina);

    let socioServices = new Service("socios");

    try {
      //agregamos ejercicio a la rutina
      const response = await fetch(`/api/rutinas/${rutinaId}/detalles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(detalleRutina),
      });

      const data = await response.json();

      console.log("rutina reconstruida ", data);

      let socioCompleto = await socioServices.findById(socioId);

      // Cerrar el modal de creación
      const bootstrapModal = bootstrap.Modal.getInstance(
        document.getElementById(`agregarEjercicio__${rutinaId}`)
      );
      bootstrapModal.hide();

      //renderizo
      // renderFilaSocio(socioCompleto, usuarios, ejercicioss);

      // Abrir el modal de detalle
      const detalleModalId = `detalleSocioModal__${socioId}`;
      const detalleModalEl = document.getElementById(detalleModalId);
      const detalleModal = new bootstrap.Modal(detalleModalEl);
      detalleModal.show();
    } catch (err) {
      console.error("Error al agregar detalle", err);
      showToast("Error al agregar detalle", 2);
    }
  });
};

const detalleRutinaConstruido = (form) => {
  const detalle = {
    detalleRutinaId: null,
    diaSemana: form.diaSemana.value.trim(),
    serie: form.serie.value.trim(),
    repeticiones: form.repeticiones.value.trim(),
    peso: form.peso.value,
    calorias: form.calorias.value,
    tiempoDescanso: form.tiempoDescanso.value,
    ejercicio: {
      ejercicioId: parseInt(form.ejercicio.value),
    },
  };

  return detalle;
};

const objetoConstruido = (form) => {
  const rutina = {
    rutinaId: null,
    nombre: form.nombre.value.trim(),
    descripcion: form.descripcion.value.trim(),
    objetivo: form.objetivo.value.trim(),
    fechaInicio: form.fechaInicio.value,
    fechaFin: form.fechaFin.value,
    empleado: {
      personaId: parseInt(form.entrenador.value),
    },
  };

  return rutina;
};
