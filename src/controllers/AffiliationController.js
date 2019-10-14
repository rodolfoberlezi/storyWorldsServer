const Universe = require('../models/Universe');
const Affiliation = require('../models/creations/Affiliation');

module.exports = {
    async show(req, res) {
        const { id } = req.params;

        const affiliation = await Affiliation.findById({ _id: id });

        if (affiliation) {
            console.log("Affiliation returned");
            return res.status(200).send(affiliation);
        }

        return res.status(400).send("Affiliation not found");
    },

    async store(req, res) {
        const universe_id = req.params.id;
        const { name, image, isGoodEvilNeutral, objective, description } = req.body;

        const universe = await Universe.findById({ _id: universe_id });

        const affiliation = await Affiliation.create({
            name,
            image,
            isGoodEvilNeutral,
            objective,
            description
        });

        universe.affiliations.push(affiliation._id);
        await universe.save();

        console.log("Affiliation persisted");
        return res.status(200).send(affiliation);
    }
}