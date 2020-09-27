'use strict';

///////////     MÉTODOS CON STRING    ////////////

let myString = '¡Métodos con strings!'; 

//Devuelve la longitud de un string.
console.log(myString.length);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Devuelve el string en minúscula.
console.log(myString.toLowerCase());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Devuelve el string en mayúscula.
console.log(myString.toUpperCase());

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Busca en el string un elemento de izquierda a derecha:
//Si lo encuentra devuelve el índice de dicho elemento.
//Si no lo encuentra devuelve "-1".
//Si hay varios elementos iguales devuelve el índice del primero que encuentre.
console.log(myString.indexOf('o')); // Devuelve 4 porque es el index de la primera "o". 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Funciona igual que el indexOf( ) pero recorre el string de derecha a izquierda.
console.log(myString.indexOf('e')); // Devuelve -1 porque no hay ninguna "e".

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Devuelve un string repetido tantas veces como se indique en el parámetro.
// Nos devolverá un string donde se repita 5 veces el contenido de la variable "myString". 
console.log(myString.repeat(5));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Busca una coincidencia en un string y, si existe, la reemplaza por otro string. Este método recorre el array de izquierda a derecha.
// En este caso estamos buscando en el myString la palabra "string". Si la palabra "strings" 
// existe, será substituída por la palabra "arrays". Si "strings" se repitiera dos veces, 
// este método solo cambiaría la primera coincidencia que encuentre. 
let newString = myString.replace('strings', 'arrays'); 
console.log(newString); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Si queremos que TODAS las coincidencias sean subsituídas, podemos utilizar el bucle "for" 
// de la siguiente manera. En este caso estamos substituyendo los espacios por nada, es decir, 
// con esto simplemente eliminaremos todos los espacios. 
for (let i = 0; i < myString.length; i++) { 
    myString = myString.replace(' ', ''); 
} 
console.log(myString);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Corta una cadena en base a un separador que pasamos como parámetro.
// Esto nos devuelve un array con todos los caracteres del string por separado. 
console.log(myString.split('')); 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Esto nos devuelve un array en el que separa el string donde haya un espacio. 
console.log(myString.split(' ')); 
// Vamos a definir una hora del día. 
let time = '22:30'; 
// Así podríamos separar las horas de los minutos. 
console.log(time.split(':'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////  MÉTODOS CON ARRAYS  ///////////////////////////////////////////////////////////////////////////////////////////


'use strict'; 

//lenght
//Devuelve la longitud de un array.

let fruits = ['manzana', 'pera', 'plátano', 'pera', 'naranja']; 

// Nos devolverá un 5 dado que en este array hay 5 elementos. Eso no quiere decir que la última 
// posición sea la [5], la última posición es la [4] dado que la primera posición de un array SIEMPRE 
// será la posición [0]. 
console.log(fruits.length); // 5

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//indexOf( )
//Busca en el array un elemento de izquierda a derecha:

//Si lo encuentra devuelve el índice de dicho elemento.
//Si no lo encuentra devuelve "-1".
//Si hay varios elementos iguales devuelve el índice del primero que encuentre.

console.log(fruits.indexOf('pera')); // Devuelve 1 porque es el primer index de "pera". 
console.log(fruits.indexOf('uva')); // Devuelve -1 porque no hay ninguna "uva".

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lastIndexOf( )
//Funciona igual que el indexOf( )  pero recorre el array de derecha a izquierda.
console.log(fruits.lastIndexOf('pera')); // Devuelve 3 porque es el último index de "pera". 
console.log(fruits.lastIndexOf('uva')); // Devuelve -1 porque no hay ninguna "uva".

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//push(item)
//Inserta al final del array el elemento que pasemos como parámetro.
// Con esto estaremos añadiendo el string "uva" después de naranja, es decir, al final del array.
fruits.push('uva'); 

console.log(fruits);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//pop( )
//Elimina el último elemento de un array y devuelve el valor eliminado.
// Con esto estaremos eliminando el string "naranja" dado que es el último elemento del array y lo estaremos 
// almacenando en una nueva variable. 
const lastItem = fruits.pop(); 

console.log(lastItem); // "naranja" 

console.log(fruits); // ["manzana", "pera", "plátano", "pera"]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//unshift(item)
//Inserta al inicio del array el elemento que pasemos como parámetro.
// Con esto estaremos añadiendo el string "uva" a la izquierda de "manzana", es decir, al inicio del array. 
fruits.unshift('uva'); 

console.log(fruits);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//shift( )
//Elimina el primer elemento de un array y devuelve el valor eliminado.
// Con esto estaremos eliminando el string "manzana" dado que es el primerelemento del array y lo
// estaremos almacenando en una nueva variable. 
const firstItem = fruits.shift(); 

console.log(firstItem); // "manzana" 

console.log(fruits); // ["pera", "plátano", "pera", "naranja"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//reverse( )
//Invierte el orden de los elementos del array.
console.log(fruits.reverse()); // ["naranja", "pera", "plátano", "pera", "manzana"]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//join( )
//Une los elementos del array en un array. Se debe indicar cómo queremos unir los elementos introduciendo un parámetro.
// En este caso vamos a unir los elementos del array sin dejar ningún espacio entre ellos. 
console.log(fruits.join('')); 

// Ahora vamos a unir los elementos del array insertando un guión entre cada elemento. 
console.log(fruits.join('-'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//splice(index, limit)
//Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// El primer parámetro siempre hará referencia al índice del array del que queremos partir. 
//El segundo elemento se usa para indicar cuantos elementos (a la derecha de la posición seleccionada) queremos eliminar.
let fruits2 = ['manzana', 'pera', 'plátano', 'pera', 'naranja']; 
// Eliminamos el elemento que se encuentra en el index 2 (primer parámetro) "plátano" y lo almacenamos
// en una nueva variable. En este caso hemos puesto 1 como segundo parámetro, por tanto se eliminará 
// unicamente el elemento de partida "plátano". Si cambiamos este 1 por un 0, no se eliminará ningún 
// elemento, si pusiésemos un 2 se eliminaría "plátano" y "pera". 
const spliceItems = fruits2.splice(2, 1); 

console.log(spliceItems); // "plátano" 

console.log(fruits2); // ["manzana", "pera", "pera", "naranja"]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//12. Manejo de errores
//En ocasiones nuestro código puede fallar debido a un problema con el servidor o a algún error que hayamos cometido. En estos casos, lo que suele ocurrir es que el código se detiene inmediatamente imprimiéndose un mensaje de error en la consola.

//Existe la posibilidad de "atrapar" esos errores para decidir qué hacer con ellos.
//try...catch
//En primer lugar se ejecuta el bloque de try. Si no se produce ningún error, el bloque catch es ignorado. Solo en caso de que se produzca un error en el primer bloque se ejecutaría el catch:

try {
    // Código
} catch (error) {
    // Manejo del error.
}
//Veamos ahora un ejemplo llevado a la práctica:
// Esta función nos devuelve un mes en función del nº que pasemos como parámetro (1 = Ene, 12 = Dic).
function getMonthName(monthNumber) { 
    // El primer índice del array es 0, así que adaptamos el mes instroducido por el usuario.
    const mon = monthNumber - 1;  

    let months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']; 

    if (months[mon]) { 
        return months[mon]; 
    } else { 
        // La sentencia "throw" permite lanzar una excepción. Debemos especificar el valor de la excepción. 
        throw 'InvalidMonthNumber'; 
    } 
} 

try { 
    // En este caso saltará el "catch" dado que no existe el mes 13. Puedes probar a insertar un
    // mes entre el 1 y el 12 para que veas que no salta al "catch" al no haber errores en el "try".
    getMonthName(13); 
} catch (error) { 
    console.error(error); 
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

