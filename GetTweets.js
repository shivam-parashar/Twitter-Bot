console.log('It is bots.js!! ');


var Twit = require('twit'); 
var config = require('./config');
var T = new Twit(config);

var params = { 
				q: 'GoogleHome',
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
