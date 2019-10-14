const User = require('../models/User');
//Um controle realiza 5 tipos de operações
//INDEX, SHOW, STORE, UPDATE, DELETE

module.exports = {
    async index(req, res) {
        const { user, password } = req.body;

        const userExists = await User.findOne({ user, password });

        if (userExists) {
            if (!userExists.universes) {
                await userExists.populate('universes').execPopulate();
            }
            console.log("Success to login");
            return res.status(200).send(userExists);
        }

        console.log('Invalid credentials to connect.');
        return res.status(400).send('Username or password does not exists or is incorrect.')
    },

    async show(req, res) {
        const { id } = req.params;

        const userExists = await User.findById({ _id: id });

        if (userExists) {
            return res.status(200).send(userExists);
        }

        return res.status(400).send('User data not found');
    },

    async store(req, res) {
        const { user } = req.body;

        const userExists = await User.findOne({ user });

        if (userExists) {
            console.log(`User ${userExists.user} is already being used`);
            return res.status(400).send('User is already being used. Please, try another username.');
        }

        let { name, password, email, bio, avatar, fantasyName } = req.body;

        if (!avatar) {
            avatar = "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png";
        }

        user = await User.create({
            name,
            user,
            password,
            email,
            bio,
            avatar,
            fantasyName
        });

        console.log('Your account has been successfully created.');
        return res.status(200).send(user);
    },

    async update() {

    },

    async delete() {

    }
}