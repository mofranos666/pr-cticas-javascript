'use strict';

/*

const numbers= [1,3,9,14,17,22]
let counter=0;


while(counter < numbers.length)  {
    console.log(numbers[counter]);
    counter++;

}*/

/*
const edad=parseInt(prompt('años??'))

if(edad >= 18){
    alert('es mayor de edad');

}else{
    alert('es menor de edad');
}*/
/*
let numero1=parseInt(prompt('introduce el primer número'));
const operacion=prompt('introduce el tipo de operación');
let numero2=parseInt(prompt('introduce el segundo número'));
/*

switch(operacion) {
    case '+':
        alert(numero1 + numero2);
            break;
    case '-':
        alert(numero1 - numero2);
            break;
    case '/':
        alert(numero1 / numero2);
            break;
    case '*':
        alert(numero1 * numero2);
            break;
    default:
        alert('no se reconoce la operación')
            break;    

}
*/
/*
if (operacion === '+'){
    alert(numero1+numero2);

}else if (operacion === '-'){
    alert(numero1-numero2);

}else if (operacion ==='*'){
    alert(numero1*numero2);
}
        else{alert('no se reconoce el tipo de operación');}
*/
/*
const altura =4;
let pisos ='';

for(let i=0;i< altura;i++){
    pisos+='*'
    console.log(pisos)
}*/

//CREO UN OBJETO Y ACCEDO A SUS PROPIEDADES(Object.keys) Y VALORES(Object.values)                   
/*const persona ={
    edad:12,
    sexo:'masculino',
    años:35,
}        
//console.log(persona.edad);

//const keys=Object.keys(persona);
//console.log(keys);
//const values=Object.values(persona);
//console.log(values);

console.log(Object.keys(persona),Object.values(persona));

//////////////////////////////////////////////////////////////////////////////////////////////////////
//AHORA VAMOS A CLONAR EL OBJETO PERSONA
const clonado ={
    ...persona
}

console.log(clonado);

const coche= {
    modelo:'opel',
    marca:'corsa',
    color:'rojo',
}

console.log(coche);
coche.color='amarillo';
coche.anoDeMatriculación=2010;


console.log(coche);
if(confirm('para mostrar propiedades acepta,para mostrar valores cancela')){
    alert(Object.keys(coche));
}    else {
        alert(Object.values(coche));
    }
                                 
const Oscar ={
    edad:47,
    coche:'Kia',
    hijos:2,

}

if(confirm('para mostrar propiedades acepta,para mostrar valores cancela')){
    alert(Object.keys(Oscar))
}   
    else{
        alert(Object.values(Oscar))
    }
/*
let edad =parseInt(prompt('introduce la edad')) ;


    if(edad<18){
        alert('la persona es menor de edad');
    }    else{
            alert('la persona es mayor de edad');
        }
 */
        ///////////////////////////////////////////////////////
 /*let casado =prompt('eres casado o soltero');

 if(casado==='casado'){
      alert('huy que rico papi')
 }
    else if (casado==='soltero'){
        alert('papi que pena')
    }else{
        alert('aclarate papi')
    }
                                                               
/////////////////////////////////////*/

function resta (a,b,option){

    if(option===0){
       return a+b;
    }else if (option===1) {
        return a-b;

    }else {
        return'no se reconoce la operación'
    }

}

const resultado =resta(5,5,0)

console.log(resultado);

function showInfo (name,age){
    return `el chico se llama ${name} y tiene ${age} años`
}

const name =showInfo('jose',35);
console.log(name);

const showInfo2 =function(name,age){
    return `el chico se llama ${name} y tiene ${age} años`
}

const name2 =showInfo2('Paco',55);
console.log(name2);


const showInfo3 =(nombre ,edad) =>`el nombre es ${nombre}y tiene ${edad}`;
const name3=showInfo('fernando',47);
console.log(name3);

/////////////////////////////ARRAYS////////////////////////////////




const names=['lucia','paco','manuel'];

for(let i=0;i<3;i++){
    console.log(names[i]);

}

const numbers=[3,4,5,6,7,8,9,0];
const double=[];


for(const num of numbers){
    double.push(num+4);
}
console.log(double);


const numbers2=[1,2,3,4,5,6];
const sumarUno=[]

for(let i=0;i < numbers2.length;i++){

        sumarUno.push(numbers2+1)
       console.log(numbers2[i]);
}

console.log('-----------------------');

for(const num of numbers2){
    console.log(num);
}

console.log('---------------------');


let edad= parseInt(prompt('años??'));
if(edad < 13) {
    console.log("Es niño");
}else if(edad < 18 ){
     console.log("Es adolecente");
} else{
     console.log("Es mayor de edad");
}

