

window.addEventListener('load', event => {


    const formularioGastos = document.getElementById("formulario-gastos")

    formularioGastos.addEventListener('submit', event => {
        event.preventDefault()

        let descripcion = event.target.elements['descripcion'].value;

        if (descripcion.length === 0) {
            setInvalid(
                event.target.elements['descripcion'],
                "Este campo es obligatorio"
            )
            return;
        }

        // Remove el mensaje de error
        removeInvalid(event.target.elements['descripcion'])


        let gasto = {
            descripcion: event.target.elements['descripcion'].value,
            categoria: event.target.elements['categoria'].value,
            fecha: event.target.elements['fecha'].value,
            monto: event.target.elements['monto'].value,
            moneda: event.target.elements['moneda'].value,
        };

        guardarGastos(gasto)
        event.target.reset()

    })

    document.getElementById("descripcion")
            .addEventListener('keydown', event => {
                // Remove el mensaje de error
                removeInvalid(event.target)

                setValid(event.target, 'Validacion correcta')
            })


})