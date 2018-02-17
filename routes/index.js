const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Song = require('../models/song');
const passport = require('passport');
const middleware = require('../middleware');

//INDEX =================
router.get("/", function(req, res){
  res.render("home");
});
//=======================


/*=======================
    AUTHENTICATION
=======================*/


//REGISTER ==============
router.get("/register", function(req, res){
  res.render("register");
});
// - create user
router.post("/register", function(req, res){
  let newUser = new User({
    username: req.body.username,
    name: {
      familyName: req.body.familyName,
      givenName: req.body.givenName,
    }
  });
  User.register(newUser, req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render("register");
    }

    passport.authenticate("local")(req, res, function(){
      res.redirect("/songs")
    });

  });
});
//======================


//LOG IN ===============
router.get("/login", function(req, res){
  res.render("login");
})

router.post("/login", passport.authenticate("local",
  {
    successRedirect: "/songs",
    failureRedirect: "/login"
  }), function(req, res){
});
//======================


//LOG OUT ==============
router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/songs")
});
//======================


//USER PROFILES ========
router.get("/profile/:id", function(req, res){
  User.findById(req.params.id, function(err, foundUser){
    if(err){
      console.log(err);
    } else {
      Song.find( { "contributors": { id : {$in : foundUser._id } } }).populate("sets").exec(function(err, songs){
        console.log(songs);
      });
      res.render("users/show", {user: foundUser})
    }
  })
});
router.get("/user/:username/", function(req, res){
  User.findOne({username: req.params.username}).populate("sets").exec(function(err, foundUser){
    if(err){
      console.log(err);
    } else {
      //Song.find().where("contributor")
      Song.find( { "contributors": { id : {$in : foundUser._id } } }, function(err, songs){
        console.log(songs);
      });
      res.render("users/show", {user: foundUser})
    }
  })
});
//======================



module.exports = router;
