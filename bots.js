console.log('This bot tweets in an interval of 20 seconds');
var Twit = require('twit'); 
var config = require('./config');
var T = new Twit(config);




tweetIt();
setInterval(tweetIt,1000*20);


function tweetIt()
{
	var r = Math.floor(Math.random()*10);
	var ToTweet = { status: 'I am a bot number' + r + 'who post jokes and memes'};
	T.post('statuses/update', ToTweet , tweeted);
	function tweeted(err, data, response) 
	{
		if(err)
		{
			console.log('OPSSSSSSSS');	
		}
		else
		{
			console.log('It Works');
		}
	}	
}

