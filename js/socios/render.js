// 3. obtengo el componente y creo la funcion
import { SocioItem } from "./componentes/SocioItem.js";
import { SocioContentVerPerfil } from "./componentes/SocioContentVerPerfil.js";

// Creo la funcion, donde se el main enviara dos parametros.
export function renderSociosCard (socios, container){// Obj.socios | contenedor
  container.innerHTML = '';

  //iterar socios agregando a cada uno.
  socios.forEach((socio, i)=>{
    container.innerHTML += SocioItem(socio);
  })

} 

export function renderSocioVerPerfil(socio, container) {
  container.innerHTML = SocioContentVerPerfil(socio);
}