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