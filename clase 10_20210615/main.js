// Asignar valores
// =

// Comparacion valores
// ==

// Comparacion de valores y tipo de dato
// ===

// negacion
// !=

// negacion con tipos dato
// !==



var edad = 18;
var mayoriaEdad = 10;
var strMayoriaEdad = "18";

// Comparacion

// Caso 1
// console.info(edad == mayoriaEdad);

// Caso 2
// console.info(edad == strMayoriaEdad);

// casos 3
// console.info(edad === strMayoriaEdad);

// negacion

// Caso 1
// console.info(edad != mayoriaEdad);

// Caso 2
// console.info(edad !== strMayoriaEdad);


// Condicionales
// if

let valor1 = 10;
let valor2 = 10;
 
if (valor1 == valor2) {
    // console.info("los valores son iguales");
}

if (valor1 != valor2) {
    // console.info("los valores son diferentes");
}

// else

if (valor1 == valor2) {
   // console.info("los valores son iguales");
}
if (valor1 === valor2) {
    // console.info("los valores son iguales");
} else {
    // console.info("los valores son diferentes");
}



// else if

if (valor1 == valor2) {
    //console.info("los valores son iguales");
}
else if (valor1 === valor2) {
    //console.info("los valores son iguales");
}
else {
   // console.info("los valores son diferentes");
}



// operadores "<" menor que, ">" mayor que, 
// "<=" menor o igual, ">=" mayor que

let valorMayor = 300;
let valorMenor = 200;

if (valorMayor >= valorMenor) {
    console.info("Comparacion con mayor");
}
else {
    console.info("la camparacion no es mayor");
}

let inputDiametro = prompt("Ingrese el diametro");
console.info(inputDiametro)
