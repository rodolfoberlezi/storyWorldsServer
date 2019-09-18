const { Schema, model } = require('mongoose');

const Universe = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: String,
        image: [String],
        characteristics: [String],
        books: [{
            type: Schema.Types.ObjectId,
            ref: 'Book'
        }],
        characters: [{
            type: Schema.Types.ObjectId,
            ref: 'Character'
        }],
        races: [String],
        places: [String],
    },
    {
        timestamps: true
    }
);

module.exports = model('Universe', Universe);