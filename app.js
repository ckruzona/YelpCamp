var express = require("express");
var app = express();

// To exclude .ejs file tags
app.set("view engine", "ejs");

//==============ROUTES=============//

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    var campgrounds = [
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/475575/pexels-photo-475575.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Granite Hill", image: "https://images.pexels.com/photos/506216/pexels-photo-506216.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/509417/pexels-photo-509417.jpeg?h=350&auto=compress&cs=tinysrgb"}
    ]
    res.render("campgrounds", {campgrounds: campgrounds});
});




//===================================//

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!"); 
});