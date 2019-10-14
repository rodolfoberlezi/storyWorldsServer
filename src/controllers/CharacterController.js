const Universe = require('../models/Universe');
const Character = require('../models/creations/Character');

module.exports = {
    async show(req, res) {
        const { id } = req.params;

        const character = await Character.findById({ _id: id });

        if (character) {
            console.log("Character returned");
            return res.status(200).send(character);
        }

        return res.status(400).send("Character not found");
    },

    async store(req, res) {
        const universe_id = req.params.id;
        const { name, isMain, isGoodEvilNeutral, occupation, characteristics, skills, description } = req.body;

        const universe = await Universe.findById({ _id: universe_id });

        const character = await Character.create({
            name,
            isMain,
            isGoodEvilNeutral,
            occupation,
            characteristics,
            skills,
            description
        });

        universe.characters.push(character._id);
        await universe.save();

        return res.status(200).send(character);
    }
}