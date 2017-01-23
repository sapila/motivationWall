define([
	'jquery',
	'underscore',
	'backbone',
	'collections/QuoteCollection',
	'models/Timer',
	'text!templates/QuoteTemplate.html',
	'library/QuoteFontCalculator',
	'fitText'
	], function($, _, Backbone, 
		 QuoteCollection,
		 Timer,
		 QuoteTemplate,
		 QuoteFontCalculator
		) {
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
		    /**
			 * View Render 
			 **/
			render: function() {
				if (this.collection.length > 0) {
					var quote = this.collection.at(this.index);
					this.renderQuote(quote);
					// Start timer for next item render
					this.timer.start();
					$("#quote").fitText(QuoteFontCalculator.getFontSize(quote));
				}
			},
			/**
			 * Render Single quote 
			 **/
			renderQuote: function(quote) {
				var html = this.template({
					text:quote.get('text'),
					author: quote.get('author')
				});
				$(this.el).html(html);
			},
			/**
			 * Render Next Quote
			 **/
			renderNext: function(){
				this.index++;
				var quote = this.collection.at(this.index);
				this.renderQuote(quote);					console.log(QuoteFontCalculator.getFontSize(quote))

				$("#quote").fitText(QuoteFontCalculator.getFontSize(quote));
			}
		});
		
		return new indexView;
	});