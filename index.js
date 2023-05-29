

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    console.log('Servidor express iniciado')

    return res.send('Hello world!');
});

app.get('/users', (req, res) => {
    return res.send('Página de usuários');
});

app.listen(3000);