"use strict"

const url= 'https://66706ba60900b5f8724a981f.mockapi.io/taller/talleres';

const tabla= document.querySelector("#tablaBody");

async function cargarTabla(){//get
    tabla.innerHTML= "";
    try {
        let respuesta= await fetch(url);
        let objeto= await respuesta.json();
        console.log(objeto);
        for(let talleres of objeto){
            let nombre= talleres.nombre;
            let mes= talleres.mes;
            let precio= talleres.precio;
            tabla.innerHTML += 
            `<tr> 
                <td>${nombre}</td>
                <td>${mes}</td>
                <td>${precio}</td>
                <td>
                    <button class="borrar-fila" name="${talleres.id}">Borrar</button>
                    <button class="editar-fila" name="${talleres.id}">Editar</button>
                </td>
            </tr>`;
        }
    } catch (error) {
        console.log(error);
    }
}

cargarTabla();

let container= document.querySelector("#div-mensaje");
async function agregarNuevaFila(){
    let nombre= document.querySelector("#nombre-taller").value;
    let mes= document.querySelector("#mes-taller").value;
    let precio= document.querySelector("#precio-taller").value
    //traigo cada input del form y le asigno su valor a una variable
    let nuevaFila={
        "nombre": nombre,
        "mes": mes,
        "precio": precio,
    }
    try{
        let respuesta= await fetch(url,{
            "method": "POST",
            "headers": { "Content-type": "application/json"},
            "body": JSON.stringify(talleres)
        });

        if(respuesta.status == 201){
            console.log("Nueva fila agregada");
            container.innerHTML= ("Se ha agregado un nuevo taller");
        }
    } catch (error){
        console.log(error);
    }
}

async function borrarFila(){}

async function editarFila(){}