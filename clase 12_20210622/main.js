const contendor = document.getElementById("contenedor");
const btnRojo = document.getElementById("btn-rojo");
const btnNaranja = document.getElementById("btn-naranja");

// evento para cuando la pagina termina de cargar
window.addEventListener('load', event => {
    // obtener el valor de una propiedad seteada desde CSS
    let styles = window.getComputedStyle(contendor)

    // Obtener el valor de la propiedad especificada
    //console.log(styles.getPropertyValue("font-size"))
})

btnRojo.addEventListener('click', evento => {
    // agregar clase CSS
    contendor.classList.add("bg-color-red")

    //Remover clase css
    contendor.classList.remove("bg-color-naranja")

    //Agregar o establecer una clase css
    // - si la clase esta presente sera removida
    // - si la clase no esta presente sera agregada
    contendor.classList.toggle("bg-color-red")
})


btnNaranja.addEventListener('click', evento => {
    contendor.classList.add("bg-color-naranja")
    contendor.classList.remove("bg-color-red")
})


const miJSON = {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}


console.log(typeof(miJSON))
console.log(miJSON.members[0])


