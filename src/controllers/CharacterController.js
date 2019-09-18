const Universe = require('../models/Universe');
const Book = require('../models/inscriptions/Book');
const Character = require('../models/creations/Character');

module.exports = {
    async store(req, res) {
        const { name, isMain, isGoodEvilNeutral, occupation, characteristics, skills, description } = req.body;

        const character = await Character.create({
            name,
            isMain,
            isGoodEvilNeutral,
            occupation,
            characteristics,
            skills,
            description
        });

        return res.send(character);
    }
}