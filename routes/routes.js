/*
 * Load Controllers
 */
var quotesController = require('../controllers/quotesController');

/*
 * Load external router
 */
var frontRoutes = require('./frontRoutes');

module.exports = function (app) {

//Front Routes
app.use('/', frontRoutes );

// API Routes
app.get('/api/quotes', quotesController.getQuotes);


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

}