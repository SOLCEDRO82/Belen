"use strict"
//MENU HAMBURGUESA
document.querySelector(".botonMenu").addEventListener("click",toggleMenu);

function toggleMenu(){
    document.querySelector(".navegacion").classList.toggle("mostrar")
}