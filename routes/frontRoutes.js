var express = require('express');
var router = express.Router();

var frontController = require('../controllers/frontController');

/* GET home page. */
router.get('/', frontController.index);
router.get('/here', frontController.index);

module.exports = router;
