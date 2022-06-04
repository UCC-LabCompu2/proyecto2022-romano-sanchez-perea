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

function cargarResultado{
    const urlcomp = window.location.href; // es una funcion traer url del navegador
    console.log(urlcomp) //  console.log imprimir la url
    // obterner el div por ID
    // const divResultado = getElm(id)
    // obtener inicial, ganancia, total
    // const inicial = getElm(inputInicial) => repetir con ganancia y total
    /*
        HTMLElement Input
        console.log(Input)
        // usuario hizo => document.getElementById("Gasto_Usuario").value = 445;
        // nosotro hacemos => const valueInicial = document.getElementById("Gasto_Usuario").value;

        const valueInicial
        const ganancia
        const total
    */
    // obtener ROI
    // const valor = calcularROI(inicial, ganancia, total);
    // ponerle el resultado al div
    // innerHTML = `El resultado... ${valor}
}

alert ("se ingreso un valor invalido, por favor ingrese de nuevo");
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