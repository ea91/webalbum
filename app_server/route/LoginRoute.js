var express = require('express');
var router = express.Router();
var controller = require('../controller/LoginController')

router.get('/', controller.index);
router.post('/', controller.index.post);

module.exports = router;