const express = require('express');
const router = express.Router({mergeParams: true});
const Song = require('../models/song');
const Comment  = require('../models/comment');
const middleware = require('../middleware');

//COMMENTS ===================
// - new
router.get("/add", function(req, res){
  Song.findById(req.params.id, function(err, song){
    if(err){
      console.log(err);
    } else {
      res.render("comments/new", {song: song});
    }
  })

});
// - create
router.post("/", middleware.isLoggedIn, function(req, res){
  Song.findById(req.params.id, function(err, song){
    if(err){
      console.log(err);
      res.redirect("/songs");
    } else {
      Comment.create(req.body.comment, function(err, comment){
        if(err){
          console.log(err);
        } else {
          // add username and id to comment
          comment.author.id = req.user.id;
          comment.author.displayName = req.user.name.givenName + " " + req.user.name.familyName;
          comment.save();
          song.comments.push(comment);
          song.save();
          res.redirect("/songs/"+song._id);
        }
      })
    }
  });
});
// - edit
router.get("/:comment_id/edit", middleware.checkCommentOwnership, function(req, res){
  Comment.findById(req.params.comment_id, function(err, foundComment){
    if (err) {
      console.log(err);
    } else {
      res.render("comments/edit", {song_id: req.params.id, comment: foundComment});

    }
  });
});
// - update
router.put("/:comment_id", middleware.checkCommentOwnership, function(req, res){
  Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, foundComment){
    if (err) {
    console.log(err);
      res.redirect("back")
    } else {
      res.redirect("/songs/"+ req.params.id + "#" + req.params.comment_id);
    }
  });
});
// - delete
router.delete("/:comment_id/", middleware.checkCommentOwnership, function(req, res){
  Comment.findByIdAndRemove(req.params.comment_id, function(err, foundComment){
    if(err){
      res.redirect("back");
    } else {
      res.redirect("/songs/" + req.params.id);
    };
  })
});

//============================


module.exports = router;
