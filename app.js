"use strict";
// Declarar variables en js
// Var variable global
// Let variable
// Const constante
// Let y const nacen porque son variables con alcance o scope

// let nombre = prompt('Dame tu nombre');
// console.log(nombre);
// document.write(nombre);

// tipos de datos
// let texto = 'Mi nombre es Santiago, "otro texto"';
// console.log(texto);

// let numero = 4;
// console.log(numero);

// let edad = prompt('Dame tu edad');
// Number(edad);
// console.log(edad - 5); 
// console.log(typeof(edad) - 5); 
// console.log(edadMenos);

// let suma = true;

// let menor = (10<5);
// console.log(menor);

// let fecha = new Date();
// console.log(fecha);

//Operadores Aritmeticos

// let suma = 1+2;
// let resta = 1-2;
// let multiplicacion = 1*2;
// let division = 1/2;
// let residuo = 10%5;//Mod o Residuo

// let uno = 1;
// uno++; //Incremento
// console.log(uno);

// let dos = 2;
// dos--; //Decremento
// console.log(dos);

// // Operadores Relacionales

// let mayor = 5>3;
// let menor = 3<5;
// let mayorIgualQue = 20>=10;
// let menorIgualQue = 20<=10;
// let igual = 10=='10';
// let exactamenteIgual = 10 === 10;
// let diferente = 10 != 30;
// console.log(diferente);


// TIPOS DE DATOS ESPECIALES O COMPUESTOS

// Array []
let frutas = ['peras','manzanas','sandias'];

// Objetos
let persona = {nombre:'santiago', edad:'18', correo:'svalencia7@ucol.mx'}

// Objetos JSON (JavaScript Object Notation)
// Formato de intercambio de datos ligero y descriptivo
// Es un array de objetos

let personas = [
    {nombre:'chantal', edad:'18', correo:'svalencia7@ucol.mx'},
    {nombre:'leo', edad:'18', correo:'svalencia7@ucol.mx'},
    {nombre:'pablo', edad:'18', correo:'svalencia7@ucol.mx'},
    persona,
]

// Los Array inician en posicion 0

// Operadores Logicos

// ENGLISH /O/ ESPAÑOL

// AND /O/ Y

let numero1 = 10;
let numero2 = 14;

let and = (numero1>10 && numero2>10);

// Para que un AND sea true, ambas condiciones o todas (en el caso de que sean mas)
// deben de cumplir, en caso contrario sera false

// OR /O/ O

let or = (numero1>10 || numero2 > 10);

// Para que un OR sea true, con solo una condicion que cumpla sera necesario
// Si ninguna de las condiciones cumple este sera false

// NOT /O/ NEGACION

let not = !(numero1 > 10);

// Para que un NOT sea true, se niega una condicion que ya era false
// como numero1 no es mayor a 10, la negacion lo convertira en true.

