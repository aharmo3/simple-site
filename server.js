var express = require("express");
  app = express();
  http = require("http");
  app.get("/amber", function(req, res) {
  	res.send("Hello Universe");
  });

  console.log("Server starting.Right now");
  app.listen(3000);	

  app.get("/inspiration", function(req,res){
  	var array = ["It's a beautiful Day!","Life isn't about getting and having, it is about being","We become what we think about"];
  	var randomIndex = Math.floor(Math.random() * array.length); 
  	res.send(array[randomIndex]);
  });

  app.get("/joke", function(req,res) {
  	var jokes = [
	  	{
	  		"setup": "How do you make holy water?",
	  		"punchline":"Boil the hell out of it",
	  	},
	  	{
	  		"setup" : "You want to hear a pizza joke?",
	  		"punchline" : "Nevermind its pretty cheesy",
	  	},
	  	{
	  		"setup" : "What do you call a big pile of kittens?",
	  		"punchline" : "A meowntain"
	  	}
  	];
  	var randomIndex = Math.floor(Math.random() * jokes.length);
  	res.send(jokes[randomIndex].punchline +'<br>' + jokes[randomIndex].setup);
  });


  app.get("/", function(req, res) {
    res.sendfile("./hello.html");
  });



 
