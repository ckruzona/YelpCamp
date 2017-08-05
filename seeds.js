var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");
    
var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg",
        description: "Blah Blah Blah"
    },
    {
        name: "Cloud Peak", 
        image: "https://farm3.staticflickr.com/2054/2229707213_302c00f6b5.jpg",
        description: "Blah Blah Blah"
    },
    {
        name: "Sunset Valley", 
        image: "https://farm9.staticflickr.com/8673/15989950903_8185ed97c3.jpg",
        description: "Blah Blah Blah"
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed campgrounds!");
        }
        // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("Added a campground!");
                    // Create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet.",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
    // Add a few comments
}

module.exports = seedDB;
