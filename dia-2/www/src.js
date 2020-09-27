'use strict';

/******************** 
const height =4;
let floor=''

for(let i = 0; i < height; i++) {

    floor += '*';
    console.log(floor);
} *//////////////////////

/* for(let i = 100; i >= 0; i -= 25) {
    console.log(i);
} */
 


/* ########################
 * ## Desactiva la bomba ##
 * ########################
 *
 * 
 * Llegó el momento de poner en práctica todo lo aprendido hasta ahora para...
 * ¡¡DESACTIVAR UNA BOMBA!! Tranquilos, no tenemos que ser expertos en explosivos.
 * Se trata de crear un juego en el que damos al usuario 5 intentos para tratar de
 * desactivar la bomba. 
 * 
 * Estos son los pasos que debes seguir para tratar de conseguir el objetivo:
 * 
 *  - Generar un nº aleatorio del 1 al 10. Existe una función en JavaScript que 
 *    nos permite generar un nº al azar, ¿por qué no investigas un poco?
 * 
 *  - Una vez hayamos generado el nº de desactivación daremos al usuario un total
 *    de 5 intentos para tratar de averigual en nº en cuestión. 
 * 
 *  - Si acierta detenemos el bucle y mostramos un mensaje que indica que la bomba
 *    ha sido desactivada. De lo contrario indicamos que la bomba ha explotado.
*/
/*
'use strict';

// Generamos un nº aleatorio.
const password = Math.ceil(Math.random() * 10);

// Damos al usuario 5 intentos.
for(let i = 0; i < 5; i++) {
    
    // Permitimos al usuario insertar un nº.
    const userPassword = parseInt(prompt('Inserte la contraseña:'));

    // Comprobamos si el usuario ha acertado.
    if(userPassword === password) {
        alert('¡Vives un día más!');
        break;
    }

    // Si el usuario ha agotado los intentos y no ha acertado.
    if(i === 4 && userPassword !== password) {
        alert('¡BOOOOOOOOOOM!');
    }

}*/

/*
'use strict';

const num_a = parseInt(prompt('Introduce el 1er nº:'));
const num_b = parseInt(prompt('Introduce el 2º nº:'));
const option = prompt('Selecciona el tipo de operación: suma(+), resta(-), multiplicación(*), división(/) y potencia(**).'); 


// En este caso he aprovechado lo aprendido sobre "template literals" o "template strings" para
// mostrar por consola la operación realizada. ¡Echad un ojo! ;)


switch(option) {
    case '+':
        console.log(`${num_a} + ${num_b} = ${num_a + num_b}`);
        break;

    case '-':
        console.log(`${num_a} - ${num_b} = ${num_a - num_b}`);
        break;

    case '*':
        console.log(`${num_a} * ${num_b} = ${num_a * num_b}`);
        break;

    case '/':
        // Con este "if" nos aseguramos de que "num_b" no es 0.
        if(num_b === 0) {
            console.log('No es posible dividir entre 0.');
        } else {
            console.log(`${num_a} / ${num_b} = ${num_a / num_b}`);
        } 
        break;

    case '**':
        console.log(`${num_a} ** ${num_b} = ${num_a ** num_b}`);
        break;

    default:
        console.log('No has seleccionado un tipo de operación correcto.');
        break;
} */
/* ###################################
 * ## Calculadora "if" con prompt() ##
 * ###################################
*/
/*
'use strict';

const num_a = parseInt(prompt('Introduce el 1er nº:'));
const num_b = parseInt(prompt('Introduce el 2º nº:'));
const option = prompt('Selecciona el tipo de operación: suma(+), resta(-), multiplicación(*), división(/) y potencia(**).');  

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

/* ################
 * ## Pirámide 1 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a 
 * continuación se ha tomado como referencia una altura de 4: 
 * 
 * - Figura 1:
 * 
 *      *
 *      **
 *      ***
 *      ****
*/
/*
'use strict';

// Introducimos la altura.
const height = 4;

// Variable que almacena los símbolos de cada línea.
let floor = '';

// Bucle "for".
for(let i = 0; i < height; i++) {
    floor += '*';
    console.log(floor);
} 
*/
/* ################
 * ## Pirámide 2 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a 
 * continuación se ha tomado como referencia una altura de 4: 
 * 
 * - Figura 2:
 * 
 *        *
 *       **
 *      ***
 *     ****
*/
/*
'use strict';

// Introducimos la altura.
const height = 4;

// Variable que almacena los símbolos de cada línea.
let floor = '';

// Bucle "for" que se repite tantas veces como líneas deba imprimir, en este caso 4, dado que la 
// altura es de 4.
for(let i = 0; i < height; i++) {

    // Metemos los espacios de la línea actual.
    for(let spaces = (height - 1) - i; spaces > 0; spaces--) {
        floor += ' ';
    }

    // Metemos los asteriscos de la línea actual.
    for(let asterisk = 1 + i; asterisk > 0; asterisk--) {
        floor += '*';
    }

    // Imprimo la línea.
    console.log(floor);

    // Borro el contenido de la línea para preparar la siguiente. De lo contrario mantendríamos 
    // los espacios y asteriscos de anteriores líneas.
    floor = '';
} 

*/

/* ################
 * ## Pirámide 3 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a 
 * continuación se ha tomado como referencia una altura de 4: 
 * 
 * - Figura 3:
 * 
 *        *
 *       ***
 *      *****
 *     *******
*/
const height =4;
let floor = '';
for(let i = 0; i < height; i++) {
    
}

/* ################
 * ## Pirámide 4 ##
 * ################
 *
 * Utiliza el bucle "for" para crear las siguiente figura con asteriscos (*). Debe existir una
 * variable que permita modificar la altura de la pirámide. Para el ejemplo expuesto a 
 * continuación se ha tomado como referencia una altura de 4: 
 * 
 * - Figura 4:
 * 
 *        *
 *       ***
 *      *****
 *     *******
 *      *****
 *       ***
 *        *
*/
