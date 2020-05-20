// Criando rotas
// cirando aplicação
// Roda o servidor com node index.js
// Adicionar dependencia para ele sempre que alterar alguma coisa do código ele atualizar = yarn add nodemon -D 
// Rodar o servidor agora yarn nodemon index.js
const express = require('express');

const app = express();

app.get('/',(request, response) => {
return response.json({message: 'Hello Arthur'});
});

app.listen(3333);