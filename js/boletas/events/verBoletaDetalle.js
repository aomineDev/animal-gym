import { contenedorTablaBoleta, } from "../dom.js"
import { renderBoleta } from "../render.js"
export const verBoletaDetalle = (boletas, container) => {
    contenedorTablaBoleta.addEventListener('click', e => {
        console.log("")
        //esto tmb cuenta los 3 puntos por eso aremos que solo busque el boton ver detaller

        const btnVerdDetalle = e.target.closest(".verBoleta");
        //si existe el boto me devuelve un div y si no lo encuentra un null
        if (!btnVerdDetalle) {
            return;
        }

        console.log("verDetalle")
        //dentro del div btnVerDetlle habra un lista que tendra el data-id=${id}
        //aqui buscamos el dataset.id el cual busca despues del data-
        //entonces recuperamos el id 
        const idBoleta = btnVerdDetalle.dataset.id;
        console.log(idBoleta)
        //pintamos para ver su id
        //con el id obtenido vamos a comporar el id del json boletas con el idboleta 
        //que se recupero, entonces si encuentra nos devolvera un true y si no un false
        const boletaObjeto = boletas.find(b => b.id == idBoleta);
        //boleta objeto devuelve todo el objeto que tenga el id coincidido solo devuelve un objeto
        //si encontro un obejto devulve un thurty que es un true y si no un undefined que es falso
        if (boletaObjeto) {
            //renderizo mi render boleta con dos parametros
            // el objeto encontrado y el contenedor donde sera insercertado
            //esta const ira para el main verBoleta(boletas, container)
            //permitira hacer la busqueda la boleta en el json cuando 
            //las id coincidan devolvera un objeto que tendra esa id y ese pasara al render y para que se muestre
            //necesitara el container ahi es donde se mostrara
            renderBoleta(boletaObjeto, container);;
        }
    })
}