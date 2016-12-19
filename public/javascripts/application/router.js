define([
	'jquery',
	'underscore',
	'backbone',
	'views/index',
	], 
	function($, _, Backbone, indexView) {
		var AppRouter = Backbone.Router.extend({
			routes: {
				'here': 'index'
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