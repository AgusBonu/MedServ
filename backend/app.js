// Requires
var express = require('express');

// Inicializar variables

var app = express();


// Rutas

app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'peticion realizada correctamente'
    });
});
// Escuchar peticiones

app.listen(8080, () => {
    console.log('Funcionando en el puerto 8080');
});