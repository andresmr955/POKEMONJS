         function aleatorio(min, max){
            return Math.floor(Math.random() * (max - min + 1) + min)
        }

        function eleccion(usuario){
                if(usuario == 1){
            return " 🪨"
        }else if(usuario == 2){
            return " 🧻"
        }else if (usuario == 3){
            return " ✂️"
        }else{
            return  jugador + "  la opcion incorrecta"
        }
            }
        
        //CICLOS 
        let min = 1
        let max = 3
        let jugador = 0
        let pc = 0 
        let triunfos = 0
        let perdidas = 0
        while(triunfos < 3 && perdidas < 3){
            pc = aleatorio(1,3)
            jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
            //alert("Elegiste " + jugador)

            alert("Tu escogiste " + eleccion(parseInt(jugador))) 
            alert("PC escogio " +  eleccion(parseInt(pc)))

            //COMBATE
            if(pc == jugador){
                alert("Empate 🤝")
            }else if(jugador == 1 && pc == 3||jugador == 2 && pc == 1|| jugador == 3 && pc == 2){
                alert("Ganaste 🏆")
                triunfos ++
            }else{
                alert("Perdiste 🥺")
                perdidas ++
            }
        }

        alert("Ganaste " + triunfos + " veces"+ ", pero perdiste " + perdidas + " veces.")
       

