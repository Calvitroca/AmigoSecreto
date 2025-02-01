let amigos = [];
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const botonAgregar = document.querySelector(".button-add");
const botonSortear = document.querySelector(".button-draw");

function agregarAmigo() {
    let nombre = inputAmigo.value.trim(); 

    console.log("DEBUG - Se ejecutó agregarAmigo()");
    console.log("DEBUG - Valor antes de trim():", inputAmigo.value);
    console.log("DEBUG - Valor después de trim():", nombre);

    if (!nombre || nombre.length === 0) {  
        console.warn("ERROR: Intento de agregar un nombre vacío.");
        alert("Por favor, inserte un nombre.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }
    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
    actualizarBoton();
}

function actualizarLista() {
    listaAmigos.innerHTML = ""; 
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let nombreSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li>${nombreSorteado} es el amigo secreto 🎉</li>`;
}

function actualizarBoton() {
    if (inputAmigo.value.trim() !== "") {
        botonAgregar.style.backgroundColor = "orange"; 
        botonAgregar.style.color = "white";
    } else {
        botonAgregar.style.backgroundColor = "gray"; 
        botonAgregar.style.color = "black";
    }
}

inputAmigo.addEventListener("input", actualizarBoton);

inputAmigo.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        agregarAmigo();
    }
});

inputAmigo.addEventListener("focusout", function () {
    console.log("DEBUG - Se ejecutó focusout en el input.");
    actualizarBoton();
});

botonAgregar.addEventListener("click", agregarAmigo);
botonSortear.addEventListener("click", sortearAmigo);