const cotizador = new API('9eb118ee960e388f743410882cb5b8fd90f3eae1819a8bec1f193df376dda32b')

const ui = new Interfaz();

cotizador.obtenerMonedasApi();



//Leyendo el form

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    

    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    

    const criptoSelect = document.querySelector('#moneda');
    const criptoSeleccionada = criptoSelect.options[criptoSelect.selectedIndex].value;
    console.log(criptoSeleccionada);

    //comprobar que no esten vacios

    if (monedaSeleccionada ==="" || criptoSeleccionada ==="") {
        //alerta
        //console.log('selecciona bro');
        ui.mostrarMensaje('Ambos campos son requeridos','alert bg-danger text-center');
    }else{
        cotizador.obtenerValores(monedaSeleccionada,criptoSeleccionada)
        .then(data=>{
            ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoSeleccionada);
            

        })
    }




})