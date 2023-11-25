<<<<<<< HEAD
=======
// dejamos todas las variables de primeras
//Es una variable que no va cambiar
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonAgua = document.getElementById('boton-Water')
const botonTierra = document.getElementById('boton-Earth')
const botonFuego = document.getElementById('boton-Fire')
<<<<<<< HEAD
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
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


let mokepones = []
let ataqueJugador 
let ataqueEnemigo 
=======
const botonAire = document.getElementById('boton-Wind')
const botonReiniciar = document.getElementById("Reiniciar")
const sectionReiniciar = document.getElementById('Reiniciar')
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')

const mascotaSpanJugador = document.getElementById('mascota-jugador')
const mascotaSpanEnemigo = document.getElementById('mascota-enemigo')
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador= document.getElementById('ataques-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-enemigo')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
//let es una variable que va estar cambiando 
let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones 

let inputHipodoge
let inputCapipepo
let inputRatigueya
let inputAndresillo

let mascotaJugador

>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404
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


mokepones.push(hipodoge, capipepo, ratigueya,andresillo)

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
    {nombre: '💧', id: 'boton-Water' },
    {nombre: '💧', id: 'boton-Water' },
    {nombre: '💨', id: 'boton-Wind' },
    {nombre: '🔥', id: 'boton-Fire' },
    {nombre: '🍁', id: 'boton-Earth' },
)

capipepo.ataques.push(
    {nombre: '🍁', id: 'boton-Earth' },
    {nombre: '🍁', id: 'boton-Earth' },
    {nombre: '💨', id: 'boton-Wind' },
    {nombre: '🔥', id: 'boton-Fire' },
    {nombre: '💧', id: 'boton-Water' },
)

ratigueya.ataques.push(
    {nombre: '🔥', id: 'boton-Fire' },
    {nombre: '🔥', id: 'boton-Fire' },
    {nombre: '💨', id: 'boton-Wind' },
    {nombre: '💧', id: 'boton-Water' },
    {nombre: '🍁', id: 'boton-Earth' },
)


andresillo.ataques.push(
    {nombre: '💨', id: 'boton-Wind' },
    {nombre: '💨', id: 'boton-Wind' },
    {nombre: '💧', id: 'boton-Water' },
    {nombre: '🔥', id: 'boton-Fire' },
    {nombre: '🍁', id: 'boton-Earth' },
)

function iniciarJuego(){
<<<<<<< HEAD
=======

>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404
    sectionSeleccionarAtaque.style.display = 'none'
    //metodo que nos ayuda a iterar o recorrer nuestros objetos 

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `<!--La etiqueta <input> en HTML se utiliza para crear campos de entrada interactivos en un formulario web-->
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <!-- La etiqueta <label> en HTML se utiliza para asociar un texto descriptivo con un elemento de formulario, como un campo de entrada (<input>)-->
        <label class="tarjeta-mokepon" for=${mokepon.nombre}><p>Capipepo</p><img src=${mokepon.foto} alt=""></label> <!-- La etiqueta <label> en HTML se utiliza para asociar un texto descriptivo con un elemento de formulario, como un campo de entrada (<input>)-->
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

         inputHipodoge = document.getElementById('Hipodoge')
         inputCapipepo = document.getElementById('Capipepo')
         inputRatigueya = document.getElementById('Ratigueya')
         inputAndresillo = document.getElementById('Andresillo')
     }
    )

    //El metodo getElementById nos sirve para llamar cualquier elemendo con el ID en especidifico
    // Esta es la variable que creamos para seleccionar el boton mascota
<<<<<<< HEAD
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
//En esta funcion llamamos los botones de los poderes para despues llamar el ataque jugador
=======

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
//En esta funcion llamamos los botones de los poderes para despues llamar el ataque jugador


>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonFuego.addEventListener('click', ataqueFuego)
    botonAire.addEventListener('click', ataqueAire)
    botonReiniciar.addEventListener('click', reiniciarJuego)
<<<<<<< HEAD

=======
>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404
    sectionReiniciar.style.display = 'none'
}
function seleccionarMascotaJugador(){
<<<<<<< HEAD
    sectionSeleccionarMascota.style.display = 'none'

    
    sectionSeleccionarAtaque.style.display = 'flex'
    // Creamos estas variables para que sea mas legible el codigo y no sea tan extenso dentro del condicional y se pueden usar los metodos en las variables
    
=======
    
    sectionSeleccionarMascota.style.display = 'none'

    sectionSeleccionarAtaque.style.display = 'flex'
    // Creamos estas variables para que sea mas legible el codigo y no sea tan extenso dentro del condicional y se pueden usar los metodos en las variables
   

>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404
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
        mascotaJugador = inputRatigueya.id
    }else{
        alert('Debes seleccionar una mascota')
    }
    //llamamos esta funcion aca debido a que queremos que llame la mascota del enemigo despues del jugador
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador){
    let ataques
    for(let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }

    mostrarAtaques(ataques)
}
function seleccionarMascotaEnemigo(){
    //creamos esta variable para generar de manera automatica la mascota enemigo
<<<<<<< HEAD
    let mascotaAleatoria = aleatorio(1,4)
=======
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404

    mascotaSpanEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
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
<<<<<<< HEAD
    

   

=======
>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404
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
    }``
     revisarVidas()
}

function revisarVidas(){

    if(vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones Ganaste 🏆")
    }else if(VidasJugador == 0){
        crearMensajeFinal("Lo siento, Perdiste 😔")
    }
}

//Creamos una nueva funcion para crear nuevos y nuevos mensajes

function crearMensaje(resultado){

    //Tengo que llamar la seccion de mensajes
<<<<<<< HEAD


   
=======
>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404
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

<<<<<<< HEAD
    

    sectionMensajes.innerHTML = resultadoFinal

    
=======
    sectionMensajes.innerHTML = resultadoFinal

>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404
    botonAgua.disabled = true
    
    botonTierra.disabled = true
    
    botonFuego.disabled = true
<<<<<<< HEAD
     
=======

>>>>>>> 2a1e662d6bdbd6eddcc331cdd86878e568302404
    
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