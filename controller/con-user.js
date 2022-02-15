const User = require('../models/Users');
// const bcrypt = require('bcrypt');


module.exports.loginUser = () => {

}


module.exports.registerNewUser = async (req, res) => {
    console.log('==========POST Request=========', req.body);
    try {
        // const salt = await bcrypt.genSalt(10);
        // const hashPassword = await bcrypt.hash(req.body.password, salt);
        if (req.body.signupFirstname && req.body.signupLastname && req.body.signupEmail && req.body.signupMobileNo && req.body.signupPassword) {
            const newUser = new User({
                fristname: req.body.signupFirstname,
                lastname: req.body.signupLastname,
                email: req.body.signupEmail,
                mobileNo: req.body.signupMobileNo,
                password: req.body.signupPassword

            })
            const user = await newUser.save();
            res.status(200).json(user);
        } else {
            res.status(400).json({ message: 'No Input' });
        }

    } catch (e) {
        res.status(500).json(e);
    }

}

exports.getUser = async (req, res) => {
    try {
        const getUser = await User.find();
        console.log('---user--', getUser);
        if (!getUser) res.status(400).json({ message: 'error in get All' });
        res.status(200).json(getUser);
    } catch (e) {
        console.log('----requet Error===', e);
        res.status(400).json(e);
    }
}