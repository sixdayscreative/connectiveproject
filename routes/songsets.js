const express = require('express');
const router = express.Router({mergeParams: true});
const Song = require('../models/song');
const Songset = require('../models/songset');
const User = require('../models/user');
const middleware = require('../middleware');

//SETS INDEX ===================

router.get("/", function(req, res){
  Songset.find().populate("songs").exec(function(err, songsets){
    if(err){
      console.log(err);
    } else {
      res.render("songsets/index", {songsets: songsets});
    };
  });
});

// - create
//router.get("/new", middleware.isLoggedIn, function(req, res){
router.get("/new", function(req, res){
  Songset.find({}, function(err, songset){
    if(err){
      console.log(err);
    } else {
      if(req.xhr) {
        Song.find({}, function(err, songs){
          if(err){
            console.log(err);
          } else {
            res.json(songs)
          }
        });
      } else {
        res.render("songsets/new", {songset: songset});
      }
    };
  });
});

router.post("/new", middleware.isLoggedIn, function(req, res){

  let userid = req.user.id;
  let newSet = {
    title: req.body.songset.title,
    description: req.body.songset.description,
    songs: [],
    author: {
      id: userid,
      displayName: req.user.name.givenName + " " + req.user.name.familyName
    }
  };

  let songList = req.body.songset.songs;

  Songset.create(newSet, function(err, newSongSet){
    if(err){
      console.log(err);
    } else {
      songList.forEach(function(song, i){

        Song.findById(song, function(err, foundSong){
          if(err){
            console.log(err);
          } else {
            newSongSet.songs.push(foundSong);
            if(songList.length === i+1){
              newSongSet.save();
            }
          }
        })
      });
      User.findById(userid, function(err, foundUser){
        foundUser.sets.push(newSongSet);
        foundUser.save();
      });
      res.redirect("/")
    }
  });

});
//============================

//SONG SHOW =================
router.get("/:id", function(req, res){
  Songset.findById(req.params.id).populate("songs").exec(function(err, foundSet){
    if(err){
      console.log(err);
    } else {
      res.render("songsets/show", {songset: foundSet});
    }
  });
});





module.exports = router;
