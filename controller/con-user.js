const User = require('../models/Users');
// const bcrypt = require('bcrypt');


module.exports.loginUser = (req, res) => {

}


module.exports.registerNewUser = async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(req.body.password, salt);
        if (req.body.signupFirstname && req.body.signupLastname && req.body.signupEmail && req.body.signupMobileNo && req.body.signupPassword) {
            const newUser = new User({
                firstname: req.body.signupFirstname,
                lastname: req.body.signupLastname,
                email: req.body.signupEmail,
                mobileNo: req.body.signupMobileNo,
                password: req.body.signupPassword

            })
            const user = await newUser.save();
            return res.status(200).json(user);
        } else {
            return res.status(400).json({ message: 'No Input' });
        }

    } catch (e) {
        res.status(500).json(e);
    }

}

exports.getUser = async (req, res) => {
    try {
        const getUser = await User.find();
        if (!getUser) res.status(400).json({ message: 'error in get All' });
        res.status(200).json(getUser);
    } catch (e) {
        res.status(400).json(e);
    }
}