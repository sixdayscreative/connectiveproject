const express = require('express');
const router = express.Router();
const Song = require('../models/song');
const middleware = require('../middleware');

//SONGS INDEX ================

router.get("/", function(req, res){
  if(req.query.search){
    const regex = new RegExp(escapeRegex(req.query.search), 'gi');
    Song.find({title: regex}, function(err, allSongs){
      if(err){
        console.log(err);
      } else {
        let searchVal = req.query.search;
        res.render("songs/index", {songs : allSongs, searchVal: searchVal });
      }
    }).sort({title: 1});
  } else {
    Song.find({}, function(err, allSongs){
      if(err){
        console.log(err);
      } else {
        res.render("songs/index", {songs : allSongs});
      }
    }).sort({worship: -1});
  }
});

//============================


// SONGS NEW =================
// - new
router.get("/add", middleware.isLoggedIn, function(req, res){
  res.render("songs/new");
});

// - create
router.post("/", function(req, res){
  let title = req.body.title,
      author = req.body.author,
      lyrics = req.body.lyrics,
      newSong = {
        title: title,
        author: author,
      };

      console.log(req.body.lyrics);

  Song.create(newSong, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      let newContributor = {
        id: req.user.id,
        displayName: req.user.name.givenName + " " + req.user.name.familyName
      }
      newlyCreated.contributors.push(newContributor);
      newlyCreated.save();
      res.redirect("/songs");
    }
  })

});


//============================


//SONG SHOW =================
router.get("/:id", function(req, res){
  Song.findById(req.params.id).populate(["comments", "lyrics"]).exec(function(err, foundSong){
    if(err){
      console.log(err);
    } else {
      res.render("songs/show", {song: foundSong});
    }
  });
});

router.get("/:id/present", function(req, res){
  Song.findById(req.params.id).populate("lyrics").exec(function(err, foundSong){
    if(err){
      console.log(err);
    } else {
      res.render("songs/present", {song: foundSong});
    }
  });
});

router.get("/:id/lyrics", function(req, res){
  Song.findById(req.params.id).populate("lyrics").exec(function(err, foundSong){
    if(err){
      console.log(err);
    } else {
      res.render("songs/show-lyrics.ejs", {song: foundSong});
    }
  });
});


//SONG EDIT ==================
router.get("/:id/edit", middleware.isLoggedIn, function(req, res){
  Song.findById(req.params.id, function(err, foundSong) {
    if(err){
      console.log(err);
    } else {
      res.render("songs/edit", {song: foundSong});
    };
  });

});

//============================


//SONG UPDATE ================
router.put("/:id", middleware.isLoggedIn, function(req, res){
  Song.findByIdAndUpdate(req.params.id, req.body.song, function(err, updatedSong){
    if(err){
      res.redirect("/songs");
    } else {
      // check if user has contributed before

      if(!updatedSong.contributors.find(function(element) {
        return element.id.equals(req.user.id);
      })){
        let newContributor = {
          id: req.user.id,
          displayName: req.user.name.givenName + " " + req.user.name.familyName
        }
        updatedSong.contributors.push(newContributor);
        updatedSong.save();
      }

      res.redirect("/songs/"+ req.params.id);
    }
  });
});

//SONG DESTROY ================
router.delete("/:id", middleware.checkSongAuth, function(req, res){
  if(req.isAuthenticated()){
    Song.findByIdAndRemove(req.params.id, function(err, foundSong){
      if(err){
        console.log(err);
      } else {
        res.redirect("/");
      }
    });
  }
});

//============================


//MIDDLEWARE =================
function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/login");
}
//============================


//FUNCTIONS ==================

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


module.exports = router;
