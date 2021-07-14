function guardarGastos(gasto) {
    let listadoGastos = obtenerListadoGastos()
    listadoGastos.push(gasto)
    actulizarLista(listadoGastos)
}

function obtenerListadoGastos() {
    let listadoGastos = JSON.parse(localStorage.getItem("listado_gastos"))
    if (listadoGastos == null) {
        listadoGastos = [];
        actulizarLista(listadoGastos)
    }
    return listadoGastos;
}

function actulizarLista(listadoGastos) {
    localStorage.setItem("listado_gastos", JSON.stringify(listadoGastos))
}

function setInvalid(input, mensaje) {
    input.focus()
    input.classList.add("is-invalid");
    input.nextElementSibling.classList.add('invalid-feedback')
    input.nextElementSibling.classList.remove('valid-feedback')
    input.nextElementSibling.innerHTML = mensaje;
}

function removeInvalid(input) {
    input.classList.remove("is-invalid");
    input.nextElementSibling.innerHTML = '';
}

function setValid(input, mensaje) {
    input.focus()
    // agregamos al input la clase de valid - que lo torna de color verde
    input.classList.add("is-valid");

    // removemos la clase invalid-feedback que torna de color
    // rojo el mensaje de texto debajo del input
    input.nextElementSibling.classList.remove('invalid-feedback')

    // agregamos la clase valid-feedback que torna de color
    // verde el mensaje de texto debajo del input
    input.nextElementSibling.classList.add('valid-feedback')

    // Agregamos un mensaje de exito para el usuario
    // input.nextElementSibling.innerHTML = mensaje;
}