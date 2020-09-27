'use strict';
/*

alert('¡Esto es un mensaje importante!'); 

// Este console.log no se ejecutará hasta que cerremos el alert. 
console.log('Yo me ejecuto después de cerrar el alert.');

confirm('¡Confirma este mensaje!');

const nombre = prompt('¿Cuál es tu nombre?'); 
let edad = prompt('¿Cuál es tu edad?'); 

// En base a lo aprendido sobre Template Strings vamos a ver cómo podemos crear nuestro primer 
// mensaje personalizado. ;) 
alert(`Mi nombre es ${nombre} y tengo ${edad} años.`);

// Los números almacenados serán de tipo "string". 
const numA = prompt('Dime el primer número: '); 
const numB = prompt('Dime el segundo número: '); 

// En este "alert" estamos concatenando dos "strings". 
alert(numA + numB); 

// Ahora vamos a cambiar el tipo de las variables a "number". 
confirm(parseInt(numA) + parseInt(numB));*/
/*
let coche = { 
    modelo: 'Ford', 
    marca:'Mustang', 
    color: 'negro', 
     
};

console.log (coche);
coche.color ='rojo';
coche.anoMatriculación ='2009'
if(confirm('para mostrar propiedades acepta el confirm. Para mostrar valores cancela.')) {
    alert(Object.keys(coche));
}   else {
    alert(Object.values(coche));
}
*/
/*
// Crear un array vacío. 
const empty_1 = Array(1,2,3,4,5,6); 
const empty_2 = []; 

console.log(empty_1, empty_2); 

// Crea un array con 3 posiciones vacías. 
const empty_3 = Array(3); 

console.log(empty_3); 

// Crea un array con 3 strings. 
const colors_1 = Array('azul', 'rojo', 'verde'); 
const colors_2 = ['azul', 'rojo', 'verde']; 

console.log(colors_1, colors_2);*/




/* #################
*  ## Ejercicio 1 ##
*  #################
*
* - Crea el objeto coche y asígnale las propiedades modelo, marca y color.
* 
* - Muestra el objeto por medio de un "console.log".
* 
* - Modifica el valor de la propiedad color y agrega la propiedad año de 
*   matriculación.
* 
* - Utiliza un "confirm" para mostrar por consola las propiedades, o los
*   valores. Si la persona acepta el "confirm" se mostrarán las propiedades,
*   de lo contrario, se mostrarán los valores.
* 
*/

'use strict';

const car = {
    brand: 'Opel',
    model: 'Astra',
    color: 'negro'
}

console.log(car);

car.color = 'rojo';
car.anoMatriculacion = '2007';

if(confirm('Para mostar propiedades acepta el confirm. Para mostrar valores cancela.')) {
    alert(Object.keys(car));
} else {
    console.log(Object.values(car));
} 



/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * - Crea una función "showInfo()" a la que le pases como parámetros un nombre y una edad y nos devuelva 
 *   ambos parámetros. Muestra lo que devuelva la función por consola. Aplica lo aprendido sobre "template 
 *   strings" (template literals).
 * 
 * - Llama a la función dos veces con parámetros distintos.
 * 
 * - Debes crear una declaración de función, una expresión de función y una arrow function.
 * 
*/



const name = 'Lucía';
const age = 25;

// Declaración de función.
function showInfo_1(userName, userAge) {
    return `El nombre es ${userName} y la edad es ${userAge}.`;
}

console.log(showInfo_1(name, age));

// Expresión de función.
const showInfo_2 = function(userName, userAge) {
    return `El nombre es ${userName} y la edad es ${userAge}.`;
}

console.log(showInfo_2('Manu', 65));

// Arrow function.
const showInfo_3 = (userName, userAge) => `El nombre es ${userName} y la edad es ${userAge}.`;

console.log(showInfo_3('Sara', 30));


/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * Dado el array = [1, 3, 9, 14, 17, 22]
 * 
 *  - Iterar por todos los elementos dentro de un array utilizando "while" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for" y mostrarlos en pantalla.
 *
 *  - Iterar por todos los elementos dentro de un array utilizando "for of" y mostrarlos en pantalla.
 *
 *  - Mostrar todos los elementos dentro de un array sumándole uno a cada uno. 
 *
 *  - Generar otro array con todos los elementos del primer array incrementados en 1. ¿Con el método push?
 *
 *  - Calcular el promedio.
 * 
*/

'use strict;'

// Este es el array que vamos a utilizar para el ejercicio.
const numbers = [1, 3, 9, 14, 17, 22];

// Declaramos un contador para usar en el "while".
let counter = 0;

// Iterar por todos los elementos utilizando "while" y mostrarlos en pantalla.
while(counter < numbers.length) {
    console.log(numbers[counter]);
    counter++;
}

console.log('-------------');

// Iterar por todos los elementos utilizando "for" y mostrarlos en pantalla.
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log('-------------');

// Iterar por todos los elementos utilizando "for of" y mostrarlos en pantalla.
for(const num of numbers) {
    console.log(num);
}

console.log('-------------');

// Iterar por todos los elementos y mostrarlos en pantalla sumándoles 1 unidad.
for(const num of numbers) {
    console.log(num + 1);
}

console.log('-------------');

// Declaramos un array vacío en el que pushearemos varios elementos.
const numbersOne = [];

// Generar otro array con todos los elementos del primer array incrementados en 1.
for(const num of numbers) {
    numbersOne.push(num + 1);
}

console.log(numbersOne);

console.log('-------------');

// Declaramos una variable donde almacenaremos la suma de los elementos del array.
let total = 0;

for(let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}

// Hayamos el promedio.
const average = total / numbers.length;

console.log(average);
