const express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/hola', (req, res) => {

    return res.send('<h1>Hola desde la ruta /hola. </h1>');

});

app.post('/ruta post', (req, res) => {

    return res.send('<h1>Hola desde la ruta POST. </h1>');

});

app.listen(8080, () => {
    console.log('Servidor iniciado desde el puerto 8080')
})