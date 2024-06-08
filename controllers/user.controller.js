const {
    User
} = require("../models/user.model");

exports.createUser = async (req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        const userData = new User({
            userName,
            password
        })
        await userData.save()
        res.status(200).send('User created successfully');
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
}
//get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
}
//get user by id
exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id);
        res.status(200).send(user);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
}
//HOME WORD

//1. update user
//2. delete user