import Service from "../../service/index.js";
import { renderFilaSocio, renderTablaDetalle } from "../render.js";
import { formCrearRutina, crearRutinaModal } from "../dom.js";
import { resetFormModalClose, showToast } from "../../utils.js";

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

    let rutinaService = new Service("rutinas");
    let socioService = new Service("socios");

    try {
      let rutinaCompleta = await rutinaService.save(rutina);
      console.log(rutinaCompleta);

      //Ahora le mandamos esa rutina al arreglo de rutinas al socio
      let socioIncompleto = await socioService.findById(socioId);
      socioIncompleto.rutinas.push(rutinaCompleta);

      let socioCompleto = await socioService.update(socioIncompleto, socioId);

      console.log(socioCompleto);

      renderFilaSocio(socioCompleto);
      //renderTablaRutinaModal(socioCompleto);

      showToast("Rutina creado correctamente", 1);

      // Cerrar el modal de creación
      const bootstrapModal = bootstrap.Modal.getInstance(crearRutinaModal);
      bootstrapModal.hide();

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
  document.body.addEventListener("click", async (event) => {
    if (!event.target.classList.contains("btnEditarRutina")) return;

    const rutinaId = event.target.getAttribute("data-id");
    const socioId = event.target.getAttribute("data-socio-id");

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
      let rutinaCompleta = await rutinaService.update(rutina, rutinaId);
      let socioIncompleto = await socioService.findById(socioId);
      socioIncompleto.console.log("objeto en bd ", rutinaCompleta);
    } catch (err) {
      console.error("Error al actualizar rutina", err);
      showToast("Error al actualizar rutina", 2);
    }
  });
};

export const eliminarRutinaEvents = () => {
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

        //renderizo
        renderFilaSocio(socioActualizado);
        //renderTablaRutinaModal(socioActualizado);
        showToast("Rutina eliminada correctamente", 1);

        // Cerrar el modal de creación
        const bootstrapModal = bootstrap.Modal.getInstance(
          document.getElementById(`eliminarRutina__${rutinaId}`)
        );
        bootstrapModal.hide();

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
