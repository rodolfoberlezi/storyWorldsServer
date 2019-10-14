const Character = require('../models/creations/Character');
const Affiliation = require('../models/creations/Affiliation');

module.exports = {
    async store(req, res) {
        const { name, members, image, isGoodEvilNeutral, objective, description } = req.body;

        const affiliation = await Affiliation.create({
            name,
            members,
            image,
            isGoodEvilNeutral,
            objective,
            description
        });

        return res.status(200).send(affiliation);
    }
}