import { MembresiaCard } from "./componentes/MembresiaCard.js";
//importar el componente
import { ModalEditar } from "./componentes/ModalEditar.js";

import { editarMembresiaForm } from "./dom.js";



//datos que llegan del main
export function renderMembresiaCard  (membresias, container){
  container.innerHTML = '';

  //iterar membresias
  membresias.forEach((membresia, i)=>{
    container.innerHTML += MembresiaCard(membresia);//func que pasa el item membresia
  })

  


} 

//
export function renderEditarForm  (membresia){
  editarMembresiaForm.innerHTML += ModalEditar(membresia);

}