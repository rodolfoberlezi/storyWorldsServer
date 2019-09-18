const Universe = require('../models/Universe');
const Book = require('../models/inscriptions/Book');

module.exports = {
    async index(req, res) {
        const { title } = req.body;
        const { id } = req.params;
    },

    async store(req, res) {
        const { title, cover, synopsis, description, keywords } = req.body;

        const book = await Book.create({
            title,
            cover,
            synopsis,
            description,
            keywords
        });

        return res.send(book);
    }
}