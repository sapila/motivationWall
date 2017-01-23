define([
	'underscore',
	'backbone',
	], function(_, Backbone) {
		var QuoteFontCalculator = {
			/*
			 * Get the font size based on Quote.text length
			 */
			getFontSize: function(quote) {
				var length = quote.get('text').length;
				switch(true) {
				    case inRange(0, 50, length):
				        return 1.2
				        break;
				    case inRange(51, 80, length):
				        return 1.4
				        break;
			        case inRange(81, 120, length):
				        return 1.7
				        break;
			        case inRange(121, 150, length):
				        return 1.8
				        break;
				    default:
				        return 2.2
				}

			}
		};

		// check if value is in range
		function inRange(start, end, value) {
			return (value>= start && value <= end);
		}
		
		return QuoteFontCalculator;
	});