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
        characteristics: [String],
        skills: [String],
        description: String
    }
);

module.exports = model('Character', Character);