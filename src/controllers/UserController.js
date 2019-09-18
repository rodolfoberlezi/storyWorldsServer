const User = require('../models/User');
//Um controle realiza 5 tipos de operações
//INDEX, SHOW, STORE, UPDATE, DELETE

module.exports = {
    async index(req, res) {
        const { user, password } = req.body;

        const userExists = await User.findOne({ user, password });

        if (userExists) {
            console.log("Success to login");
            return res.send(userExists);
        }

        console.log('Invalid credentials to connect.');
        return res.send('Username or password does not exists or is incorrect.')
    },

    async store(req, res) {
        let { user } = req.body;

        const userExists = await User.findOne({ user });

        if (userExists) {
            console.log(`User ${userExists.user} is already being used`);
            return res.send('User is already being used. Please, try another username.');
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
        return res.send(user);
    }
}