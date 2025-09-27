import Service from "../../service/index.js";
import { renderTablaDetalle } from "../render.js";
import { formCrearRutina, crearRutinaModal } from "../dom.js";
import { resetFormModalClose } from "../../utils.js";

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

    console.log(modal, socioId);

    // Obtener datos del formulario
    // const formData = Object.fromEntries(new FormData(formCrearRutina));

    // console.log("Creando rutina para socio:", socioId, formData);

    // Aquí llamas a tu Service para crear la rutina:
    // await rutinaService.create({...formData, socioId});

    // Resetea el formulario y cierra el modal
    // formCrearRutina.reset();
    // formCrearRutina.classList.remove("was-validated");
    // const bootstrapModal = bootstrap.Modal.getInstance(modal);
    // bootstrapModal.hide();
  });
};
