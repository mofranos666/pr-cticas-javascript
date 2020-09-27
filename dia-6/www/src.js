'use strict';
/*
const nums= [7, 3, 2, 3]; 

// En este caso el acumulador irá almacenando la suma de todos los números del array. 
const sum_1 = nums.reduce((accumulator, value) => accumulator += value); 

console.log(sum_1); // 15*/





//utiliza reduce para sumar todos los valores del array.acumulador vale 100
/*
const euros =[29, 41 ,46]

// En este caso el acumulador irá almacenando la suma de todos los números del array. 
const suma = euros.reduce((accumulator, value) =>   { 
    return accumulator += value                                   //accumulator += value)
}, 100); 
console.log(suma); 


/*
const nums= [7, 3, 2, 3]; 

// En este caso el acumulador irá almacenando la suma de todos los números del array. 
const sum = nums.reduce((accumulator, value) => { 
    return accumulator += value 
}, 10); // Con este 10 indicamos que "accumulator" empieza en 10.

console.log(sum_1); // 25   */


//devuelve con reduce un array donde los valores sean 3 veces los del array original(x3)//
//const numbers=[7,14,5,2];


/*const suma = numbers.reduce((accumulator, value) =>   { 
    return accumulator += (value*3)                                   //accumulator += value)
}, ); 
console.log(suma);//*/
/*
const numbers=[7,14,5,2];
const triple = numbers.reduce((accumulator, value) => { 
    // Hacemos un "push" al array "accumulator". 
    accumulator.push(value * 3); 

    // Devolvemos el array.
    return accumulator; 
}, []); // Con este "[]" indicamos que "accumulator" es un array vacío. 

console.log(triple); // [21, 42, 15, 6]     */

//Devuelve con reduce un nuevo array donde se filtran los valores superiores a 30.//////////////////////////
/*
const euro= [29,41,46,11,34,0];
const mayor30 = euro.reduce((accumulator, value) => { 
    if(value>30) {
        accumulator.push(value); 
}
    return accumulator; 
}, []);  

console.log(mayor30); */
/////////////////////////////////////////////////////////////////////////////////////////////////////

/*

const fruits = ['manzana', 'pera', 'plátano', 'pera', 'naranja'];

console.log(fruits.some((value) => value === 'naranja')); // true

console.log(fruits.some((value) => value === 'cereza')); // false*/


//crea un objeto con reduce donde las propiedades sean las distintas 
//letras  que aparecen en un string, y los valores sean el número de
 //veces que se repite esa letra en elstring. Ignora los espacios y los puntos.


 const persons = [
    {
      name: 'Pedro',
      age: 35,
      country: 'ES',
      infected: true,
      pet: 'Troski'
    },
    {
      name: 'Elisabeth',
      age: 14,
      country: 'UK',
      infected: true,
      pet: 'Firulais'
    },
    {
      name: 'Pablo',
      age: 25,
      country: 'ES',
      infected: false,
      pet: 'Berritxu'
    },
    {
      name: 'Angela',
      age: 18,
      country: 'DE',
      infected: false,
      pet: 'Noodle'
    },
    {
      name: 'Boris',
      age: 50,
      country: 'UK',
      infected: true,
      pet: 'Leon'
    },
    {
      name: 'Donald',
      age: 69,
      country: 'US',
      infected: false,
      pet: 'Pence'
    }
  ];
  
  const pets = [
    {
      name: 'Troski',
      animal: 'perro'
    },
    {
      name: 'Firulais',
      animal: 'perro'
    },
    {
      name: 'Berritxu',
      animal: 'loro'
    },
    {
      name: 'Noodle',
      animal: 'araña'
    },
    {
      name: 'Leon',
      animal: 'gato'
    },
    {
      name: 'Pence',
      animal: 'perro'
    }
  ];
  
  const animals = [
    {
      name: 'perro',
      legs: 4
    },
    {
      name: 'araña',
      legs: 8
    },
    {
      name: 'gato',
      legs: 4
    },
    {
      name: 'loro',
      legs: 2
    },
    {
      name: 'gallina',
      legs: 2
    }
  ];
  
  // Población en millones
  const countries = [
    {
      code: 'CN',
      name: 'China',
      population: 1439,
      infected: 81999
    },
    {
      code: 'US',
      name: 'Estados Unidos',
      population: 331,
      infected: 112468
    },
    {
      code: 'DE',
      name: 'Alemania',
      population: 83,
      infected: 56202
    },
    {
      code: 'ES',
      name: 'España',
      population: 46,
      infected: 72248
    },
    {
      code: 'UK',
      name: 'Reino Unido',
      population: 67,
      infected: 17301
    }
  ];
  
  // 1. Número total de infectados.


const totalInfected = persons.filter((value) => value.infected).length; 

/////////////////////////////////////////////////////////////////////////////////console.log(totalInfected);
  
  // 2. Número total de sanos.                              ///exclamación devuelve un false////

  const totalPersonasSanas = persons.filter((value) => !value.infected).length; 

  /////////////////////////////////////////////////////////////////////////////////console.log(totalPersonasSanas);
  
  // 3. Número total de infectados en el array de países.

  const totalCountry = country.filter((value) => value.infected).length; 

  /////////////////////////////////////////////////////////////////////////////////console.log(totalCountry);
  const totalInfectedCountry = countries.reduce((acc,country) => {
      return acc + country.infected;
  },0);
  // 4. País con más infectados.


  const masInfectedCountry = countries.filter((acc,country) => {
      const country
    return acc + country.infected;
},0);

  
  // 5. Número de total de infectados en el array de personas.
  
  // 6. Array con el nombre de todas las mascotas.
  
  // 7. Array con las personas infectadas del array de personas.
  
  // 8. Array de españoles con perro.
  
  // 9. Array con las personas. A mayores, este array debe incluír el objeto con los datos de su mascota
  
  // 10. A partir del array de personas deduce el animal que tienen más personas como mascota.
  
  // 11. Número total de patas de las mascotas de las personas.
  
  // 12. Array con las personas que tienen animales de 4 patas
  
  // 13. A partir del string 'España' obtener un array de personas no infectadas de ese país. Por tanto,
  //     deberás partir del array de países.
  
  // 14. Array de países que tienen personas con loros como mascota.
  
  // 15. Número de infectados totales (en el array de países) de los países con mascotas de ocho patas.
  
