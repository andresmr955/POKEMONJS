function iniciarJuego(){
    //El metodo getElementById nos sirve para llamar cualquier elemendo con el ID en especidifico
    // Esta es la variable que creamos para seleccionar el boton mascota
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
 
}


function seleccionarMascotaJugador(mascota){
    // Creamos estas variables para que sea mas legible el codigo y no sea tan extenso dentro del condicional y se pueden usar los metodos en las variables
    let inputHipodoge = document.getElementById('Hipodoge')
    let inputCapipepo = document.getElementById('Capipepo')
    let inputRatigueya = document.getElementById('Ratigueya')
    let inputAndresillo = document.getElementById('Andresillo')
    let mascotaSpanJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        mascotaSpan.innerHTML = 'Hipodoge'
    }else if(inputCapipepo.checked){
        mascotaSpan.innerHTML = 'Capipepo'
    }
    else if(inputRatigueya.checked){
        mascotaSpan.innerHTML = 'Ratigueya'
    }else if(inputAndresillo.checked){
        mascotaSpan.innerHTML = 'Andresillo'
    }else{
        alert('Debes seleccionar una mascota')
    }
}


//Este metodo nos sirve para cargar toda la pagina
window.addEventListener('load', iniciarJuego)