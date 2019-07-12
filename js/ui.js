class Interfaz {
    constructor() {
        this.init();
    }

    init() {
        this.construirSelect();
    }
    construirSelect() {
        cotizador.obtenerMonedasApi()
            .then(monedas => {
                //seleccionar el valor de campo select
                const select = document.querySelector('#criptomoneda');
                // iterar con la informacion del rest api
                for (const [key, value] of Object.entries(monedas.monedas.Data)) {
                    //añdir el simbolo y el nombre
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    select.appendChild(opcion);
                    //console.log(value);
                }
            })
    }

    mostrarMensaje(msj, clase) {
        const div = document.createElement('div');
        div.className = clase;
        div.appendChild(document.createTextNode(msj));
        //seleccionar msj
        const divMsj = document.querySelector('.mensajes');
        divMsj.appendChild(div);


        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        },
            3000);
    }

    //mensaje para mostrar resutlado
    mostrarResultado(resultado, moneda, cripto) {

        //EN CASO DE RESULTADO ANTERIOR
        const resultadoAnterior = document.querySelector('#resultado > div');

        if (resultadoAnterior) {
            resultadoAnterior.remove();
        }

        const datosMoneda = resultado[cripto][moneda];

        //recortar digitos
        let precio = datosMoneda.PRICE.toFixed(2);
        let porcen = datosMoneda.CHANGEPCTDAY.toFixed(2),

            actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString("es-PY");
        //construyendo el template 
        let html = `
            <div class ="card bg-warning">
                <div class="card-body text-light">
                    <h2 class="card-title">Resultado:</h2>
                    <p>El precio de ${datosMoneda.FROMSYMBOL} a moneda $ ${datosMoneda.TOSYMBOL} es de: 
                        ${precio}</p>
                    <p>Variacion ultimo dia: ${porcen}</p>
                    <p>Ultima actualizacion: ${actualizado}</p>
                </div>
            </div>
        `;

        this.mostrarSpinner('block');
        
        setTimeout(() => {
            
            document.querySelector('#resultado').innerHTML = html;
            this.mostrarSpinner('none');
        }, 3000);

    }

    mostrarSpinner(clase) {

        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = clase;

    }
    


}