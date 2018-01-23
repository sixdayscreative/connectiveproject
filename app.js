const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      Song = require('./models/song'),
      Comment = require("./models/comment"),
      User = require("./models/user")
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      methodOverride = require("method-override"),
      seedDB = require("./seeds"),
      flash = require('connect-flash');

const commentRoutes = require('./routes/comments'),
      songRoutes = require('./routes/songs'),
      indexRoutes = require('./routes/index');

mongoose.connect("mongodb://localhost/worshipdatabase", { useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({extended: true}));
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

let PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log("Worship Project Server is running.");
});
