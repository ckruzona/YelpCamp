var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
// To exclude .ejs file tags
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/475575/pexels-photo-475575.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Granite Hill", image: "https://images.pexels.com/photos/506216/pexels-photo-506216.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/509417/pexels-photo-509417.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/475575/pexels-photo-475575.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Granite Hill", image: "https://images.pexels.com/photos/506216/pexels-photo-506216.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/509417/pexels-photo-509417.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Salmon Creek", image: "https://images.pexels.com/photos/475575/pexels-photo-475575.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Granite Hill", image: "https://images.pexels.com/photos/506216/pexels-photo-506216.jpeg?h=350&auto=compress&cs=tinysrgb"},
        {name: "Mountain Goat's Rest", image: "https://images.pexels.com/photos/509417/pexels-photo-509417.jpeg?h=350&auto=compress&cs=tinysrgb"}
];
//==============ROUTES=============//

app.get("/", function(req, res) {
    res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

//===================================//

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!"); 
});