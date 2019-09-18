const { Schema, model } = require('mongoose');

const User = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        user: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        bio: String,
        avatar: String,
        fantasyName: String,
        universes: [{
            type: Schema.Types.ObjectId,
            ref: 'Universe'
        }],
    },
    {
        timestamps: true
    }
);

module.exports = model('User', User);