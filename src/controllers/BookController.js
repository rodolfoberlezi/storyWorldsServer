const Universe = require('../models/Universe');
const Book = require('../models/inscriptions/Book');

module.exports = {
    async show(req, res) {
        const { id } = req.params;

        const book = await Book.findById({ id });

        if (book) {
            if (!book.characters) {
                book.populate('characters').execPopulate();
            }

            return res.status(200).send(book);
        }

        console.log("No book found by the corresponding id");
        return res.status(400).send("No book found");
    },

    async store(req, res) {
        //preciso saber qual universo está
        const { title, cover, synopsis, description, keywords } = req.body;

        const book = await Book.create({
            title,
            cover,
            synopsis,
            description,
            keywords
        });

        return res.status(200).send(book);
    }
}