//MENU HAMBURGUESA
"use strict"

document.querySelector(".botonMenu").addEventListener("click",toggleMenu);

function toggleMenu(){
    document.querySelector(".navegacion").classList.toggle("mostrar")
}

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


// CAPTCHA
let checkbox = document.querySelector("#validacion");
let contenedorDados = document.querySelector(".contenedor_dados");
let respuestaUsuario = document.querySelector("#respuestaUsuario");
let suma; 


function mostrarCaptcha() {
    if (checkbox.checked) {
        contenedorDados.classList.remove("oculto");
        contenedorDados.classList.add("visible");
        respuestaUsuario.classList.remove("oculto");
        respuestaUsuario.classList.add("visible");
        lanzarDados();
    } else {
        contenedorDados.classList.remove("visible");
        contenedorDados.classList.add("oculto");
        respuestaUsuario.classList.remove("visible");
        respuestaUsuario.classList.add("oculto");
    }
}

checkbox.addEventListener("click", mostrarCaptcha);

function lanzarDados() {
    let dado1 = (Math.floor(Math.random() * 6) + 1);
    let dado2 = (Math.floor(Math.random() * 6) + 1);
    document.querySelector("#dado1").src = "./css/img/dado" + dado1 + ".png";
    document.querySelector("#dado2").src = "./css/img/dado" + dado2 + ".png";

    suma = dado1 + dado2; 
    respuestaUsuario.value = "";
}

document.querySelector(".formContacto").addEventListener("submit", function(e) {
    e.preventDefault(); 

    if (respuestaUsuario.value == suma) {
        document.querySelector("#resultado").innerHTML = "Validación correcta";
        
    } else {
        document.querySelector("#resultado").innerHTML = "Hubo un error";
        lanzarDados();
    }
});

/*// MODO CLARO|OSCURO
let modo = document.querySelector("#modo");
let body = document.querySelector("body");

modo.addEventListener("click", cambiarModo);

function cambiarModo() {
    body.classList.toggle("modoOscuro");
    body.classList.toggle("modoClaro");
}
*/

/*//CAPTCHA
function validarCaptcha() {
    let checkbox = document.querySelector("#validacion");
    let contenedorDados = document.querySelector(".contenedor_dados");
    let respuestaUsuario = document.querySelector("#respuestaUsuario");

    checkbox.addEventListener("click", function() {
        if (checkbox.checked) {
            contenedorDados.classList.remove("oculto");
            contenedorDados.classList.add("visible");
            respuestaUsuario.classList.remove("oculto");
            respuestaUsuario.classList.add("visible");
            lanzarDados();
        } else {
            contenedorDados.classList.remove("visible");
            contenedorDados.classList.add("oculto");
            respuestaUsuario.classList.remove("visible");
            respuestaUsuario.classList.add("oculto");
        }
    });
}


validarCaptcha();

function lanzarDados(){
    let dado1= (Math.floor(Math.random()*6)+1);
    let dado2=(Math.floor(Math.random()*6)+1);
    document.querySelector("#dado1").src="./css/img/dado" + dado1 + ".png";
    document.querySelector("#dado2").src="./css/img/dado" + dado2 + ".png";
    
    let suma= dado1+dado2;
    document.querySelector("#respuestaUsuario").value = "";
    let respuestaUsuario= document.querySelector("#respuestaUsuario").value;

    if(respuestaUsuario==suma){
        document.querySelector("#resultado").innerHTML+"Validación correcta";

    }else{
        document.querySelector("#resultado").innerHTML+"Hubo un error";
        lanzarDados();

    
    }
    
}
*/