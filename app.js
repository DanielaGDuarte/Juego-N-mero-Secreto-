let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento,texto){
    let elementoHtml = document.querySelector(elemento); // Es un objeto
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento (){
    let numerosUsuarios = parseInt(document.getElementById("valorUsuario").value);

    if (numeroSecreto === numerosUsuarios) {
        asignarTextoElemento("p",`Acertaste el número en ${numeroIntentos} ${(numeroIntentos===1) ? "vez":"veces"}`);

        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        // El usuario no acertó
        if (numerosUsuarios > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor"); 
        }else{
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja () {
    document.getElementById("valorUsuario").value = ""; 
}

function generarNumeroSecreto(params) {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1);
    console.log(numeroGenerado);
    console.log(listaNumeroSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumeroSorteados.length===numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los números posibles");
    } else{
        // Si el numero generado esta incluido en la lista 
    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else{ 
        // Ya que no esta en la lista se agrega para que no se vuelva a repetir
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }

    }

    
   
}


function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego() {
    // Limpiar Caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
}

condicionesIniciales();
