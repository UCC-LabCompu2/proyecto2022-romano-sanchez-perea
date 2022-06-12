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

/**
 * ObtenerValordeInput;
 * @param {string} id -
 * Returns
 */
function obtenerValorDeInput(id) {
    return document.getElementById(id).value;
}

/**
 * obtenerDivisa();
 * returns
 */
function obtenerDivisa() {
    return document.querySelector('input[name="divisa"]:checked').value;
}

/**
 * obtenerValores();
 * @param {number} gastoUsuario -El id del input del valor de la inversión del usuario.
 * @param {date} fechaCompra - La fecha del input para agregar el dia de la inversión en bitcoin.
 * @param {radio} divisa - El tipo de divisa que siempre será en Dolares Americanos.
 */
function obtenerValores() {
    const gastoUsuario = obtenerValorDeInput('Gasto_Usuario');
    const fechaCompra = obtenerValorDeInput('Fecha_Compra');
    const divisa = obtenerDivisa();
}

/**
 * Calcular() ;
 *
 *
 */
function calcular() {
    // ... implementacion
    // llamar calcularROI(valores....)
}

/**
 * const lista = [a,b,c,d,e]
 * const value = "abc" (char*) // abc....null|0|nil
 *
 * lista[0] => a
 * lista[2] => c
 * lista[34] => out of index
 *
 * value[0] => a
 * value[3] => error || undefined
 * getkjaskldjfklkjkl()[2]
 */

// traer un elemento por id
// const botonSimple = document.getElementById('calculadora-simple')
// const valor = boton.target.nSimpvalue
// console.log(valor)
// const resultado = calcularROI(valores...)
// console.log(resultado) ---> lo visualizamos en el inspector