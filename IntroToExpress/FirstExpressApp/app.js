var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there");
})

app.get("/bye", function(req, res){
	res.send("Goodbye");
})

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("Welcome to the "+ subreddit + " subreddit");
})

app.get("*", function(req, res){
	res.send("You are a star");
})

app.listen(3000, function(){
	console.log("server has started");
})