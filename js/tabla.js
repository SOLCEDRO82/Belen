"use strict"

const url= 'https://66706ba60900b5f8724a981f.mockapi.io/taller/talleres';

const tabla= document.querySelector("#tablaBody");

const mensaje= document.querySelector("#div-mensaje");

async function cargarTabla(){//get
    tabla.innerHTML= "";
    try {
        let respuesta= await fetch(url);
        let objeto= await respuesta.json();
        console.log(objeto);
        for(let talleres of objeto){
            let codigo= talleres.id;
            let nombre= talleres.nombre;
            let mes= talleres.mes;
            let precio= talleres.precio;
            tabla.innerHTML += 
            `<tr> 
                <td>${codigo}</td>
                <td>${nombre}</td>
                <td>${mes}</td>
                <td>${precio}</td>
            </tr>`;
        }
    } catch (error) {
        console.log(error);
    }
}

//<td>
//<button class="borrar-fila" name="${talleres.id}">Borrar</button>
//<button class="editar-fila" name="${talleres.id}">Editar</button>
//</td>


cargarTabla();



async function agregarNuevaFila(){
    //codigo es el id que me da mockapi solo para borrar utilizo mediante el input, pero cuando agregan...
    let codigo= document.querySelector ("#codigo-taller").value;
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
            mensaje.innerHTML= ("Se ha agregado un nuevo taller");
        }
    } catch (error){
        console.log(error);
    }
}

async function borrarFila(){
    mensaje.innerHTML= "";
    let id= document.querySelector("#codigo-taller").value;
    try{
        let respuesta= await fetch (`${url}/${id}`,{
            method:"DELETE"
        });
        if(respuesta.status == 200){
            console.log("Fila Borrada");
            mensaje.innerHTML= ("Se ha borrado un taller");
            cargarTabla();

        }
    
    }  catch (error){
        console.log(error);
    }
}

async function editarFila(){
    let codigo= document.querySelector ("#codigo-taller").value;
    let nombre= document.querySelector("#nombre-taller").value;
    let mes= document.querySelector("#mes-taller").value;
    let precio= document.querySelector("#precio-taller").value
    let nuevaFila={
        "nombre": nombre,
        "mes": mes,
        "precio": precio,
    }
    try {
        let respuesta= await fetch(`${url}/${codigo}`,{
            "method": "PUT",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify (talleres)
        });

        if(respuesta.status == 200){
            console.log("Fila Editada");
            mensaje.innerHTML= ("Se ha editado un taller");
        }
    }  catch (error){
        console.log(error);
    }
}


document.querySelector("#btn-agregarFila").addEventListener("click", agregarNuevaFila);
document.querySelector("#btn-borrarFila").addEventListener("click", borrarFila);
document.querySelector("#btn-editarFila").addEventListener("click", editarFila);


