define([
	'jquery',
	'underscore',
	'backbone',
	'views/index',
	'collections/QuoteCollection'
	], 
	function($, _, Backbone, indexView, QuoteCollection) {
		var AppRouter = Backbone.Router.extend({
			routes: {
				'': 'index'
			},

			index: function() {
				indexView.render();	
			}
		});

		var init = function() {
			var app_router = new AppRouter;
			//Start push state
			Backbone.history.start({pushState: true});
		};
		return {
			init: init
	 	}
	});