const { Schema, model } = require('mongoose');

const Affiliation = Schema(
    {
        name: {
            type: String,
            required: true
        },
        members: [{
            type: Schema.Types.ObjectId,
            ref: 'Character'
        }],
        image: String,
        isGoodEvilNeutral: String,
        objective: String,
        description: String
    }
);

module.exports = model('Affiliation', Affiliation);