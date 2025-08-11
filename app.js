// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []
let nombreDeAmigo = " ";

function agregarAmigo() {

    let nombreDeAmigo = (document.getElementById('amigo').value);

    if (nombreDeAmigo == "" || nombreDeAmigo == " ") {
        alert('Por favor, inserte un nombre.');

    }else{

        if (amigos.includes(nombreDeAmigo)){
            alert('nombre repetido, ingrese otro nombre por favor');
        }else{
            amigos.push(nombreDeAmigo);
            mostrarListaAmigos();
        }
        console.log(amigos);        
       
    }
    limpiarInput();
     return;
}
function limpiarInput() {
    document.getElementById('amigo').value = '';

}



function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    // Limpiar la lista existente
    lista.innerHTML = '';
    
    // Construir el HTML de la lista con un bucle for
    let htmlListItems = '';
    for (let i = 0; i < amigos.length; i++) {
        htmlListItems += `<li>${amigos[i]}</li>`;
    }
    // Asignar el HTML construido a la lista
    lista.innerHTML = htmlListItems;
};

// Configurar dos eventos, al dar click en boton o al digitar enter agregar amigo.
document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }    
});


