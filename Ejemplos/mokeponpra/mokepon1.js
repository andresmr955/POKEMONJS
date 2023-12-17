let ataqueEnemigo
let ataqueJugador
let resultado

function iniciarJuego(){
    let botonSeleccionarMas = document.getElementById('seleccionar-mascota')
    botonSeleccionarMas.addEventListener('click', seleccionarMascota)

    let botonFuego = document.getElementById('boton-Fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-Agua')
    botonAgua.addEventListener('click', ataqueAgua)
}

function seleccionarMascota(){
    let inputCapipepo = document.getElementById('Capipepo')
    let inputHipodoge = document.getElementById('Hipodoge')
    let mascotaSpan = document.getElementById('tu-mascota')

    if(inputCapipepo.checked){
        mascotaSpan.innerHTML = "Capipepo"
    }else if (inputHipodoge.checked){
        mascotaSpan.innerHTML = "Hipodoge"
    }else{
        alert('Debes seleccionar una mascota')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let mascotaEnemy = aleatorio(1,2)
    
    let mascotaSpanEnemy = document.getElementById('enemy-mascota')

    if(mascotaEnemy == 1){
        mascotaSpanEnemy.innerHTML = "Capipepo"
    }else{
        mascotaSpanEnemy.innerHTML = "Hipodoge"
    }
}

function ataqueFuego(){
    ataqueJugador = "Fuego"
    ataqueEnemy()
}

function ataqueAgua(){
    ataqueJugador = "Agua"
    ataqueEnemy()
}

function ataqueEnemy(){
    let ataqueAle = aleatorio(1,2)
    if(ataqueAle == 1){
        ataqueEnemigo = "Fuego"
    }else{
        ataqueEnemigo = "Agua"
    }
    combate()
}

function combate(){
    if(ataqueJugador === ataqueEnemigo){
        crearMessage("Empate")
    }else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Agua"){
        crearMessage("Perdiste")
    }else{
        crearMessage("Ganaste")
    }
   
}

function crearMessage(resultado){
    let sectionMessage = document.getElementById("mensajes")
    let parrafo = document.createElement('p')

    parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + " y la mascota de tu enemy con "+ ataqueEnemigo + " " + resultado

    sectionMessage.appendChild(parrafo)
}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
window.addEventListener('load', iniciarJuego)