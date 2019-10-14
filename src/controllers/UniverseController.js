const User = require('../models/User');
const Universe = require('../models/Universe');

module.exports = {
    async show(req, res) {
        const { id } = req.params;

        const universe = await Universe.findById({ id });

        if (universe) {
            if (!universe.books) {
                await universe.populate('books').execPopulate();
            }

            if (!universe.characters) {
                await universe.populate('characters').execPopulate();
            }

            console.log("Universe found and returned with success");
            return res.status(200).send(universe);
        }

        console.log("Universe not found by id");
        return res.status(400).send("Universe not found");
    },

    async store(req, res) {
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

        return res.status(200).send(universe);
    }
}