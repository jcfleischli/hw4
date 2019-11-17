const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile)
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    res.render("index.html");
});

app.get("/elements", function(req, res){
   res.render("elements.html"); 
});

app.get("/purpose", function(req, res){
    res.render("purpose.html"); 
});

app.get("/threats", function(req, res){
    res.render("threats.html"); 
});

//server listener
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Running Express Server..."); 
});