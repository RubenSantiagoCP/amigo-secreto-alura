/* 
**  Challenge: Secreto
**  Author: Ruben Cruz
**  Date: Septiembre 2025
*/

//Se define el vector de nombres de los amigos
let amigos = []

//Definición de función para agregar amigos
function agregarAmigo(){
    //Obtener el valor del input
    let nombre = document.getElementById("amigo").value;
    //Se valida la entrada
    if(nombre.length < 1){
        alert("Por favor, inserte un nombre");
        return;
    }
    //Agregar el nombre al vector
    amigos.push(nombre);
    //Se limpia el campo de entrada
    document.getElementById("amigo").value = "";
    //Se actualiza la lista de amigos
    actualizarLista();
}

function actualizarLista(){
    //Se limpia la lista
    document.getElementById("listaAmigos").innerHTML = "";
    //Se agrega cada amigo al elemento
    amigos.forEach(function(amigo){
        let li = document.createElement("li");
        li.innerHTML = amigo;
        document.getElementById("listaAmigos").appendChild(li);
    });
}

//Se define la función para sortear los amigos
function sortearAmigo(){
    //Validar que haya amigos
    if(amigos.length < 1){
        alert("No hay amigos");
        return;
    }

    //Generar un indice aleatorio
    let indice = Math.floor(Math.random() * amigos.length);
    //Se selecciona el amigo aleatorio
    let amigo = amigos[indice];
    //Mostrar el amigo seleccionado
    document.getElementById("resultado").innerHTML = "El amigo secreto sorteado es: " + amigo;
    //Se limpia la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";
}

