const express = require('express');

const login_controller = require('../controllers/loginController');
const login_validator = require('../middleware/loginValidator');
const { checkLogin } = require('../middleware/auth');
const { validate } = require('../middleware/validate');

const router = express.Router();

router.post('/login', login_validator.login, validate, login_controller.login);

// Other route just to check auth token GET
router.get('/otherRouteGet', checkLogin, login_controller.otherRouteGet);

// Other route just to check auth token POST
router.post('/otherRoutePost', login_controller.otherRoutePost);

module.exports = router;