var Quote =  require('../quote');

exports.seed = function(){
	console.log("Seeder will start seeding");

	var quotes = [
			{
				text: "Make your life a masterpiece, imagine no limitations on what you can be, have or do",
				author: "Brian Tracy"
			},
			{
				text: "The way to get started is to stop talking and start doing",
				author: "Walt Disney"
			},
			{
				text: "The pessimist sees difficulty in every opportunity.The optimidt sees the opportunity in every difficulty",
				author: "Winston Churchill"
			},
			{
				text: "Dont let yesterday take too much of today",
				author: "Will Rogers"
			},
			{
				text: "You learn more from failure than from success. Dont let it stop you. Failure builds character.",
				author: "Unknown"
			},
			{
				text: "It's not whether you get knocked down, it's whether you get up",
				author: "Vince Lombardi"
			},
			{
				text: "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you",
				author: "Steve Jobs"
			},
			{
				text: "People who are crazy enough to think they can change the world, are the ones who do",
				author: "Rob Siltanen"
			},
			{
				text: "Failure will never overtake me if my determination to succeed is strong enough.",
				author: "Og Mondino"
			}
	]

	for (var i = 0; i < quotes.length ; i++) {
		var quote = new Quote(quotes[i]);
		//console.log(quote);
		quote.save(function (err) {
		  if (err) {
		  	echo(err)
		  	return handleError(err);
		  }// saved!
		});
	}
	console.log("Seeder Finished");
}