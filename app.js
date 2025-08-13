// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let nombreDeAmigo = " ";
let amigoSecreto = "";
let amigosSorteados = [];

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
        //console.log(amigos);        
       
    }
    limpiarInput();
     return;
}
function limpiarInput() {
    document.getElementById('amigo').value = '';

}

function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    // Limpiar contenido en la lista existente
    lista.innerHTML = '';
    
    // Construir el contenido para agregar a la lista con un bucle for
    let htmlListItems = '';
    for (let i = 0; i < amigos.length; i++) {
        htmlListItems += `<li>${amigos[i]}</li>`;
    }
    // Agregar el construido en el Html a la lista
    lista.innerHTML = htmlListItems;
};

// Configura dos eventos, al dar click en boton o al digitar enter agrega amigo.
//document.querySelector('.button-add').addEventListener('click', agregarAmigo());
document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }    
});


function sortearAmigo(){
    if (amigos.length === 0) {
        //hace el llamado al elemento resultado <ul>
        document.getElementById('resultado')
        resultado.innerHTML = 'No hay amigos para sortear.';
        return;
    }
        //controla que no se repita ningun nombre en el sorteo
    if (amigosSorteados.length === amigos.length) {
        resultado.innerHTML = '¡Todos los amigos ya han sido sorteados!';
        //console.log('Todos los amigos ya han sido sorteados.');
        return;
    }
        //sortea y escoge una posicion dentro de la lista amigos
    let sorteoAmigos = Math.floor(Math.random()*amigos.length);
        //alimenta la variable amigoSecreto con el contenido de la posicion resultante de sortearAmigos
    amigoSecreto = amigos[sorteoAmigos];
    
    
    if (amigosSorteados.includes (amigoSecreto)){
        return sortearAmigo();

    }else{
        
        //console.log(`¡Tu amigo secreto es: ${amigoSecreto}!`);
        document.getElementById('resultado')
        resultado.innerHTML = (`¡Tu amigo secreto es: ${amigoSecreto}!`);
        //console.log(amigosSorteados);
        amigosSorteados.push(amigoSecreto);//agrega cada amigo sorteado a la lista amigosSorteados
    }
    
       
}