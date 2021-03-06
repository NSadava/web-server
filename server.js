var express = require("express");
var app = express();

var port = process.env.PORT || 3000;

app.get("/",function(req, res){
	res.send("Hello Express!");
});
 
/*
Start Server - node server.js
open url  - localhost:300
*/

app.get("/about",function(req, res){
	res.send("About Sample text");
});

app.use(express.static(__dirname + "/public"));
// console.log(__dirname);

console.log("Application run on port " + port);

app.listen(port);
