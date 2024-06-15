const {
    User
} = require("../models/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    try {
        const userName = req.body.userName;
        let normalTextPassword= req.body.password;

        const password = await bcrypt.hash(normalTextPassword, 10);

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
//HOME WORK

//1. update user
//2. delete user

//  bcrypt and jsonwebtoken

// 1. bcrypt is used to hash the password

exports.userLogin = async (req, res) => {
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        const user = await User.findOne({
            userName
        });
        if (!user) {
            return res.status(400).send('Invalid credentials');
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).send('Invalid credentials');
        }
        const token = jwt.sign({
            id: user._id
        }, 'secretkey');
        res.status(200).json({
            token: token,
            expiredIn: '1h',
            message: 'Login successful'
        }
            );
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
}