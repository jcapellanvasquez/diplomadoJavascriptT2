window.addEventListener('load', event => {
    const listado = document.getElementById('listado-gastos');
    const misGastos = [
        {
            descripcion: "Compra del mes",
            monto: 4500.00,
            moneda: "RD $",
            categoria: "Casa",
            fecha: new Date()
        },
        {
            descripcion: "Pasaje de la semana",
            monto: 2500.00,
            moneda: "RD $",
            categoria: "Transporte",
            fecha: new Date()
        },
        {
            descripcion: "Salida de fin de semana",
            monto: 1500.00,
            moneda: "RD $",
            categoria: "Diversion",
            fecha: new Date()
        },
        {
            descripcion: "Salida de fin de semana",
            monto: 1500.00,
            moneda: "RD $",
            categoria: "Diversion",
            fecha: new Date()
        }
    ]

    const renderizarGasto = gasto => {
        listado.innerHTML = listado.innerHTML + 
        `
        <div class="col">
            <div class="card shadow-sm">
                <div class="card-body">
                <p class="card-text">${gasto.descripcion}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <small class="text-muted">${gasto.moneda} ${gasto.monto}</small>
                </div>
                </div>
            </div>
        </div>
        `
    }


    for(let index = 0; misGastos.length > index; index = index + 1) {
        let gasto = misGastos[index]
        renderizarGasto(gasto)
    }

    



    // console.table(misGastos)
    // console.log(misGastos.length)
    // console.log(misGastos[1])

    console.log(localStorage.getItem("nombre"))

})