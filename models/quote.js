var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
	text: String,
	author: String
});

/*
 * Attributes Visibility
 *
 * Delete attributes we dont want to be visible
 */
 quoteSchema.set('toJSON', {
 	transform:function(doc, obj, options) {
 		delete obj._id;
 		delete obj.__v;
 		return obj;
 	}
 });


/*
 * Methods
 */

 quoteSchema.methods = {
 	
 }

// we need to create a model using it
var Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;