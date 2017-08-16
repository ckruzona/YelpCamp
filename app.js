var methodOverride = require("method-override"),
    LocalStrategy  = require("passport-local"),
    Campground     = require("./models/campground"),
    bodyParser     = require("body-parser"),
    passport       = require("passport"),
    mongoose       = require("mongoose"),
    express        = require("express"),
    Comment        = require("./models/comment"),
    seedDB         = require("./seeds"),
    User           = require("./models/user"),
    app            = express();

// REQUIRING ROUTES   
var campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes    = require("./routes/comments"),
    indexRoutes       = require("./routes/index")
    
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/yelp_camp", {useMongoClient: true});
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))
app.use(methodOverride("_method"));
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Tucker is the best",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


//===================================//

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!"); 
});