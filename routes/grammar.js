const express = require('express');
const controller = require('../controllers/grammar');
const router = express.Router();
const grammarCheckMiddleware = require('../middlewares/grammar');

router.post('/', grammarCheckMiddleware, controller.checkGrammar);

module.exports = router;