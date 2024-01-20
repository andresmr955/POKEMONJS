alert("Funcionando day 3")
var firstName = "Andres"
var lastName = "Windows"
var country = "Canada"
var city = "Montreal"
var age = 24 
var married = true
var year = 2024

console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof age, typeof married, typeof year)
console.log(typeof '10' == typeof 10
)

console.log(4 > 3)

const lPython = "Python"
const lJargon = "Jargon"

console.log("Esta es la comparacion p y j ", lPython.length > lJargon.length)
console.log("Ejercicios 6", 4 > 3 && 10 < 12)

const fechaHoy = new Date();
console.log("Ano hoy ", fechaHoy.getFullYear())
console.log("Mes hoy", fechaHoy.getMonth())
console.log(fechaHoy.getDate())
console.log(fechaHoy.getDay())
console.log(fechaHoy.getHours())
console.log(fechaHoy.getMinutes())

console.log(fechaHoy.now())

const allSeconds = Date.now()
console.log("Mia ",allSeconds)
var ahora = new Date();
var segundosDesde1970 = Math.floor(ahora.getTime() / 1000);
console.log("IA = ", segundosDesde1970);


var base = prompt("Ingresa base: ")
var altura = prompt("Ingresa Altura")

function area(base, altura){
    var areax = (0.5 * base * altura)
    
    return "El área del triángulo es: " + areax
    
}
area(base, altura)

var ladoa = parseInt(prompt("Ingrese el lado a: "))
var ladob = parseInt(prompt("Ingrese el lado b: "))
var ladoc = parseInt(prompt("Ingrese el lado c: "))

function perimetro(a, b, c) {
    var perimetrox = a + b + c
    return "El perimetro es => " + perimetrox
}
perimetro(ladoa,ladob, ladoc)

var largo = prompt("Ingrese el largo: ")
var ancho = prompt("Ingrese el ancho: ")

function area(a, b){
    a = parseInt(a)
    b = parseInt(b)
    var areax = a * b
    return "El area del rectangulo es " + areax 
}

function perimetro(a, b){
    a = parseInt(a)
    b = parseInt(b)
   var perimetrox = 2 * (a + b)
   return "El perimetro es: " + perimetrox
}
area(largo, ancho)
perimetro(largo, ancho)

console.log(area(largo, ancho), "y ", perimetro(largo, ancho))



var radioUsuario = parseFloat(prompt("Ingrese el radio: "))

function areaCirculo(a){
    var area = Math.PI * a * a
    return "El area del circulo es " + area
}
areaCirculo(radioUsuario)

function circunferenciaCirculo(X){
    var circunferencia = 2 * Math.PI * X 
    return "La circunferencia del circulo es: " + circunferencia 
}
console.log(areaCirculo(radioUsuario), "y el ", circunferenciaCirculo(radioUsuario) )
""
var cordenada_x1 = prompt("Ingresa la cordenada x1")
var cordenada_y1 = prompt("Ingresa la cordenada y1")
var cordenada_x2 = prompt("Ingresa la cordenada x2")
var cordenada_y2 = prompt("Ingresa la cordenada y2")
var pendienter = encontrarPendiente(cordenada_x1,cordenada_y1,cordenada_x2, cordenada_y2)

function encontrarPendiente(a, b, y, z){
    var mPendiente = ((z-b) / (y-a))
    return  mPendiente 
}

console.log("La pendiente m es ", pendienter)

const ecuacion = (x) => 2 * x - 2;

// Calcular la pendiente (coeficiente de x)
const pendientef = 2;

// Calcular la intersección en el eje y (ordenada al origen)
const interseccionY = ecuacion(0);

// Calcular la intersección en el eje x
const interseccionX = -(-2) / 2; // Puedes simplificar esta expresión

// Mostrar los resultados
console.log('Pendiente:', pendientef);
console.log('Intersección en el eje Y:', interseccionY);
console.log('Intersección en el eje X:', interseccionX);

console.log("La comparacion es ", pendienter === pendientef)


var valorEquis = parseInt(prompt("Ingresa diferentes valores para encontrar x: "))

function calcularValor(x){

    var solucionEquis = x**2 + 6 * x + 9
    if(solucionEquis === 0){
        return "El valor correcto para que Y sea 0 es: => " + x
    }else{
        alert("Empieza de nuevo")
    }
    console.log(solucionEquis)
}

