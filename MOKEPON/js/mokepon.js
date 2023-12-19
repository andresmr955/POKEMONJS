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
const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
//let es una variable que va estar cambiando 
let mokeponesEnemigos = []
let enemigoId = null
let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones 

let inputHipodoge  
let inputCapipepo  
let inputRatigueya  
let inputAndresillo  

let mascotaJugador
let objetoMascotaJugador
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

let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './js/img/mokemap.png'

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 350

if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}
alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa 
mapa.height = alturaQueBuscamos

//Las clases inician con mayusculas
class Mokepon {
    constructor(nombre, foto, vida, fotoMapa, id = null){
        this.id = id
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0

    }
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
        
    }
}
let hipodoge = new Mokepon('Hipodoge', './js/img/mokepons_mokepon_hipodoge_attack.png', 5, '/js/img/hipodoge.png', enemigo.id)
let capipepo = new Mokepon('Capipepo', './js/img/capipepo.png', 5, '/js/img/capipepo (1).png', enemigo.id)
let ratigueya = new Mokepon('Ratigueya', './js/img/mokepons_mokepon_ratigueya_attack.png', 5, '/js/img/ratigueya.png', enemigo.id)
let andresillo = new Mokepon('Andresillo', './js/img/images.png', 5, '/js/img/images.png', enemigo.id)


const HIPODOGE_ATAQUES = [
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '💨', id: 'boton-Wind'},
]

const CAPIPEPO_ATAQUES = [
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '💨', id: 'boton-Wind'},
]

const RATIGUEYA_ATAQUES = [
    {nombre: '🔥', id: 'boton-Fire'},
    {nombre: '🔥', id: 'boton-Fire'},
    {nombre: '🔥', id: 'boton-Fire'},
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '💨', id: 'boton-Wind'},
]

const ANDRESILLO_ATAQUES = [
    {nombre: '🍁', id: 'boton-Earth'},
    {nombre: '🔥', id: 'boton-Fire'},
    {nombre: '🔥', id: 'boton-Fire'},
    {nombre: '💧', id: 'boton-Water'},
    {nombre: '💨', id: 'boton-Wind'},
]
hipodoge.ataques.push(...HIPODOGE_ATAQUES)

capipepo.ataques.push(...CAPIPEPO_ATAQUES)

ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

andresillo.ataques.push(...ANDRESILLO_ATAQUES)


mokepones.push(hipodoge,capipepo,ratigueya,andresillo)


function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'
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

    unirseAlJuego()
    
}

function unirseAlJuego(){
    fetch("http://localhost:8080/unirse")
    .then(function(res){
        if(res.ok){
            res.text()
            .then(function(respuesta){
                console.log(respuesta)
                jugadorId = respuesta
            })
        }
    })
}
function seleccionarMascotaJugador(){
    
    sectionSeleccionarMascota.style.display = 'none'

    
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
   
    seleccionarMokepon(mascotaJugador)

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'

    iniciarMapa()
}

function seleccionarMokepon(mascotaJugador){
    fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            mokepon: mascotaJugador
        })
    })
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

            if(ataqueJugador.length === 5){
                enviarAtaques() 
            }
            
        })
    })
    

}

function enviarAtaques(){
    fetch(`http://localhost:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })
} 
function seleccionarMascotaEnemigo(enemigo){
    //creamos esta variable para generar de manera automatica la mascota enemigo
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
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

function pintarCanvas(){

    
    objetoMascotaJugador.x = objetoMascotaJugador.x + objetoMascotaJugador.velocidadX
    objetoMascotaJugador.y = objetoMascotaJugador.y + objetoMascotaJugador.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height )
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    objetoMascotaJugador.pintarMokepon()

    enviarPosicion(objetoMascotaJugador.x, objetoMascotaJugador.y)

    mokeponesEnemigos.forEach(function (mokepon) {
        mokepon.pintarMokepon()
        revisarColision(mokepon)
    })
    
}

function enviarPosicion(x, y){
        fetch(`http://localhost:8080/mokepon/${jugadorId}/posicion`, {  
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                x,
                y
            })
    })
    .then(function(res){
        if(res.ok){
            res.json()
            .then(function( { enemigos } ){
                console.log(enemigos)
                let mokeponEnemigo = null
                mokeponesEnemigos = enemigos.map(function(enemigo) {
                    const mokeponNombre = enemigo.mokepon.nombre || ""
                    if(mokeponNombre === "Hipodoge"){
                        mokeponEnemigo= new Mokepon('Hipodoge', './js/img/mokepons_mokepon_hipodoge_attack.png', 5, '/js/img/hipodoge.png')
                    }else if(mokeponNombre === "Capipepo"){
                        mokeponEnemigo = new Mokepon('Capipepo', './js/img/capipepo.png', 5, '/js/img/capipepo (1).png')

                    }else if (mokeponNombre === "Ratigueya"){
                        mokeponEnemigo = new Mokepon('Ratigueya', './js/img/mokepons_mokepon_ratigueya_attack.png', 5, '/js/img/ratigueya.png')
                    }else if (mokeponNombre === "Andresillo"){
                        mokeponEnemigo = new Mokepon('Andresillo', './js/img/images.png', 5, '/js/img/images.png')
                    }


                    mokeponEnemigo.x = enemigo.x
                    mokeponEnemigo.y = enemigo.y

                    return mokeponEnemigo

                })
                

            })
        }
    })

}
function moverDerecha(){
    objetoMascotaJugador.velocidadX = 5

}
function moverIzquierda(){
    objetoMascotaJugador.velocidadX = -5

}

function moverAbajo(){
    objetoMascotaJugador.velocidadY = 5

}
function moverArriba(){
    objetoMascotaJugador.velocidadY = -5
}

function detenerMovimiento(){
    objetoMascotaJugador.velocidadX = 0
    objetoMascotaJugador.velocidadY = 0
}


function teclaPresionada(event){
    switch(event.key){
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()         
        default:
            break
    }
}


function iniciarMapa(){

   
    objetoMascotaJugador = obtenerObjetoMascota(mascotaJugador)

    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener(`keydown`, teclaPresionada)
    window.addEventListener(`keyup` , detenerMovimiento)
}

function obtenerObjetoMascota(){
    for(let i = 0; i < mokepones.length; i++){
        if(mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo){

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x 

    const arribaMascota = 
        objetoMascotaJugador.y
    const abajoMascota = 
        objetoMascotaJugador.y + objetoMascotaJugador.alto
    const derechaMascota = 
        objetoMascotaJugador.x + objetoMascotaJugador.ancho
    const izquierdaMascota = 
        objetoMascotaJugador.x 
    
    if(
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ){
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)

        enemigoId = enemigo.id
        sectionSeleccionarAtaque.style.display = 'flex'
        sectionVerMapa.style.display = 'none'
        seleccionarMascotaEnemigo(enemigo)
}
//Este metodo nos sirve para cargar toda la pagina
window.addEventListener('load', iniciarJuego)