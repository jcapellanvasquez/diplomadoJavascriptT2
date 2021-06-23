// Obtenemos la referencia del boton
const buton = document.getElementById("buton")

const accion = () => {
    // alert("se disparo el evento click")
    // console.log(c);

    const ancho = document.getElementById("ancho")
    const altura = document.getElementById("altura")
    const contenedor = document.getElementById("contenedor")

    // console.log(ancho.value, altura.value)

    contenedor.style.width = ancho.value;
    contenedor.style.height = altura.value;
}


// Esta es la forma de como podemos asociar una fucncion
// a un evento
buton.addEventListener('click', accion)