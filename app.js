const express = require("express");
const fakeData = require("faker");

const app = express();
app.engine('html', require('ejs').renderFile)
app.use(express.static("public"));

//routes
app.get("/", function(req, res){
    const phrase = fakeData.hacker.phrase();
    res.render("index.ejs", {title: 'CyberSecurity',
        phrase});
});

app.get("/elements", function(req, res){
   const phrase = fakeData.hacker.phrase();
    res.render("elements.ejs", {title: 'Elements',
        phrase}); 
});

app.get("/purpose", function(req, res){
    const phrase = fakeData.hacker.phrase();
    res.render("purpose.ejs", {title: 'Purpose',
        phrase});
});

app.get("/threats", function(req, res){
    const phrase = fakeData.hacker.phrase();
    res.render("threats.ejs", {title: 'Threats',
        phrase}); 
});

//server listener
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Running Express Server..."); 
});