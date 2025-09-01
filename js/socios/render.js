import { SocioItem } from "./componentes/SocioItem.js";

//datos que llegan del main
export function renderSociosCard (socios, container){
  container.innerHTML = '';

  //iterar socios
  socios.forEach((socio, i)=>{
    container.innerHTML += SocioItem(socio);
  })
} 