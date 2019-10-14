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
        keywords: [String]
    }
);

module.exports = model('Book', Book);