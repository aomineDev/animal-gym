import { tablaEjercicios } from "../dom.js";
import Service from "../../service/index.js";
import { renderTablaDetalle } from "../render.js";

export const renderFilaEvents = () => {
  document.body.addEventListener("click", async (event) => {
    const fila = event.target.closest(".fila-rutina");
    if (!fila) return;

    const rutinaId = fila.getAttribute("data-rutina-id");
    console.log("clickeaste fila ", rutinaId);

    //recupero el objeto completo de rutina
    let rutinaService = new Service("rutinas");

    try {
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
