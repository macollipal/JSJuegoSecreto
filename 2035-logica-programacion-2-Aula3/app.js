let numeroSecreto = generarNumeroSecreto();
let intentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

function calcularIMC(altura, peso) {
    let imc = peso / (altura * altura);
    return imc.toFixed(2); // Redondea el resultado a 2 decimales
}

// Ejemplo de uso:
let altura = 1.75; // Altura en metros
let peso = 70; // Peso en kilogramos
console.log(`Tu IMC es: ${calcularIMC(altura, peso)}`);

function factorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// Ejemplo de uso:
let numero = 5;
console.log(`El factorial de ${numero} es: ${factorial(numero)}`);

function convertirDolaresAReales(dolares) {
    const tasaCambio = 4.80; // Tasa de cambio dólar a reales
    return (dolares * tasaCambio).toFixed(2); // Redondea a 2 decimales
}

// Ejemplo de uso:
let dolares = 50;
console.log(`${dolares} dólares equivalen a ${convertirDolaresAReales(dolares)} reales.`);

function calcularAreaYPerimetroRectangular(altura, anchura) {
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
    console.log(`Área de la sala rectangular: ${area} m²`);
    console.log(`Perímetro de la sala rectangular: ${perimetro} m`);
}

// Ejemplo de uso:
calcularAreaYPerimetroRectangular(5, 10); // Altura = 5m, Anchura = 10m

function calcularAreaYPerimetroCircular(radio) {
    const pi = 3.14;
    let area = pi * (radio * radio);
    let perimetro = 2 * pi * radio;
    console.log(`Área de la sala circular: ${area.toFixed(2)} m²`);
    console.log(`Perímetro de la sala circular: ${perimetro.toFixed(2)} m`);
}

// Ejemplo de uso:
calcularAreaYPerimetroCircular(7); // Radio = 7m

function mostrarTablaMultiplicar(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Ejemplo de uso:
mostrarTablaMultiplicar(7); // Muestra la tabla del 7