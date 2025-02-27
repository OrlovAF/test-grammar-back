const express = require('express');
const controller = require('../controllers/login');
const router = express.Router();
const loginMiddleware = require('../middlewares/login');

router.post('/', loginMiddleware, controller.login);

module.exports = router;