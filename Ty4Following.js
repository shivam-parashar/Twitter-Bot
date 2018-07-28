console.log(' bots.js!! ');


var Twit = require('twit'); 
var config = require('./config');
var T = new Twit(config);



var stream = T.stream('user');

stream.on('follow',followed);


function followed(eventMsg)
{
	console.log('follow event');
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetIt('.@' + screenName + ' Thanks for following, shivam bot' );
}


function tweetIt(txt)
{
	var ToTweet = { status: txt}

	T.post('statuses/update', ToTweet , tweeted);

	function tweeted(err, data, response) {
		if(err)
		{
			console.log('OPSSSSSSSS');	
		}
	}
}



/*
var params = { 
				q: 'rainbow',
			    count: 10
			}

T.get('search/tweets', params, gotData);
function gotData(err, data, response) 
{
	if(err)
	{
		console.log('OPSSSSSSSS');	
		
	}
	var tweets= data.statuses;
	for(let i=0;i< tweets.length;i++)
	{
		console.log(tweets[i].text+'\n*******************\n');
	}
}

*/
/*
var ToTweet = { status: 'I am a bot who post jokes and memes' }


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
*/
