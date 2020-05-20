//Instalar depêndencia para api's > yarn add axios
const {Router } = require('express');
const DevCotroller = require('./controllers/DevController')

const routes = Router();

routes.post('/devs', DevCotroller.store);

module.exports = routes;