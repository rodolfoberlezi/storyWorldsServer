const { Schema, model } = require('mongoose');

const Book = Schema(
    {
        title: {
            type: String,
            required: true
        },
        cover: String,
        synopsis: String,
        description: String,
        characters: [{
            type: Schema.Types.ObjectId,
            ref: 'Character'
        }],
        keywords: [String]
    }
);

module.exports = model('Book', Book);