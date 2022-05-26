function CalculadoraAvanzada() {
    const listaElementosEscondidos = document.getElementsByClassName('esconder');
    for (let item of listaElementosEscondidos) {
        item.classList.remove('esconder');
        item.classList.add('mostrar');
    }
    const botonAvanzada = document.getElementById('calculadora-avanzada')
    botonAvanzada.classList.add('esconder')
    const botonSimple = document.getElementById('calculadora-simple')
    botonSimple.classList.remove('esconder')
}

/**
 * CalculadoraSimpleBitcoin();
 * @helper multipla y convierte valores
 * sirve para obtener las ganancias que hubiera obtenido el usuario al invertir cierta cantidad de dinero en bitcoin
 */
function CalculadoraSimple() {
    const listaElementosEscondidos = document.getElementsByClassName('mostrar');
    for (let item of listaElementosEscondidos) {
        item.classList.remove('mostrar');
        item.classList.add('esconder');
    }
    const botonAvanzada = document.getElementById('calculadora-avanzada')
    botonAvanzada.classList.remove('esconder')
    const botonSimple = document.getElementById('calculadora-simple')
    botonSimple.classList.add('esconder')
}

/**
 * calcularROI()
 * @param invInicial sirve para
 * @param ganancias parametro que indica el valor parcial de una inversion para calcular su ROI
 * @param invTotal la cantidad de plata que ingresa el usuario
 * @returns {number} cantidad de dinero
 */
function calcularROI(invInicial, ganancia, invTotal) {
    const roi = (ganancia - invInicial)/invTotal;
    return roi;
}

function calcular() {
    // ... implementacion
    // llamar calcularROI(valores....)
}

// traer un elemento por id
// const botonSimple = document.getElementById('calculadora-simple')
// const valor = botole.target.nSimpvalue
// console.log(valor)
// const resultado = calcularROI(valores...)
// console.log(resultado) ---> lo visualizamos en el inspector