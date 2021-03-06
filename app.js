const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      expressSanitizer = require('express-sanitizer'),
      mongoose = require('mongoose'),
      Song = require('./models/song'),
      Songset = require('./models/songset'),
      Comment = require("./models/comment"),
      Lyrics = require("./models/lyrics"),
      User = require("./models/user")
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      methodOverride = require("method-override"),
      seedDB = require("./seeds"),
      flash = require('connect-flash');

const commentRoutes = require('./routes/comments'),
      songRoutes = require('./routes/songs'),
      songsetRoutes = require('./routes/songsets'),
      indexRoutes = require('./routes/index'),
      scoreRoutes = require('./routes/score'),
      lyricsRoutes = require('./routes/lyrics');

//mongoose.connect("mongodb://localhost/worshipdatabase", { useMongoClient: true });
mongoose.connect("mongodb://houston:sixdays@ds115198.mlab.com:15198/worshipdatabase", { useMongoClient: true });
//mongoose.connect(process.env.DATABASEURL, { useMongoClient: true });


mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seedDB();

//PASSPORT CONFIG
app.use(require("express-session")({
  secret: "Hello restore champions!",
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
app.use("/songs", songRoutes);
app.use("/songs/:id/comments", commentRoutes);
app.use("/songs/:id/songlyrics", lyricsRoutes);
app.use("/share/", songsetRoutes);
app.use("/api/", scoreRoutes);

app.get("/clear", function(req, res){
  Songset.remove({}, function(err){
    if(err){
      console.log(err);
    } else {
      res.redirect("/");
    }
  })
});


let PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log("Worship Project Server is running.");
});
