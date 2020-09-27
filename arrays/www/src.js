'use strict';

// Crear un array vacío. 
const empty_1 = Array(); 
const empty_2 = []; 

console.log(empty_1, empty_2); 

// Crea un array con 3 posiciones vacías. 
const empty_3 = Array(3); 

console.log(empty_3); 

// Crea un array con 3 strings. 
const colors_1 = Array('azul', 'rojo', 'verde'); 
const colors_2 = ['azul', 'rojo', 'verde']; 

console.log(colors_1, colors_2);

// Lo normal es utilizar este método y no "Array()". 
const myArray = [true, 34, ['azul', 'rojo']]; 

// La primera posición de un array siempre es el índex 0. 
console.log(myArray[0]); // Tipo "boolean" 

// Segunda posición del array. 
console.log(myArray[1]); // Tipo "number" 

// Esta es la última posición del array. Tened cuidado porque aunque el array de este 
// ejemplo tiene tres elementos, el último de ellos no es el 3, si no el 2.
console.log(myArray[2]); // Tipo "array" 

// Si os fijáis, el último elemento de este array es otro array. Recuerda que un array puede 
// contener cualquier tipo de dato, incluso otros arrays. Para acceder a la primera posición  
// del array que está dentro del array, es decir, a "rojo", debemos indicar el nombre del array 
// principal "myArray" seguido de la posición donde se encuentra el array interno "[2]" y finalmente 
// la posición del array interno a la que queramos acceder. En este caso la posición 2 "[1]". 
// Recuerda que la posición 1 es la [0].
console.log(myArray[2][1]);

const colors = ['azul', 'rojo', 'verde']; 

console.log(colors.length); // 3 

// En este caso "colors.length" es lo mismo que poner manualmente "i < 3". Insistimos en que la 
// primera posición de un array SIEMPRE será la posición 0. Por tanto la última posición siempre 
// será "nombreDelArray.length - 1", en este caso la posición [2]. 
for (let i = 0; i < colors.length; i++) { 
    // La variable "i" va pasando por todas las posiciones del 0 al 2. 
    console.log(colors[i]); 
} 

// Para modificar el contenido de una posición del array basta con hacer referencia a dicha posición 
// y asignarle un nuevo valor. 
colors[2] = 'negro'; 

console.log(colors); // ["azul", "rojo", "negro"]; 

// Con el "for" podriamos cambiar el valor de todas las posiciones por un  mismo valor si quisiéramos, 
// por ejemplo, por el color "violeta". 
for (let i = 0; i < colors.length; i++) { 
    colors[i] = 'violeta'; 
} 

console.log(colors); // ["violeta", "violeta", "violeta"]

const names=['sara','lucia','paco','luis','jose','julio'];//valores

for(let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//for of
for(const valores of names){
    console.log(valores);
}

const numbers =[3,5,8,9];

for(const num of numbers){
    console.log(num+2);
}

//método PUSH
const numbers1 =[6,7,3,8,2,9,];
const numbers2 =[];
for(const num of numbers1){
    numbers2.push(num*2);
}
console.log(numbers2);

//length
let myString1 = '¡Métodos con strings!'; 

console.log(myString1.length);

//toLowerCase( )
let myString2 = '¡Métodos con strings!'; 

console.log(myString2.toLowerCase());

//toUpperCase( )
let myString3 = '¡Métodos con strings!'; 

console.log(myString3.toUpperCase());

//indexOf( )
let myString4 = '¡Métodos con strings!'; 

console.log(myString4.indexOf('o')); // Devuelve 4 porque es el index de la primera "o". 

console.log(myString4.indexOf('e')); // Devuelve -1 porque no hay ninguna "e".

//lastIndexOf( )
let myString5 = '¡Métodos con strings!'; 

console.log(myString5.lastIndexOf('o')); // Devuelve 10 porque es el index de la última "o". 

console.log(myString5.lastIndexOf('e')); // Devuelve -1 porque no hay ninguna "e".

//repeat( )
let myString6 = '¡Métodos con strings!'; 

// Nos devolverá un string donde se repita 5 veces el contenido de la variable "myString6". 
console.log(myString6.repeat(5));

//replace(string, newString)////////////////////////////////////////////////////////////////////////////////
let myString7 = '¡Métodos con strings!'; 

// En este caso estamos buscando en el myStringla palabra "string". Si la palabra "strings" 
// existe, será substituída por la palabra "arrays". Si "strings" se repitiera dos veces, 
// este método solo cambiaría la primera coincidencia que encuentre. 

let newString = myString7.replace('strings', 'arrays'); 

console.log(newString); 

// Si queremos que TODAS las coincidencias sean subsituídas, podemos utilizar el bucle "for" 
// de la siguiente manera. En este caso estamos substituyendo los espacios por nada, es decir, 
// con esto simplemente eliminaremos todos los espacios. 

for (let i = 0; i < myString7.length; i++) { 
    myString7 = myString7.replace(' ', ''); 
} 

console.log(myString7);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//split( )
let myString8 = '¡Métodos con strings!'; 

// Esto nos devuelve un array con todos los caracteres del string por separado. 
console.log(myString8.split('')); 

// Esto nos devuelve un array en el que separa el string donde haya un espacio. 
console.log(myString8.split(' ')); 

// Vamos a definir una hora del día. 
let time = '22:30'; 

// Así podríamos separar las horas de los minutos. 
console.log(time.split(':'));


//11. Métodos con arrays
//Del mismo modo, los arrays también tienen sus propios métodos. Algunos son idénticos a los que hemos visto en el apartado anterior.
//lenght

let fruits = ['manzana', 'pera', 'plátano', 'pera', 'naranja']; 

// Nos devolverá un 5 dado que en este array hay 5 elementos. Eso no quiere decir que la última 
// posición sea la [5], la última posición es la [4] dado que la primera posición de un array SIEMPRE 
// será la posición [0]. 
console.log(fruits.length); // 5

//indexOf( )
let fruits1 = ['manzana', 'pera', 'plátano', 'pera', 'naranja']; 

console.log(fruits1.indexOf('pera')); // Devuelve 1 porque es el primer index de "pera". 
console.log(fruits1.indexOf('uva')); // Devuelve -1 porque no hay ninguna "uva".


//lastIndexOf( )
let fruits2 = ['manzana', 'pera', 'plátano', 'pera', 'naranja']; 

console.log(fruits2.lastIndexOf('pera')); // Devuelve 3 porque es el último index de "pera". 
console.log(fruits2.lastIndexOf('uva')); // Devuelve -1 porque no hay ninguna "uva".

//push(item)
let fruits3 = ['manzana', 'pera', 'plátano', 'pera', 'naranja']; 

// Con esto estaremos añadiendo el string "uva" después de naranja, es decir, al final del array.
fruits3.push('uva'); 

console.log(fruits3);

//pop( )
let fruits4 = ['manzana', 'pera', 'plátano', 'pera', 'naranja']; 

// Con esto estaremos eliminando el string "naranja" dado que es el último elemento del array y lo estaremos 
// almacenando en una nueva variable. 
const lastItem = fruits4.pop(); 

console.log(lastItem); // "naranja" 

console.log(fruits4); // ["manzana", "pera", "plátano", "pera"]