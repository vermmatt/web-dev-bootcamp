// var request = require("request");
// request("https://query.yahooapis.com/v1/public/", function(error, response, body){
// 	if(!error && response.statusCode == 200) {
// 		console.log(body);
// 	}
// });

var request = require("request");

var options = {
  method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  qs: {
    callback: '',
    id: '2803420',
    units: '%22metric%22',
    mode: 'xml%2C html',
    q: 'Aartselaar'
  },
  headers: {
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    'x-rapidapi-key': '963eec16c5msh8d90b92e1b7d666p1d2da7jsn2bbebb516359',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	var data = JSON.parse(body);
	if (error) throw new Error(error);
	console.log(Math.round(data["main"]["temp"] - 273));
});