var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


app.get("/results", function(req, res){
	var query = req.query.search;
	var url= "http://www.omdbapi.com/?apikey=91282d0&s=" + query
	request(url, function(error, response, body){
		if(!error && response.statusCode == 200) {
			var data = JSON.parse(body);
			res.render("results", {data:data});
		};
	});
});

app.get("/", function(req, res){
	res.render("search");
})

app.listen(3000, function(){
	console.log("Movie App has started");
});