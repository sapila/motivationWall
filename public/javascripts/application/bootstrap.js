require.config({
	paths: {
		jquery: '../libs/jquery/jquery.min',
		underscore: '../libs/underscore/underscore.min',
		backbone: '../libs/backbone/backbone.min',
		text: '../libs/require/text',
		fitText: '../libs/jquery/fitText'
	},
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		fitText: {
			deps: ['jquery'],
			exports: 'fitText'
		}
	}
});

require(['app'], function(App) {
	App.init();
});