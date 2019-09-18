const User = require('../models/User');
const Universe = require('../models/Universe');

module.exports = {
    async index(req, res) {
        const { name } = req.body;
        const { id } = req.params;
    },

    async store(req, res) {
        //terei que verificar se o usuário está logado
        //JWToken ou pelo header
        const { user } = req.headers;

        const loggedUser = await User.findOne({ user });

        const { name, description, image, characteristics, races, places } = req.body;

        const universe = await Universe.create({
            name,
            description,
            image,
            characteristics,
            races,
            places
        });

        loggedUser.universes.push(universe._id);
        await loggedUser.save();

        return res.send(universe);
    }
}