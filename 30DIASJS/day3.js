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