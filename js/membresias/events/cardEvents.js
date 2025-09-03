import { contentMembresia, editarMembresiaForm } from "../dom.js";
import { renderEditarForm, renderMembresiaCard } from "../render.js";



export function selectedCardEvent(membresias) {
  contentMembresia.addEventListener('click', (e) => {
    const boton = e.target.closest("[data-id]");//rastrea el dom para encontra el data--id
    if (!boton) {
      return;
    }
    console.log("selected card event estoy ene l evento");

    const id = parseInt(boton.getAttribute("data-id"));
    if (e.target.closest("[data-bs-target=\"#membresiaModal\"]")) {
      const membresia = membresias.find(item => item.id === id);
      if (membresia) {
        console.log(membresia.id);
        renderEditarForm(membresia);
        editarMembresiaFormEvents(membresia, membresias);


      }

    }

  })
}



export function editarMembresiaFormEvents(item, membresias) {
  editarMembresiaForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = new FormData(editarMembresiaForm);
    console.log(data);
    if (!membresias) {
      return;
    }
    console.log(item.nombre);

    const actualizarMembresia = {
      ...item,//se mantiene los datos (id)
      nombre: data.get("nombre"),
      precio: data.get("precio"),
      descripcion: data.get('descripcion'),
      fecha_inicio: data.get('fecha_inicio'),
      fecha_final: data.get('fecha_final'),
      estado: data.get('estado')
    };
    // console.log(actualizarMembresia.nombre);
    const index = membresias.findIndex(c => c.id === item.id);
    if (index !== -1) {
      membresias[index] = actualizarMembresia;
    }
    // console.log(membresias);
    renderMembresiaCard(membresias, contentMembresia);

    //cerrar modal
    const modal = bootstrap.Modal.getInstance(document.getElementById("membresiaModal"));
    editarMembresiaForm.innerHTML = "";
    modal.hide();

  }, { once: true })
} 
