// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.

//lista de amigos
let amigos = [];

// funcio para agregar nombres a la lista

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;
    if(nombre === ''){
        //alerta de que no se a agregado texto al input
        alert("Por favor, inserte un nombre.")
    }else{
        amigos.push(nombre)
        limpiarInput()
        actualizarLista()
        console.log(amigos)
        
    }
}

// funcion limpiar input
function limpiarInput(){
    let nombre = document.getElementById('amigo').value = '';
}


/// funcion barrer la lista
function actualizarLista() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        let li = document.createElement('li');
        li.textContent = amigos[i];
        
        // Agregar el nuevo elemento a la lista
        lista.appendChild(li);
    }
}