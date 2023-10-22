// dejamos todas las variables de primeras
//Es una variable que no va cambiar
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonAgua = document.getElementById('boton-Water')
const botonTierra = document.getElementById('boton-Earth')
const botonFuego = document.getElementById('boton-Fire')
const botonAire = document.getElementById('boton-Wind')
const botonReiniciar = document.getElementById("Reiniciar")
const sectionReiniciar = document.getElementById('Reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputHipodoge = document.getElementById('Hipodoge')
const inputCapipepo = document.getElementById('Capipepo')
const inputRatigueya = document.getElementById('Ratigueya')
const inputAndresillo = document.getElementById('Andresillo')
const mascotaSpanJugador = document.getElementById('mascota-jugador')
const mascotaSpanEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador= document.getElementById('ataques-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-enemigo')
//let es una variable que va estar cambiando 
let mokepones = []
let ataqueJugador
let ataqueEnemigo
let VidasJugador = 3
let vidasEnemigo = 3
//Las clases inician con mayusculas
class Mokepon {
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
    }
}

let capipepo = new Mokepon('Capipepo', './js/img/mokepons_mokepon_capipepo_attack.png', 5)
let hipodoge = new Mokepon('Hipodoge', './js/img/mokepons_mokepon_hipodoge_attack.png', 4)
let ratigueya = new Mokepon('Ratigueya', './js/img/mokepons_mokepon_ratigueya_attack.png', 3)
let andresillo = new Mokepon('Andresillo', './js/img/images.png', 2)

mokepones.push(capipepo,hipodoge,ratigueya,andresillo)
capipepo.ataques.push(
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '💨', id: 'boton-Wind'},
)
hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '💨', id: 'boton-Wind'},
)
ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-Fire'},
    {nombre: '🔥', id: 'boton-Fire'},
    {nombre: '🔥', id: 'boton-Fire'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '💨', id: 'boton-Wind'},
)
andresillo.ataques.push(
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '🔥', id: 'boton-Fire'},
    {nombre: '🔥', id: 'boton-Fire'},
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '💨', id: 'boton-Wind'},
)

function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = 'none'
    //El metodo getElementById nos sirve para llamar cualquier elemendo con el ID en especidifico
    // Esta es la variable que creamos para seleccionar el boton mascota

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
//En esta funcion llamamos los botones de los poderes para despues llamar el ataque jugador


    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAire.addEventListener('click', ataqueAire)
    botonReiniciar.addEventListener('click', reiniciarJuego)
    sectionReiniciar.style.display = 'none'
}
function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'
    // Creamos estas variables para que sea mas legible el codigo y no sea tan extenso dentro del condicional y se pueden usar los metodos en las variables
   

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
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)

}

// Creamos una nueva funcion para crear el mensaje Final
function crearMensajeFinal(resultadoFinal){

    
    sectionReiniciar.style.display = 'block'

    //Tengo que llamar la seccion de mensajes

    sectionMensajes.innerHTML = resultadoFinal

    botonAgua.disabled = true
    
    botonTierra.disabled = true
    
    botonFuego.disabled = true

    
    botonAire.disabled = true
}

function reiniciarJuego(){
    location.reload();
}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Este metodo nos sirve para cargar toda la pagina
window.addEventListener('load', iniciarJuego)