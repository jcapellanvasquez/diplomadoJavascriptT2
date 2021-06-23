const contendor = document.getElementById("contenedor");

// Referencia del elemento seleccionado
// console.info(contendor)

// Acceder a sus propiedades
// console.info(contendor.innerHTML)

// contendor.innerHTML = "Un texto generado desde Javascript"



function miFuncion() {
    console.log("funciona")
    contendor.innerHTML = "Un texto generado desde Javascript"
}

miFuncion();

const miFuncionFlecha = () => {
    console.log("mi funcion de flecha")
}

miFuncionFlecha();

const miFuncionFlecha2 = () => console.log("fucion flecha 2")
miFuncionFlecha2();

