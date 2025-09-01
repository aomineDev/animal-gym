import { MembresiaCard } from "./componentes/MembresiaCard.js";

//datos que llegan del main
export function renderMembresiaCard  (membresias, container){
  container.innerHTML = '';

  //iterar membresias
  membresias.forEach((membresia, i)=>{
    container.innerHTML += MembresiaCard(membresia);//func que pasa el item membresia
  })
} 