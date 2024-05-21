"use strict"
// CAPTCHA
//document.querySelector("#captcha").addEventListener("click", mostrarCaptcha);
let checkbox = document.querySelector("#check");
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
     

    if (respuestaUsuario.value == suma) {
        document.querySelector("#resultado").innerHTML = "Validación correcta";
        
    } else {
        e.preventDefault();
        document.querySelector("#resultado").innerHTML = "Hubo un error";
        lanzarDados();
    }
});
