define([
	'jquery',
	'underscore',
	'backbone',
	], function($, _, Backbone) {
		var indexView = Backbone.View.extend({
			el: 'body',

			render: function() {
				$(this.el).append('yoyoyo Backbone is here');
			}
		});
		
		return new indexView;
	});