calcularValor(valorEquis)



var horas = parseInt(prompt("Ingrese horas trabajadas por semana: "))
var tarifa = parseInt(prompt("Cuanto le pagan por hora? "))

const calcularSalario = (x,y) => {
    const sueldoSemanal = x * y
    return "Su sueldo es " + sueldoSemanal
}

calcularSalario(horas, tarifa)


const nombrea = prompt("Ingresa tu nombre")
const apellidoa = prompt("Ingresa tu apellido")

const longitudNombre = (x) => {
    if(x.length > 7){
        return `Su nombre ${x} es largo`
    }else{
        return `Su nombre ${x} es corto`
    }
}
const comparara = (y) => {
    if ( nombrea.length > y.length ){
        return `Su nombre ${nombrea} es mas largo que su apellido ${y}`
    }else{
        return `Su apellido ${y} es mas largo que su nombre`
    }
}

longitudNombre(nombrea)
comparara(apellidoa)


12 ////////////////
var myAge 
var yourAge 

13 ////////////////////////

var edadUsuario = prompt("Cual es tu edad: ")

const examenConduir = (x) => {
    if(x > 18 || x == 18){
        return `Tienes ${edadUsuario} años. Tienes la edad suficiente para conducir.`
    }else{
            var edadFaltante = 18 - edadUsuario
         return `Tienes ${edadUsuario} años. Podrás conducir después de ${edadFaltante} años.`
    }

} 
examenConduir(edadUsuario)

14 /////////////////////////

var anosUsuario = prompt("Cuantos anos tiene usted?")


const calcularSegundos = (x) => {
    var segundos = x * 365 * 24 * 60 * 60
    return "Viviste " + segundos + "Segundos"
}

calcularSegundos(anosUsuario)

15 ///////////////////////////////////////////////////

const now = new Date();
const ano = now.getFullYear();
const mes = now.getMonth() + 1;
const dia = now.getDate();
const hora = now.getHours();
const minutos = now.getMinutes();

console.log( ano + "-" + mes + "-" + dia + " " + hora + ":" + minutos)
console.log(dia + "-" + mes + "-" + ano + " " + hora + ":" + minutos )
console.log(dia + "/" + mes + "/" + ano + " " + hora + ":" + minutos)


//** Nivel 1 Day 4/*/
1////////////////////////////////////
var edadUs = parseInt(prompt("Ingrese su edad: "))
edadUs >= 18? console.log('Tiene la edad suficiente para conducir'):console.log(`Te faltan ${18 -edadUs} años para conducir.`)
//** eje 2*/
var yourAge = parseInt(prompt("Ingrese su edad: "))
var myAge = 24
if(yourAge > myAge){
     console.log(`Eres ${yourAge - myAge} anyos mayor que yo`)
}else{
      console.log(`Soy ${myAge - yourAge} anyos mayor que tu`)
}
//** eje 3*/

let a = 4
let b = 3

if (a>b){'a es mayor que b'}
else{'a es menor que b'}

a > b? 'a es mayor que b':'a es menor que b';
'a es mayor que b'
//** eje 4*/

var infrese = prompt("Ingrese un numero")

infrese % 2 === 0? `${infrese} es un número par`: `${infrese} es un número impar`;
//** Nivel 2 Day 4/*/
var calificacion = prompt("Ingrese la calificacion:")
if(calificacion >= 80 || calificacion >= 100){"Sacaste (A)"}
else if(calificacion >= 70 || calificacion >= 89){"Sacaste (B)"}
else if(calificacion >= 60 || calificacion >= 69){"Sacaste (C)"}
else if(calificacion >= 50 || calificacion >= 59){"Sacaste (D)"}
else if(calificacion >= 0 || calificacion >= 49){"Sacaste (F)"}
else{"Ingresaste la calificacion mal"}
//** Nivel 2 Day 4, EJE 2/*/

var clima = prompt("Ingrese el mes:")
clima = clima.toLowerCase()

