var express = require('express');
var router = express.Router();
var controller = require('../controller/MyAlbumsController')

router.get('/', controller.index);
module.exports = router;