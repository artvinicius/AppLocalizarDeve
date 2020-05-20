// Criando rotas
// cirando aplicação
// Roda o servidor com node index.js
// Adicionar dependencia para ele sempre que alterar alguma coisa do código ele atualizar = yarn add nodemon -D 
// Rodar o servidor agora yarn nodemon index.js
// Adicionando configurações com o banco de dados > yarn add mongoose
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://Arthur:1234@cluster0-0jfxo.mongodb.net/LocDev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);


app.listen(3333);