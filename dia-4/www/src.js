'use strict';
/*
let edad=22;

if(edad < 18) {
    console.log('tiene menos de 18 años.');
}
else if(edad>=18 && edad<45){
    console.log('la persona tiene entre 18 y 44 años');
}
else {
    console.log('la persona tiene 445 años o más');
}*/
/*
const num_a=parseInt(prompt('introduce el primer número'))
const num_b=parseInt(prompt('introduce el segundo número'))
const option= (prompt('introduce la operación'));

if(option === '+') {
    alert(num_a + num_b);
} else if(option === '-') {
    alert(num_a - num_b);
} else if(option === '*') {
    alert(num_a * num_b);
} else if(option === '/') {
    // Con este "if" nos aseguramos de que "num_b" no es 0.
    if(num_b !== 0) {
        alert(num_a / num_b);
    } else {
        alert('No es posible dividir entre 0.');
    } 
} else if(option === '**') {
    alert(num_a ** num_b);
} else {
    alert('No has seleccionado un tipo de operación correcto.');  
}
*/
/*
const car ={
    marca:'opel',
    modelo:'corsa',
    color:'negro',
}
console.log(car);

car.color='rojo';
car.anoMatriculación='2007';*/



////////////////////////////*FUNCIÓN SALUDO*/////////////////////

/*function saludo(nombre,) {
    (alert('Hola '+ nombre));
}

saludo(prompt('cuál es tu nombre??'))  */
/*
function calculadora(numero1,numero2,option){
    const numero1= parseInt(prompt('introduce el 1er número'))
    const numero2= parseInt(prompt('introduce el 2do número'))
    const option= parseInt(prompt('que operación quieres realizar?'))

    if (option='*'){
        alert(numero1*numero2);
    }
}*/











/*
const numbers=[4,10,7,1,2];
function orderArray(numArr){
    for(let i=0;< numArr.length;i++){
        if(numbers[i]>numbers[i+1]) {
    
    */
/*
const myText="Tres tristes tigres tragan trigo en un trigal";

let counter_r=0
/*console.log(myText.length);*/


/*for(let i=0;i<myText.length;i++)*/


/*

let myText ="Tres tristes tigres tragan trigo en un trigal";
     for(const letter of myText)                                {
    myText = myText.replace('e','i');
}
console.log(myText);*/

/*const myString = 'O Vicedo;Santiago;Foz;O grove;Ribadeo;Chantada;Sarria;Ponteareas';*/

//nuevo array':[O Vicedo;Santiago;Foz;O grove;Ribadeo;Chantada;Sarria;Ponteareas']

'use strict';

const numbers = [4, 10, 7, 1, 2];

function orderArray(numArr) {

    // Recorrer el array una vez no basta para ordenarlo. Nos aseguramos
    // de recorrerlo las veces suficientes. De 
    for (let k = 0; k < numArr.length; k++) {

        // Este es el "for" encargado de ordenar el array.
        for (let i = 0; i < numArr.length; i++) {

            // Comprobamos si el valor actual es > que el siguiente.
            if (numArr[i] > numArr[i + 1]) {
                // Almacenamos el valor de "numArr[i]" porque de lo contrario
                // lo perderíamos al hacer "numArr[i] = numArr[i + 1]".
                let tmp = numArr[i];
                numArr[i] = numArr[i + 1];
                numArr[i + 1] = tmp;
            }

        }

    }

    return numArr;

}

console.log(orderArray(numbers));



/* #################
 * ## Ejercicio 2 ##
 * #################
 *
 * Dados el siguiente array: [true, false, false, false, true, false, false, false, true]
 * 
 *  - Los valores positivos son infectados.
 * 
 *  - Los infectados transmiten su enfermedad a los no infectados que tienen a los lados.
 * 
 * En este caso el resultado debería ser: [true, true, false, true, true, true, false, true, true];
 * 
*/

'use strict;'

const infected = [true, false, false, false, true, false, false, false, true];

function apocalipsis(infectedArr) {

    // Creo una copia del array que paso como parámetro.
    const copyArr = [...infectedArr];

    // Recorro el array que paso como parámetro.
    for (let i = 0; i < infectedArr.length; i++) {

        if (infectedArr[i]) {
            // Compruebo que no estoy en la primera posición del array.
            if (i > 0) {
                // Modifico la copia, no el original.
                copyArr[i - 1] = true;
            }

            // Compruebo que no estoy en la última posición del array.
            if (i < infectedArr.length - 1) {
                // Modifico la copia, no el original.
                copyArr[i + 1] = true;
            }
        }

    }

    // Devuelvo la copia del array modificada.
    return copyArr;
}

// Llamamos a la función y mostramos el resultado por consola.
console.log(apocalipsis(infected));


/* #################
 * ## Ejercicio 3 ##
 * #################
 *
 * - Cuenta el número de letras "r" en el siguiente fragmento de texto:
 *   "Tres tristes tigres tragan trigo en un trigal."
 * 
 * - Ahora cuenta las "t". Debes contar las mayúsculas y las minúsculas.
 * 
 * - Sustituye todas las "e" por "i".
 * 
*/

'use strict;'

let myText = "Tres tristes tigres tragan trigo en un trigal.";

let counter_r = 0;
let counter_t = 0;

// Contador de "r".
for (const letter of myText) {
    if (letter === 'r') {
        counter_r++;
    }
}

console.log(counter_r);

// Contador de "t".
for (const letter of myText) {
    // Tengo en cuenta la "t" minúscula y la "T" mayúscula.
    if (letter === 't' || letter === 'T') {
        counter_t++;
    }
}

console.log(counter_t);

// Sustituímos todas las "e" por "i".
for (const letter of myText) {
    myText = myText.replace('e', 'i');
}

console.log(myText);



/* #################
 * ## Ejercicio 4 ##
 * #################
 *
 * - Convierte el siguiente string en un array. Utiliza como divisor el punto y coma:
 *   "O Vicedo;Santiago;Foz;O Grove;Ribadeo;Chantada;Sarria;Ponteareas"
 * 
 * - Introduce dos ubicaciones a mayores. Una en el índex 5 y otra en el índex 1.
 * 
 * - Elimina las nuevas ubicaciones.
 * 
*/

'use strict;'

const str = "O Vicedo;Santiago;Foz;O Grove;Ribadeo;Chantada;Sarria;Ponteareas";

// Utilizamos el método split y utilizamos el punto y coma como separador.
const arr = str.split(';');

console.log(arr);

// Insertamos un elemento en la posición 1.
arr.splice(1, 0, 'Rábade');

// Insertamos un elemento en la posición 5. ¡Ojo! Si insertamos primero la posición 5 
// puede que tengamos problemas. Mejor ir por orden de menor a mayor.
arr.splice(5, 0, 'Meira');

console.log(arr);

// Localizamos el índice de 'Meira'.
const indexOfMeira = arr.indexOf('Meira');

// Lo eliminamos.
arr.splice(indexOfMeira, 1);

// Localizamos el índice de 'Rábade'.
const indexOfRabade = arr.indexOf('Rábade');

// Lo eliminamos.
arr.splice(indexOfRabade, 1);

// Mostramos el array para comprobar si lo hemos eliminado correctamente.
console.log(arr);

