if(clima === "septiembre" || clima === "octubre" || clima === "noviembre"){"la temporada es Otoño"}
else if(clima === "diciembre" || clima === "enero" || clima === "febrero"){"la temporada es Invierno"}
else if(clima === "marzo" || clima === "abril" || clima === "mayo"){"la temporada es Primavera"}
else if(clima === "junio" || clima === "julio" || clima === "agosto"){"la temporada es Verano"}
else{"Ingresaste una informacion mal"}
//** Nivel 2 Day 4, EJE 3/*/

var dia = prompt("Que dia es hoy?")
dia = dia.toLowerCase()
switch(dia) {
    case "lunes":
       console.log(' Lunes es un día laborable. ')
       break;
    case "martes":
       console.log(' martes es un día laborable. ')
       break;
     case "miercoles":
       console.log(' miercoles es un día laborable. ')
       break;  
    case "jueves":
       console.log(' jueves es un día laborable. ')
       break;
    case "viernes":
       console.log(' viernes es un día laborable. ')
       break;
    case "sabado":
       console.log(' sabado es un día laborable. ')
       break;
    case "domingo":
       console.log(' domingo es un día laborable. ')
       break;
    default: console.log("Ingresa un dia de la semana")
}

//** Nivel 2 Day 4, EJE 4/*/


var mes = prompt("Que mes es hoy?")
mes = mes.toLowerCase()
switch(mes) {
    case "enero":
       console.log(' Enero tiene 31 dias  ')
       break;
    case "febrero":
       console.log(' Febrero tiene 29 dias. ')
       break;
     case "marzo":
       console.log(' Marzo tiene 31 dias. ')
       break;  
    case "abril":
       console.log(' Abril tiene 30 dias ')
       break;
    case "mayo":
       console.log(' Mayo tiene 31 dias ')
       break;
    case "junio":
       console.log(' Junio tiene 30 dias. ')
       break;
    case "julio":
       console.log(' Julio tiene 31 dias. ')
       break;
    case "agosto":
       console.log(' Agosto tiene 31 dias. ')
       break;
    case "septiembre":
       console.log(' Septiembre tiene 30 dias. ')
       break;
    case "octubre":
       console.log(' Octubre tiene 31 dias. ')
       break;
    case "noviembre":
       console.log(' Noviembre tiene 30 dias. ')
       break;
    case "diciembre":
       console.log(' Diciembre tiene tiene 31 dias. ')
       break;
    default: console.log("Ingresa un mes del ano")
}

//**Day 5 Eje 1*/
//Nivel 1*//


const array = []
const arraycincoEle = ["a","b","c","d","e"]
console.log(arraycincoEle.length)

var mitad = Math.floor(arraycincoEle.length /2)
mitad = arraycincoEle[mitad]
console.log("Este es el primer elemento", arraycincoEle[0], "Este es el ultimo elemento", arraycincoEle[arraycincoEle.length - 1],"Elemento de la mitad", mitad )
var mixedDataTypes = [true, false, 1 , 2 , 3, "a", "b", "c", null, undefined]
console.log(mixedDataTypes.length)

const itCompanies  = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"]
console.log(itCompanies)
for (let index = 0; index < itCompanies.length; index++) {
    const cambiado = itCompanies[index].toUpperCase();;
    console.log(cambiado)
    
}

const unaOracion = itCompanies.join(", ");
console.log(`${unaOracion} son grandes empresas de TI`)

console.log(itCompanies.includes("Facebook")?`Existe ${"Facebook"}`: `No existe`)

const empresasIT = ["Facebook", "Google", "Amazon", "Microsoft", "Apple", "Android", "IBM"]

const empresasCoN = []

for (let i = 0; i < empresasIT.length; i++) {
    var contador = 0
    var cambiarMinu = empresasIT[i].toLowerCase()
    for (let j = 0; j < empresasIT.length; j++) {
        empresasIT[i][j] === "o"? contador ++:undefined;

    }

      contador > 1? empresasCoN.push(empresasIT[i]): undefined;
    }


console.log(empresasCoN)

console.log(empresasIT.sort())
console.log(empresasIT.reverse())
console.log(itCompanies.splice(0,3)) --> Cortar las primeras 3 empresas del array
console.log(itCompanies.splice(-3, 3)) --> Cortar las ultimos 3 empresas del array
console.log(itCompanies.splice(3, 1)) --> Cortar las ultimos 3 empresas del array
