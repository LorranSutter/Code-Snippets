const express = require('express');

const login_controller = require('../controllers/loginController');
const login_validator = require('../middleware/loginValidator');
const { checkLogin } = require('../middleware/auth');
const { validate } = require('../middleware/validate');

const routes = express.Router();

routes.post('/login', login_validator.login, validate, login_controller.login);

// Other route just to check auth token
routes.get('/otherRoute', checkLogin, login_controller.otherRoute);

module.exports = routes;