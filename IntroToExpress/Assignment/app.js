var express = require("express");
var app = express();


app.get("/", function(req, res){
	res.send("Hi there, welcome to my assigment!");
})

app.get("/speak/pig", function(req, res){
	res.send("Oink");
})

app.get("/speak/cow", function(req, res){
	res.send("Moo");
})

app.get("/speak/dog", function(req, res){
	res.send("Woof Woof");
})

app.get("/repeat/:word/:num", function(req, res){
	var word = req.params.word;
	var num = Number(req.params.num);
	var str = "";
	for(var i = 0; i < num; i++){
		str += word + " ";
	}
	res.send(str);
})

app.get("*", function(req, res){
	res.send("Sorry, page not found");
})
app.listen(3000, function(){
	console.log("server has started");
})