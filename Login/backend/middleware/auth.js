const jwt = require('jsonwebtoken');

exports.checkLogin = (req, res, next) => {

    const authToken = req.cookies.authToken;

    if (!authToken) {
        return res.status(401).send({ message: 'Invalid login/password' });
    }

    try {
        jwt.verify(authToken, process.env.PRIVATE_KEY);
    } catch (error) {
        return res.status(401).send({ message: 'Invalid login/password' });
    }

    next();
}