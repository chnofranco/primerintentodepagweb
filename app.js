let numeroSecreto = 0;
let intentos =  0;
console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto) {
    let elementoHTML =  document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//las funciones deben ser autodescriptiva
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        console.log(numeroSecreto);
        console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el Numero en ${intentos} ${(intentos == 1) ? 'vez' :'veces'}`);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        //EL USUARIO NO ACERTO  
        if (numeroDeUsuario> numeroSecreto) {
            asignarTextoElemento('p','bajale pues');
        }
        else{
            asignarTextoElemento('p','andale subele'); 
        }
        intentos++;
        limpiarCaja ();

    }
    return;
}

function limpiarCaja () { 
     document.querySelector('#valorUsuario').value ='';
    }
     
function generarNumeroSecreto() {
    return  Math.floor(Math.random()*10)+1;
    
}
function condicionesIniciales() {
    asignarTextoElemento('h1','jueguito del numero!'); 
    asignarTextoElemento('p','Indica un numero del 1 al 10'); 
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //con esto limpiamos la caja
    limpiarCaja();
    //indicar mensaje de intervalos de numeros 
    condicionesIniciales();    //generar el numero aleatorio
    //dehabilitar el boton de nuevo juego,solo se habilita al fin
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    //inicializar el numero de intentos
}
condicionesIniciales(); 