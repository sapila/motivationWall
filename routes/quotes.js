var express = require('express');
var router = express.Router();

/* GET quotes listing. */
router.get('/', function(req, res, next) {
	var quotes = [
		{
			text: 'this is it, do it',
			name: 'Nik Gog'
		}	
	]
  res.send(quotes);
});

module.exports = router;
