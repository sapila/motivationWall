define([
  'underscore',
  'backbone',
  'models/QuoteModel'
], function(_, Backbone, QuoteModel){
  var QuoteCollection = Backbone.Collection.extend({
    model: QuoteModel,
    url: '/api/quotes',
    parse: function (response) {
    console.log("In Parse" + response.length)
    return response;
}
  });

  return QuoteCollection;
});