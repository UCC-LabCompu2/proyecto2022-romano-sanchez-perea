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
 * CalculadoraSimple();
 * @helper
 * sirve para blabalbalbla
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
 * @param invInicial sirve para blabalbalba
 * @param ganancia
 * @param invTotal
 * @returns {number}
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
// const valor = botonSimple.target.value
// console.log(valor)
// const resultado = calcularROI(valores...)
// console.log(resultado) ---> lo visualizamos en el inspector