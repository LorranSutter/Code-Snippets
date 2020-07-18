const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/user');

exports.login = async (req, res) => {

    const name = req.body.name;
    const password = req.body.password;

    if (!name || !password) {
        return res.status(401).json({ message: 'Invalid name/password' });
    }

    const user = await User.findOne({ name });
    if (!user) {
        return res.status(401).json({ message: 'Invalid name' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    const authToken = jwt.sign({ name }, process.env.PRIVATE_KEY, { algorithm: 'HS256' });

    res.status(200).json({ authToken });
}

// Other route just to check auth token GET
exports.otherRouteGet = (req, res) => {
    res.status(200).json({ message: 'Other route GET' });
}

// Other route just to check auth token POST
exports.otherRoutePost = (req, res) => {
    res.status(200).json({ message: 'Other route POST' });
}