class API {
    constructor(apikey){
        this.apikey = apikey;
    }
    async obtenerMonedasApi(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        //fetch a la api
        const urlObtenerMoneda = await fetch(url);

        //respuesta en json
        const monedas = await urlObtenerMoneda.json();

       // console.log(monedas);

        return {
            monedas         
        }

    }

    async obtenerValores(moneda,cripto){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}&api_key=${this.apikey}`;

        //consultar rest api
        const urlConvertir = await fetch(url);
        const resultado = await urlConvertir.json();

        return {
            resultado
        }


    }

    

}