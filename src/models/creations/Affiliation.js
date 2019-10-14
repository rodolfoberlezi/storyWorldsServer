const { Schema, model } = require('mongoose');

const Affiliation = Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: String,
        isGoodEvilNeutral: String,
        objective: String,
        description: String
    }
);

module.exports = model('Affiliation', Affiliation);