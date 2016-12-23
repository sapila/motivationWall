var Quote =  require('../models/quote')

/*
 * Get All queries
 * TODO: Impliment support for paginated results
 */
exports.getQuotes = function(req, res, next) {
	console.log(req.query.skip)
	var quotes = Quote.find().skip(parseInt(req.query.skip)).limit(20).exec(function(err, quotes) {
		res.json(quotes);
	})
};