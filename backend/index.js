// Criando rotas
// cirando aplicação
// Roda o servidor com node index.js
// Adicionar dependencia para ele sempre que alterar alguma coisa do código ele atualizar = yarn add nodemon -D 
// Rodar o servidor agora yarn nodemon index.js
// Adicionando configurações com o banco de dados > yarn add mongoose
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Arthur:1234@cluster0-0jfxo.mongodb.net/LocDev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());

// Métodos HTTP: GET,POST,PUT,DELETE

//Tipos de parâmetros:

//Query Params: request.query (Filtros, ordenação, paginação...)
//Routr Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para a criação ou alteração de um regstro)


// MongoDB (Não-relacional)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({
        message: 'Hello Arthur'
    });
});

app.listen(3333);