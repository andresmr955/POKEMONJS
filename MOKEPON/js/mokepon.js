function seleccionarMascotaJugador(){
    return alert("seleccionaste la mascota " + botonMascotaJugador)
}

//El metodo nos sirve para llamar cualquier elemendo con el ID en especidifico
let botonMascotaJugador = document.getElementById('boton-mascota')
botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

