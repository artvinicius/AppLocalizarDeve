//Instalar depêndencia para api's > yarn add axios
const {Router } = require('express');
const DevCotroller = require('./controllers/DevController')
const SeachController = require('./controllers/SearchController');
const routes = Router();

routes.get('/devs', DevCotroller.index);
routes.post('/devs', DevCotroller.store);

routes.get('/search', SeachController.index);

module.exports = routes;