var Quote =  require('../models/quote')

/*
 * Get All queries
 * TODO: Impliment support for paginated results
 */
exports.getQuotes = function(req, res, next) {
	console.log(req.query.offset)
	var offset = parseInt(req.query.offset);
	
	var quotes = Quote.find()
					  .skip(offset)
					  .limit(20)
					  .exec(function(err, quotes) {
							res.json(quotes);
						})
};