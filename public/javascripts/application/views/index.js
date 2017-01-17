define([
	'jquery',
	'underscore',
	'backbone',
	'collections/QuoteCollection',
	'models/Timer',
	'text!templates/QuoteTemplate.html',
	'fitText'
	], function($, _, Backbone, QuoteCollection, Timer, QuoteTemplate) {
		var indexView = Backbone.View.extend({
			el: '#main',

			template: _.template(QuoteTemplate),

			initialize: function() {
				//set the index of the collection item that will be showed
				this.index = 0;

				//Set interval for rendering next
				this.timer = new Timer({
					interval: 2000, method:this.renderNext.bind(this)
				});

				this.collection = new QuoteCollection();
				//listen to reset
				this.collection.bind("reset", _.bind(this.render, this));
				this.collection.fetch();
			},
			render: function() {
				if (this.collection.length > 0) {
					var quote = this.collection.at(this.index);
					this.renderQuote(quote);
					this.timer.start();
					$("#quote").fitText(1.5);
				}
			},
			renderQuote: function(quote) {
				var html = this.template({
					text:quote.get('text'),
					author: quote.get('author')
				});
				$(this.el).html(html);
			},
			renderNext: function(){
				this.index++;
				var quote = this.collection.at(this.index);
				this.renderQuote(quote);
				$("#quote").fitText(1.5);
			}
		});
		
		return new indexView;
	});