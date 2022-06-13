/**
 * Descripcion: Función que muestra los campos a rellenar en el formulario del Cálculo de ROI;
 * @param lista  [HTMLElement]
 * Returns comprueba el estado del parámetro para mostrar los elementos deseados.
 */
function mostrarElementos(lista) {
    for (let item of lista) {
        item.classList.remove('esconder');
        item.classList.add('mostrar');
    }
}

/**
 * Descripción: Función que oculta los campos a rellenar en el formulario del Cálculo de ROI;;
 * @param lista [HTMLElement]
 * Returns comprueba el estado del parámetro para esconder los elementos deseados.
 */
function esconderElementos(lista) {
    for (let item of lista) {
        item.classList.remove('mostrar');
        item.classList.add('esconder');
    }
}

/** Acceso al DOM
 * Descripción: CalculadoraAvanzada() sirve para obtener las ganancias que hubieran retornado al usuario por invertir cierta cantidad de dinero en bitcoin de forma periódica ;
 * @param {Class} listaElementosEscondidos -
 * @param {class} listaElementosVisibles -
 */
function CalculadoraAvanzada() {
    const listaElementosEscondidos = document.getElementsByClassName('avanzada');
    const listaElementosVisibles = document.getElementsByClassName('simple');
    mostrarElementos(listaElementosEscondidos);
    esconderElementos(listaElementosVisibles);
}

/**
 * CalculadoraSimple()  sirve para obtener las ganancias que hubieran retornado al usuario por invertir cierta cantidad de dinero en bitcoin en una fecha puntual;
 * @helper multiplica y convierte valores
 * @param {class} listaElementosEscondidos -
 * @param {class} listaElementosVisibles -
 */
function CalculadoraSimple() {
    const listaElementosEscondidos = document.getElementsByClassName('simple');
    const listaElementosVisibles = document.getElementsByClassName('avanzada');
    mostrarElementos(listaElementosEscondidos);
    esconderElementos(listaElementosVisibles);
}

/**
 * calcularROI()
 * @param invInicial sirve para indicar el monto inicial de compra de la criptomoneda Bitcoin.
 * @param retorno parametro que indica el valor parcial de una inversion para calcular su ROI.
 * @param invTotal la cantidad de plata que ingresa el usuario.
 * @returns {number} roi - Devuelve el Retorno de la inversión inicial que puede ser positivo o negativo.
 */
function calcularROI(retorno, invInicial, invTotal) {
    const inversionTotal = invTotal ? invTotal : invInicial;
    return (retorno - invInicial)/inversionTotal;
}

/**
 *
 */
function calcularROIYMostrar(gastoUsuario, fechaCompra, divisa) {
    Promise.all([fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${formatearFecha(fechaCompra)}&localization=false`)
        .then((response) => response.json()), fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cars')
        .then((response) => response.json())])
        .then(([datos, precios]) => {
            const precioEnFecha = obtenerPrecioEnFecha(datos);
            const precioPorDivisa = obtenerPrecioPorDivisa(precios);

            let roi;
            switch (divisa) {
                case 'dolares':
                    const invInicialBitcoinDolares = gastoUsuario/precioEnFecha.usd;
                    const retornoDolares = invInicialBitcoinDolares * precioPorDivisa.usd;
                    roi = calcularROI(retornoDolares, parseFloat(gastoUsuario));
                    return alert(`La ganancia fue de: ${retornoDolares-gastoUsuario}, El ROI es: ${roi.toFixed(2)}`);
                case 'pesos':
                default:
                    const invInicialBitcoinPesos = gastoUsuario/precioEnFecha.ars;
                    const retornoPesos = invInicialBitcoinPesos * precioPorDivisa.ars;
                    roi = calcularROI(retornoPesos, parseFloat(gastoUsuario));
                    return alert(`La ganancia fue de: ${retornoPesos-gastoUsuario}, El ROI es: ${roi.toFixed(2)}`);
            }
        })
}

/**
 * ObtenerValordeInput(id);
 * @param {string} id -
 * Returns una referencia al input obtenerValor por su id.
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
    return { gastoUsuario, fechaCompra, divisa }
}

/**
 *
 */
function obtenerPrecioEnFecha(datos) {
    return { ars: datos.market_data.current_price.ars, usd: datos.market_data.current_price.usd }
}

/**
 *
 */
function obtenerPrecioPorDivisa(datos) {
    return { ars: datos.bitcoin.ars, usd: datos.bitcoin.usd }
}

/**
 * Calcular() Para hacer el cálculo global de nuestra fórmula matemática del ROI;
 * obtenerValores() Define los valores requeridos para ser aplicados en la fórmula de arriba;
 * crearGrafico Crea nuestro Canvas sirviendose del cálculo del ROI();
 */
function calcular() {
    const { gastoUsuario, fechaCompra, divisa } = obtenerValores();
    calcularROIYMostrar(gastoUsuario, fechaCompra, divisa);
    crearGrafico(fechaCompra);
}

/**
* formatearFecha(fecha);
* @param {int} fecha - Obtiene el Timestamp de la fecha de compra.
* Returns dia, mes y año de la fecha de compra.
*/
function formatearFecha(fecha) {
    let d = new Date(fecha),
        mes = '' + (d.getMonth() + 1),
        dia = '' + d.getDate(),
        ano = d.getFullYear();

    if (mes.length < 2)
        mes = '0' + mes;
    if (dia.length < 2)
        dia = '0' + dia;

    return [dia, mes, ano].join('-');
}

/**
 * convertidorDeDatos(datosCripto)
 * @param datosCrudos [[int] timestamp_date, [float] price];
 * Returns coordenadas {x,Y}
 */
function convertidorDeDatos(datosCripto) {
    // [351351684, 13215.15] => { x: fecha 10-02-2022, y: $13215.15 }
    return datosCripto.map((dato) => {
        const fecha = formatearFecha(dato[0]);
        const precio = dato[1]
        return { x: fecha, y: precio }
    }).filter((dato, idx, lista) => {
        const siguiente = lista[idx+1]
        return siguiente ? dato.x !== siguiente.x : false
    })
}

/**
 *
 * @param fecha
 * @returns {number}
 */
function unixTimestamp(fecha) {
    return Math.round((fecha ? new Date(`${fecha}`) : new Date()).getTime() / 1000)
}

/**
 *
 * @param fecha formato 2014-02-10
 */
function crearGrafico(fecha) {
    fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=${unixTimestamp(fecha)}&to=${unixTimestamp()}`)
        .then((response) => response.json())
        .then((datosCrudos) => {
            return convertidorDeDatos(datosCrudos.prices);
        }).then((datos) => {
            const formateadorDeMoneda = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
            });
            const canvas = document.getElementById('mi-canvas');
            const lineChart = canvas.getContext('2d');
            const config = {
                type: 'line',
                data: {
                    datasets: [{
                        label: 'Precio del Bitcoin',
                        fill: false,
                        borderColor: 'red',
                        data: datos,
                        tension: 1
                    }]
                },
                options:{
                    elements: {
                        point:{
                            radius: 0
                        }
                    },
                    scales: {
                        xAxes: {
                            ticks: {
                                autoSkip: true,
                                maxTicksLimit: datos.length <= 20 ? datos.length : 20
                            }
                        },
                        yAxes: {
                            ticks: {
                                callback: (label, index, labels) => {
                                    return formateadorDeMoneda.format(label);
                                }
                            }
                        }
                    }
                }
            };
            // aqui es donde el grafico se hace
            new Chart(lineChart, config);
            canvas.classList.remove('esconder');
        })
}
