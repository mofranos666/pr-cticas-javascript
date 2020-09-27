'use strict';

//ordenar números
/*
const nums=[8,10,101,89,45,5];

const orderedNums = nums.sort((a,b) => a-b);
console.log(orderedNums);

*/

/*
const colors=['amarillo','blanco','azul'];

colors.map((value,index,array) => {
    console.log(value);
});*/
/*
const numbers=[3,4,12,9,20,17,5,8]

const higherThanEigth = numbers.map((num) => {
    if(num>8) {
        return num;
    }else {
        return null;
    }
});
console.log(higherThan8);
*/




/*const ages= [21, 12, 7, 19, 34, 65, 2, 5];*/ 
/*const adultAges = ages.filter((value) => value >= 7); */



//const scoreStudents = students.filter((value) => value.score >=7)

/* ############################
*  ## Calculadora "if" throw ##
*  ############################
*
*   
*
*/


const calculate = (firstNum, secondNum, typeOfOp) => {
    
    // Suma:
    if(typeOfOp === '+') {
        return `${firstNum} + ${secondNum} = ${firstNum + secondNum}`;
    } 
    
    // Resta:
    else if(typeOfOp === '-') {
        return `${firstNum} - ${secondNum} = ${firstNum - secondNum}`;
    } 
    
    // Multiplicación:
    else if(typeOfOp === '*') {
        return `${firstNum} * ${secondNum} = ${firstNum * secondNum}`;
    } 
    
    // División:
    else if(typeOfOp === '/') {
        if(secondNum === 0) {
            throw new Error ('No es posible dividir entre 0.');
        } else {
            return `${firstNum} / ${secondNum} = ${firstNum / secondNum}`;
        } 
    } 
    
    // Potencia:
    else if(typeOfOp === '**') {
        return `${firstNum} ** ${secondNum} = ${firstNum ** secondNum}`;
    } 
    
    // En caso de error:
    else {
        throw new Error ('Tipo de operación incorrecto');
    }
}

try {
    console.log(calculate(4, 2, '/'));
} catch(error) {
    console.error(error);
} 

