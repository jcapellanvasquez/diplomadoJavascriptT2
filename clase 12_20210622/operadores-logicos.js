const userInput = prompt("ingrese su edad");

// && -> and
// || -> or

if (userInput > 10 && userInput < 80) {
    alert("Esta dentro del rango de edad valido")
}

if (userInput == 10 || userInput == 80) {
    alert("Condicion OR, Esta dentro del rango de edad valido")
}

// uso del OR y el AND
if (userInput > 0 && userInput <= 12 || userInput > 12  && userInput <= 17) {
    alert("Es un nino o un adolecente")
}
