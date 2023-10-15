let ataqueJugador 
let ataqueEnemigo 
let VidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    //El metodo getElementById nos sirve para llamar cualquier elemendo con el ID en especidifico
    // Esta es la variable que creamos para seleccionar el boton mascota
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
//En esta funcion llamamos los botones de los poderes para despues llamar el ataque jugador

    let botonAgua = document.getElementById('boton-Water')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-Earth')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonFuego = document.getElementById('boton-Fire')
    botonFuego.addEventListener('click', ataqueFuego)
     
    let botonAire = document.getElementById('boton-Wind')
    botonAire.addEventListener('click', ataqueAire)
    

}
function seleccionarMascotaJugador(){
    // Creamos estas variables para que sea mas legible el codigo y no sea tan extenso dentro del condicional y se pueden usar los metodos en las variables
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputAndresillo = document.getElementById('Andresillo')
    let mascotaSpanJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        mascotaSpanJugador.innerHTML = 'Hipodoge'
    }else if(inputCapipepo.checked){
        mascotaSpanJugador.innerHTML = 'Capipepo'
    }
    else if(inputRatigueya.checked){
        mascotaSpanJugador.innerHTML = 'Ratigueya'
    }else if(inputAndresillo.checked){
        mascotaSpanJugador.innerHTML = 'Andresillo'
    }else{
        alert('Debes seleccionar una mascota')
    }
    //llamamos esta funcion aca debido a que queremos que llame la mascota del enemigo despues del jugador
    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo(){
    //creamos esta variable para generar de manera automatica la mascota enemigo
    let mascotaAleatoria = aleatorio(1,4)
    let mascotaSpanEnemigo = document.getElementById('mascota-enemigo')

        if(mascotaAleatoria == 1){
            mascotaSpanEnemigo.innerHTML = 'Hipodoge'
        }else if(mascotaAleatoria == 2){
            mascotaSpanEnemigo.innerHTML = 'Capipepo'
        }
        else if(mascotaAleatoria == 3){
            mascotaSpanEnemigo.innerHTML = 'Ratigueya'
        }else if(mascotaAleatoria == 4){
            mascotaSpanEnemigo.innerHTML = 'Andresillo'
        }else{
            alert('Debes seleccionar una mascota')
        }
}
//Aqui creamos estas funciones para modificar la variable global
        function ataqueFuego(){
            ataqueJugador =  "Fire"
            ataqueAleatorioEnemigo()
        }
        function ataqueAire(){
            ataqueJugador =  "Wind"
            ataqueAleatorioEnemigo()
        }
        function ataqueAgua(){
            ataqueJugador =  "Water"
            ataqueAleatorioEnemigo()
        }
        function ataqueTierra(){  
            ataqueJugador =  "Earth"
            ataqueAleatorioEnemigo()
        }

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,4)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fire'
        
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Water'
        
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'Wind'
         
    }else {
        ataqueEnemigo = 'Earth'

    }
    combate()
}
//Logica para saber quien gano y quien perdio

function combate(){

    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueJugador === ataqueEnemigo){
        crearMensaje("Empate 🖖")
    }else if(ataqueJugador == 'Wind' && ataqueEnemigo == 'Water' ){
        crearMensaje("Ganaste 🏆")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'Water' && ataqueEnemigo == 'Fire' ){
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("Ganaste 🏆")
    }else if(ataqueJugador == 'Fire' && ataqueEnemigo == 'Earth' ){
        spanVidasEnemigo.innerHTML = vidasEnemigo

        crearMensaje("Ganaste 🏆")
    }else if(ataqueJugador == 'Earth' && ataqueEnemigo == 'Wind' ){
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        crearMensaje("Ganaste 🏆")
    }else{
        crearMensaje("Perdiste 😔")
        VidasJugador--
        spanVidasJugador.innerHTML = VidasJugador
    }
     revisarVidas()  
}

function revisarVidas(){
  
    if(vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones Ganaste 🏆")
    }else if(VidasJugador == 0){
        console.log("Perdiste")
        crearMensajeFinal("Lo siento, Perdiste 😔")
    } 
}

//Creamos una nueva funcion para crear nuevos y nuevos mensajes

function crearMensaje(resultado){

    //Tengo que llamar la seccion de mensajes

    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + " " + resultado

    sectionMensajes.appendChild(parrafo)
}

// Creamos una nueva funcion para crear el mensaje Final
function crearMensajeFinal(resultadoFinal){

    //Tengo que llamar la seccion de mensajes

    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)
}


function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Este metodo nos sirve para cargar toda la pagina
window.addEventListener('load', iniciarJuego)