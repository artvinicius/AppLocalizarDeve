const Dev = require('../models/Dev')
const parseStringAsArray = require ('../util/parseStringAsArray');

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
        });

        return response.json({ devs });
        //buscar todos devs num raio de 10km

        //filtrar tecnologia

    }
}