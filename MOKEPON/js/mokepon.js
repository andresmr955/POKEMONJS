// dejamos todas las variables de primeras
//Es una variable que no va cambiar
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById("boton-reiniciar")
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const mascotaSpanJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador= document.getElementById('ataques-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')

const contenedorAtaques = document.getElementById('contenedorAtaques')

//let es una variable que va estar cambiando 
let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones 

let inputHipodoge  
let inputCapipepo  
let inputRatigueya  
let inputAndresillo  

let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo

let botonAgua  
let botonTierra  
let botonFuego  
let botonAire  

let botones = []

let indexAtaqueJugador
let indexAtaqueEnemigo

let victoriasJugador = 0
let victoriasEnemigo = 0

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
let hipodoge = new Mokepon('Hipodoge', './js/img/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new Mokepon('Capipepo', './js/img/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new Mokepon('Ratigueya', './js/img/mokepons_mokepon_ratigueya_attack.png', 5)
let andresillo = new Mokepon('Andresillo', './js/img/images.png', 5)

hipodoge.ataques.push(
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '💨', id: 'boton-Wind'},
)
capipepo.ataques.push(
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '💧', id: 'boton-Water'},
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


mokepones.push(hipodoge,capipepo,ratigueya,andresillo)


function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    //metodo que nos ayuda a iterar o recorrer nuestros objetos 

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}></label> 
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

         inputHipodoge = document.getElementById('Hipodoge')
         inputCapipepo = document.getElementById('Capipepo')
         inputRatigueya = document.getElementById('Ratigueya')
         inputAndresillo = document.getElementById('Andresillo')
     })

    //El metodo getElementById nos sirve para llamar cualquier elemendo con el ID en especidifico
    // Esta es la variable que creamos para seleccionar el boton mascota

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
//En esta funcion llamamos los botones de los poderes para despues llamar el ataque jugador



    botonReiniciar.addEventListener('click', reiniciarJuego)
    
}
function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'
    // Creamos estas variables para que sea mas legible el codigo y no sea tan extenso dentro del condicional y se pueden usar los metodos en las variables
   

    if(inputHipodoge.checked){
        mascotaSpanJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    }else if(inputCapipepo.checked){
        mascotaSpanJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
        }
    else if(inputRatigueya.checked){
        mascotaSpanJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
  
    }else if(inputAndresillo.checked){
        mascotaSpanJugador.innerHTML = inputAndresillo.id
        mascotaJugador = inputAndresillo.id
        
    }else{
        alert('Debes seleccionar una mascota')
    }
    //llamamos esta funcion aca debido a que queremos que llame la mascota del enemigo despues del jugador
   
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
       
    }
    mostrarAtaques(ataques)

}


function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = ` <button id=${ataque.id}  class="boton-ataque BAtaque">${ataque.nombre}</button> `
        
        contenedorAtaques.innerHTML += ataquesMokepon

       
     })
    
    botonFuego = document.getElementById('boton-Fire')
    botonAgua = document.getElementById('boton-Water')
    botonTierra = document.getElementById('boton-Earth')
    botonAire = document.getElementById('boton-Wind')
    botones = document.querySelectorAll('.BAtaque')


}


function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'   
                boton.disabled = true
            } else if (e.target.textContent === '💧') {
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true

            }  else if (e.target.textContent === '💨') {
                ataqueJugador.push('AIRE')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true

            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true

            }
            ataqueAleatorioEnemigo()
        })
    })
    

}
function seleccionarMascotaEnemigo(){
    //creamos esta variable para generar de manera automatica la mascota enemigo
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
    
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO');
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA');
    } else if (ataqueAleatorio == 5 || ataqueAleatorio == 6) {
        ataqueEnemigo.push('AIRE');
    } else {
        ataqueEnemigo.push('TIERRA');
    }
    console.log(ataqueEnemigo);
    iniciarPelea();
}


function iniciarPelea(){
    if(ataqueJugador.length === 5){
        combate()
    }
}
//Logica para saber quien gano y quien perdio

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}
function combate(){

    for (let i = 0; i < ataqueJugador.length; i++) {
        if(ataqueJugador[i] === ataqueEnemigo[i]){
            indexAmbosOponentes(i, i)
            crearMensaje("Empate 🖖")  
        } else if(ataqueJugador[i] === 'AIRE' && ataqueEnemigo
        [i] === 'Water'){
            crearMensaje("GANASTE 🏆")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[i] === 'AGUA' && ataqueEnemigo[i] === 'FUEGO'){
            indexAmbosOponentes(i,i)
            crearMensaje("Ganaste")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[i] === 'FUEGO' && ataqueEnemigo[i] === 'TIERRA'){
            indexAmbosOponentes(i,i)
            crearMensaje("Ganaste")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[i] === 'TIERRA' && ataqueEnemigo[i] === 'AGUA'){
            indexAmbosOponentes(i,i)
            crearMensaje("Ganaste")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(i,i)
            crearMensaje("PERDISTE 🥺")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }
    revisarVictorias()
}

function revisarVictorias(){

    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("Esto fue un empate!!! 😊")
    }else if(victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("Felicitaciones Ganaste 🏆")
    }else {
        crearMensajeFinal('Lo siento perdiste 🥺')
    }
}

//Creamos una nueva funcion para crear nuevos y nuevos mensajes

function crearMensaje(resultado){

    //Tengo que llamar la seccion de mensajes
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)

}

// Creamos una nueva funcion para crear el mensaje Final
function crearMensajeFinal(resultadoFinal){

    

    //Tengo que llamar la seccion de mensajes

    sectionMensajes.innerHTML = resultadoFinal

   
    

    sectionReiniciar.style.display = 'block'

}

function reiniciarJuego(){
    location.reload();
}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//Este metodo nos sirve para cargar toda la pagina
window.addEventListener('load', iniciarJuego)