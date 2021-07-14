const express = require('express'); // Cargar modulo de express -> sirve para crear nuestro servidor web
const path = require('path'); // cargar modulo de path -> sirve para acceder al nombre de directorio

const app = express();

// Agregar ruta para nuestro proyecto
app.get('/', (request, response) => {
    // Como enviar una respuesta al navegador
    // response.send('<h1>Mi primera app con node y javascript</h1>')

    response.sendFile(path.join(__dirname + '/index.html'))
});

// Poner la carpeta de las depencias disponibles para el navegador
app.use(express.static(path.join(__dirname, "node_modules")))

app.use(express.static(path.join(__dirname, "assets")))

// Agregar el puerto donde correra el proyecto
app.listen(5000, () => console.log("Mi primera app con node y javascrip - CORRIENDO"))