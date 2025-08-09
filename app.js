// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
let arrayNombres = [];

function limpiarInput() {
    document.querySelector('#amigo').value = '';
};

function limpiarLista() {
    document.querySelector('#listaAmigos').innerHTML = '';
};

function agregarAmigosALaLista() {
    limpiarLista();
    const listaAmigos = document.querySelector('#listaAmigos');
    arrayNombres.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
};

function agregarAmigo() {
    const amigo = document.querySelector('#amigo').value.trim();
    if (amigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    } else if (arrayNombres.some(n => n.toLowerCase() === amigo.toLowerCase())) {
        alert('Este nombre ya fue agregado. Por favor, inserte un nombre diferente.');
        limpiarInput();
        return;
    }
    arrayNombres.push(amigo);
    agregarAmigosALaLista();
    limpiarInput();
    //console.log('Amigo agregado: ' + amigo);
    //console.log('Lista de amigos: ' + arrayNombres.join(', '));
}

let amigoSorteado = '';

function mostrarResultado() {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<h2>Tu amigo secreto es: ${amigoSorteado}</h2>`;
};

function sortearAmigo() {
    if (arrayNombres.length < 2) {
        alert('Por favor, agregue al menos dos nombres para realizar el sorteo.');
        return;
    }
    const nombreSorteado = Math.floor(Math.random() * arrayNombres.length);
    amigoSorteado = arrayNombres[nombreSorteado];
    mostrarResultado();
    //console.log('Amigo sorteado: ' + amigoSorteado);
};