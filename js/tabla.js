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
cargarTabla();

function limpiarForm(){
    let codigo= document.querySelector("#codigo-taller").value= "";        
    let nombre= document.querySelector("#nombre-taller").value= "";
    let mes= document.querySelector("#mes-taller").value= "";
    let precio= document.querySelector("#precio-taller").value= "";
}


//ocultar btn cargar??
//para que aparezcan en cada fila las opciones de borrar o editar
//<td>
//<button class="borrar-fila" name="${talleres.id}">Borrar</button>
//<button class="editar-fila" name="${talleres.id}">Editar</button>
//</td>


async function agregarNuevaFila(){
    //vacío el div del mensaje
    mensaje.innerHTML="";
    //debería poner el input de codigo visibility hidden porque id me lo da mockapi
    let codigo= document.querySelector ("#codigo-taller").value;
    let nombre= document.querySelector("#nombre-taller").value;
    let mes= document.querySelector("#mes-taller").value;
    let precio= document.querySelector("#precio-taller").value
    let nuevaFila={
        "nombre": nombre,
        "mes": mes,
        "precio": precio,
    }
    try{
        let respuesta= await fetch(url,{
            "method": "POST",
            "headers": { "Content-type": "application/json"},
            "body": JSON.stringify(nuevaFila)
        });

        if(respuesta.status == 201){
            console.log("Nueva fila agregada");
            mensaje.innerHTML= ("Se ha agregado un nuevo taller");
            limpiarForm();
            cargarTabla();
        }
    } catch (error){
        console.log(error);
    }
}


async function borrarFila(){
    mensaje.innerHTML= "";
    let codigo= document.querySelector("#codigo-taller").value;
    try{
        let respuesta= await fetch (`${url}/${codigo}`,{
            method:"DELETE"
        });
        if(respuesta.status == 200){
            console.log("Fila Borrada");
            mensaje.innerHTML= ("Se ha borrado un taller");
            limpiarForm();
            cargarTabla();
        }
    
    }  catch (error){
        console.log(error);
    }
}


async function editarFila(){
    mensaje.innerHTML="";
    let codigo= document.querySelector ("#codigo-taller").value;
    let nombre= document.querySelector("#nombre-taller").value;
    let mes= document.querySelector("#mes-taller").value;
    let precio= document.querySelector("#precio-taller").value;
    let editarFila={
        "nombre": nombre,
        "mes": mes,
        "precio": precio,
    }
    try {
        let respuesta= await fetch(`${url}/${codigo}`,{
            "method": "PUT",
            "headers": {"Content-type": "application/json"},
            "body": JSON.stringify (editarFila)
        });

        if(respuesta.status == 200){
            console.log("Fila Editada");
            mensaje.innerHTML= ("Se ha editado un taller");
            
            limpiarForm();
            cargarTabla();
            
        }
    }  catch (error){
        console.log(error);
    }
}




document.querySelector("#btn-agregarFila").addEventListener("click", agregarNuevaFila);
document.querySelector("#btn-borrarFila").addEventListener("click", borrarFila);
document.querySelector("#btn-editarFila").addEventListener("click", editarFila);

// agregar botones de borrar y editar a cada fila y el form 
//puede aparecer según el evento para que 
//aparezcan solo los inputs que necesito
//revisar que se pueden agregar filas vacías
