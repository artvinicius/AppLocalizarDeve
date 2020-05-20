// Criando rotas
// cirando aplicação
// Roda o servidor com node index.js
// Adicionar dependencia para ele sempre que alterar alguma coisa do código ele atualizar = yarn add nodemon -D 
// Rodar o servidor agora yarn nodemon index.js
const express = require('express');

const app = express();


app.use(express.json());

// Métodos HTTP: GET,POST,PUT,DELETE

//Tipos de parâmetros:

//Query Params: request.query (Filtros, ordenação, paginação...)
//Routr Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para a criação ou alteração de um regstro)

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({
        message: 'Hello Arthur'
    });
});

app.listen(3333);