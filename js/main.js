"use strict"
//PARRAFO OCULTO|VISIBLE
function mostrarParrafo() {
    const parrafo = document.querySelector("#parrafo");
    const verMas = document.querySelector("#verMas");
    
    parrafo.classList.remove("parrafoOculto");
    parrafo.classList.add("parrafoVisible");
    verMas.textContent = "Ver menos...";
  
    verMas.removeEventListener("click", mostrarParrafo);
    verMas.addEventListener("click", ocultarParrafo);
}

function ocultarParrafo() {
    const parrafo = document.querySelector("#parrafo");
    const verMas = document.querySelector("#verMas");
    
    parrafo.classList.remove("parrafoVisible");
    parrafo.classList.add("parrafoOculto");
    verMas.textContent = "Ver más...";
    
   
    verMas.removeEventListener("click", ocultarParrafo);
    verMas.addEventListener("click", mostrarParrafo);
}

document.querySelector("#verMas").addEventListener("click", mostrarParrafo);



/*// MODO CLARO|OSCURO
let modo = document.querySelector("#modo");
let body = document.querySelector("body");

modo.addEventListener("click", cambiarModo);

function cambiarModo() {
    body.classList.toggle("modoOscuro");
    body.classList.toggle("modoClaro");
}

}*/
