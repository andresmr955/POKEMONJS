let numeroRandom = 0;
let intentos = 0;
let numerosSorteados = [];

const asignarTextoElemento = (elemento, texto) => {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto
    
}


const verificarIntento = () => {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos)

    if(numeroDeUsuario == numeroRandom){
            asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${intentos === 1?'intento': 'Intentos'} el numero es ${numeroRandom}`);
            document.getElementById('reiniciar').removeAttribute('disabled')
        }else{ if(numeroDeUsuario > numeroRandom){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');

        }
        intentos++;
        limpiarCaja();
    }
    return ;
}


const limpiarCaja = () => {
    document.querySelector('#valorUsuario').value = '';
    
}


const consejosIniciales = () => {
    asignarTextoElemento('p', "Indica un numero del 1 al 10");
    asignarTextoElemento('h1', "Comenzando el juego Andres");
     //generar el numero aleatorio 
     numeroRandom = generarNumeroSecreto();
     //inicializar intentos
     intentos = 1;

}

const generarNumeroSecreto = () => {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    if(numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }else{        
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            numerosSorteados.push(numeroGenerado)
            return numeroGenerado
        }
    }
}

const reiniciarJuego = () => {
    //limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    consejosIniciales();
   
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
   
    // Deshabilitar el boton de nuevo juego
}

consejosIniciales();

