alert("Funcionando day 2")
var fraseUno = "El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor."
var cuantas = /amor/gi
var contador = fraseUno.match(cuantas)
console.log("El total es " + contador.length)

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

// Limpiar el texto
const cleanSentence = sentence.replace(/[^a-zA-Z\s]/g, ''); // Elimina caracteres no alfabéticos

// Convertir a minúsculas y dividir en palabras
const words = cleanSentence.toLowerCase().split(/\s+/);

// Crear un objeto para contar la frecuencia de cada palabra
const wordFrequency = {};
words.forEach(word => {
  wordFrequency[word] = (wordFrequency[word] || 0) + 1;
});

// Encontrar la palabra más frecuente
let mostFrequentWord = '';
let maxFrequency = 0;
for (const word in wordFrequency) {
  if (wordFrequency[word] > maxFrequency) {
    mostFrequentWord = word;
    maxFrequency = wordFrequency[word];
  }
}

console.log('Texto limpio:', cleanSentence);
console.log('Palabra más frecuente:', mostFrequentWord);
console.log('Frecuencia:', maxFrequency);



var texto = 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.';
var regexUno = /\d+/g;
var numerosDeTexto = texto.match(regexUno)
var valorAnual

function sacarValores(valor){
    for (var i = 0; i < numerosDeTexto.length; i++) {
        if(numeros[i] === '5000'){
            var primerSueldo = numeros[i]
             primerSueldo = primerSueldo * 12
            console.log("Este es 1 =>" + primerSueldo)
            return primerSueldo
        }else if(numeros[i] === '15000'){
            var segundoSueldo = numeros[i]
                segundoSueldo = segundoSueldo * 12
            console.log("Este es 2 =>" + segundoSueldo)
        }else{
            var tercersueldo = numeros[i]
            console.log("Este es 3 =>" + tercersueldo)
        }
    }
}