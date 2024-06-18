"use strict"

const url= 'https://66706ba60900b5f8724a981f.mockapi.io/tarifario/tarifario';

const tabla= document.querySelector("#tablaBody");

async function cargarTabla(){//get
    tabla.innerHTML= "";
    try {
        let respuesta= await fetch(url);
        let objeto= await respuesta.json();
        console.log(objeto);
        //preguntar porqué con for
        for(let tarifario of objeto){
            let metros2= tarifario.metros2;
            let complejidad= tarifario.complejidad;//me quedan numeros altos, necesito un random entre 1,2 y 3
            let precio= tarifario.precio;
            let id= tarifario.id;
            //preguntar por id visible , sino cómo hago para editar o borrar sin mostrar el id
            tabla.innerHTML += `<tr> <td>${metros2}</td><td>${complejidad}</td><td>${precio}</td></tr>`;
        }
    } catch (error) {
        console.log(error);
    }
}

cargarTabla();

async function agregarNuevaFila(){
    FormData=
    //traigo cada input del form y le asigno su valor a una variable
    let nuevaFila={
        "metros2": metros2,
        "complejidad": complejidad,
        "precio": precio,
    }

}

async function borrarFila(){}

async function editarFila(){}