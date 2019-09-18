const { Schema, model } = require('mongoose');

const Character = Schema(
    {
        name: {
            type: String,
            required: true
        },
        isMain: Boolean,
        isGoodEvilNeutral: String,
        occupation: String,
        affiliation: {
            type: Schema.Types.ObjectId,
            ref: 'Affiliation'
        },
        characteristics: [String],
        skills: [String],
        description: String
    }
);

module.exports = model('Character', Character);