"use strict"

const url = 'https://66706ba60900b5f8724a981f.mockapi.io/taller/talleres';
const tabla = document.querySelector("#tablaBody");
const mensaje = document.querySelector("#div-mensaje");

async function cargarTabla() { //get
    tabla.innerHTML = "";
    try {
        let respuesta = await fetch(url);
        let objeto = await respuesta.json();
        console.log(objeto);
        for (let talleres of objeto) {
            let codigo = talleres.id;
            let nombre = talleres.nombre;
            let mes = talleres.mes;
            let precio = talleres.precio;
            tabla.innerHTML +=
                `<tr> 
                    <td>${codigo}</td>
                    <td>${nombre}</td>
                    <td>${mes}</td>
                    <td>${precio}</td>
                    <td>
                        <button class="borrar-fila" data-id="${codigo}">Borrar</button>
                    </td>
                </tr>`;
        }
        agregarEventListeners();
    } catch (error) {
        console.log(error);
    }
}

function limpiarForm() {
    document.querySelector("#codigo-taller").value = "";
    document.querySelector("#nombre-taller").value = "";
    document.querySelector("#mes-taller").value = "";
    document.querySelector("#precio-taller").value = "";
}

async function agregarNuevaFila() {
    mensaje.innerHTML = "";
    let nombre = document.querySelector("#nombre-taller").value;
    let mes = document.querySelector("#mes-taller").value;
    let precio = document.querySelector("#precio-taller").value;
    let nuevaFila = {
        "nombre": nombre,
        "mes": mes,
        "precio": precio,
    }
    try {
        let respuesta = await fetch(url, {
            "method": "POST",
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(nuevaFila)
        });

        if (respuesta.status == 201) {
            console.log("Nueva fila agregada");
            mensaje.innerHTML = ("Se ha agregado un nuevo taller");
            limpiarForm();
            cargarTabla();
        }
    } catch (error) {
        console.log(error);
    }
}

async function borrarFila(id) {
    mensaje.innerHTML = "";
    try {
        let respuesta = await fetch(`${url}/${id}`, {
            method: "DELETE"
        });
        if (respuesta.status == 200) {
            console.log("Fila Borrada");
            mensaje.innerHTML = ("Se ha borrado un taller");
            cargarTabla();
        }

    } catch (error) {
        console.log(error);
    }
}

async function editarFila(id) {
    mensaje.innerHTML = "";
    let nombre = document.querySelector("#nombre-taller").value;
    let mes = document.querySelector("#mes-taller").value;
    let precio = document.querySelector("#precio-taller").value;
    let editarFila = {
        "nombre": nombre,
        "mes": mes,
        "precio": precio,
    }
    try {
        let respuesta = await fetch(`${url}/${id}`, {
            "method": "PUT",
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(editarFila)
        });

        if (respuesta.status == 200) {
            console.log("Fila Editada");
            mensaje.innerHTML = ("Se ha editado un taller");
            limpiarForm();
            cargarTabla();
        }
    } catch (error) {
        console.log(error);
    }
}

function agregarEventListeners() {
    document.querySelectorAll(".borrar-fila").forEach(button => {
        button.addEventListener("click", () => {
            const id = button.getAttribute("data-id");
            borrarFila(id);
        });
    });
}

document.querySelector("#btn-agregarFila").addEventListener("click", agregarNuevaFila);

cargarTabla();
