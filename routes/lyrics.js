const express = require('express');
const router = express.Router({mergeParams: true});
const Song = require('../models/song');
const Lyrics = require('../models/lyrics');
const middleware = require('../middleware');
//LYRICS ===================
// - new
router.get("/add", function(req, res){
  Song.findById(req.params.id, function(err, song){
    if(err){
      console.log(err);
    } else {
      res.render("lyrics/new", {song: song});
    }
  })
});
// - create
router.post("/", function(req, res){
  console.log(req.body);
  Song.findById(req.params.id, function(err, song){
    if(err){
      console.log(err);
      res.redirect("/songs");
    } else {
      let newVerse = [];
      Object.keys(req.body).forEach(function(verse, index) {
        newVerse.push({
          verseType: req.body[verse].verseType,
          text: req.body[verse].verseText,
          order: index
        });
      });
      newVerse.forEach((verse, i) => {
        Lyrics.create(verse, function(err, addedVerse){
          if(err){
            console.log(err);
          } else {
            // add username and id to verse
            // addedVerse.author.id = req.user.id;
            // addedVerse.author.displayName = req.user.name.givenName + " " + req.user.name.familyName;
            // addedVerse.save();
            song.lyrics.push(addedVerse);
            if (newVerse.length === i + 1)
            {
              song.save();
              res.redirect("/songs/"+ req.params.id);
            }
          }
        });
      });
    }
  });
});

// - edit
router.get("/edit", function(req, res){
  Song.findById(req.params.id).populate("lyrics").exec(function(err, foundSong){
    if (err) {
      console.log(err);
    } else {
      res.render("lyrics/edit", {song: foundSong});
    }
  });
});

// - update
router.post("/edit", function(req, res){
  Song.findById(req.params.id).populate("lyrics").exec(function(err, foundSong){
    foundSong.lyrics.forEach(function(lyric){
      Lyrics.findByIdAndRemove(lyric._id, function(err, foundVerse){

        if(err){
          console.log(err);
        } else {
          console.log(`removed ${foundVerse._id}`);
        }
      })
    });

    let newVerse = [];

    Object.keys(req.body).forEach(function(verse, index) {
      newVerse.push({
        verseType: req.body[verse].verseType,
        text: req.body[verse].verseText,
        order: index
      });
    });



    newVerse.forEach((verse, i) => {
       Lyrics.create(verse, function(err, addedVerse){
        if(err){
          console.log(err);
        } else {

          foundSong.lyrics.push(addedVerse);

          console.log(foundSong.lyrics);
          if (newVerse.length === i + 1)
          {
            saveLyrics();
          }
        }
       });
    });
    function saveLyrics(){
      foundSong.save();
      res.redirect("back");
    }


  });

    // Song.findById(req.params.id, function(err, song){
    //   if(err){
    //     console.log(err);
    //   } else {
    //
    //
    //     //song.save();
    //     console.log(song);
    //   }
    // });



  //  res.redirect("back")
  //   Song.findById(req.params.id, function(err, song){
  //
  //   if(err){
  //     console.log(err);
  //     res.redirect("/songs");
  //   } else {
  //     let newVerse = [];
  //     Object.keys(req.body).forEach(function(verse, index) {
  //       newVerse.push({
  //         verseType: req.body[verse].verseType,
  //         text: req.body[verse].verseText,
  //         order: index
  //       });
  //     });
  //     newVerse.forEach((verse, i) => {
  //       Lyrics.create(verse, function(err, addedVerse){
  //         if(err){
  //           console.log(err);
  //         } else {
  //           // add username and id to verse
  //           // addedVerse.author.id = req.user.id;
  //           // addedVerse.author.displayName = req.user.name.givenName + " " + req.user.name.familyName;
  //           // addedVerse.save();
  //           song.lyrics.push(addedVerse);
  //           if (newVerse.length === i + 1)
  //           {
  //             song.save();
  //             res.redirect("/songs/"+ req.params.id);
  //           }
  //         }
  //       });
  //     });
  //   }
  // });
});

//============================


module.exports = router;
