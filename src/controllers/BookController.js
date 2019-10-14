const Universe = require('../models/Universe');
const Book = require('../models/inscriptions/Book');

module.exports = {
    async show(req, res) {
        const { id } = req.params;

        const book = await Book.findById({ _id: id });

        if (book) {
            console.log("Book found and returned");
            return res.status(200).send(book);
        }

        console.log("No book found by the corresponding id");
        return res.status(400).send("No book found");
    },

    async store(req, res) {
        const universe_id = req.params.id;
        const { title, cover, synopsis, description, keywords } = req.body;

        const universe = await Universe.findById({ _id: universe_id });

        const book = await Book.create({
            title,
            cover,
            synopsis,
            description,
            keywords
        });

        universe.books.push(book._id);
        await universe.save();

        return res.status(200).send(book);
    }
}