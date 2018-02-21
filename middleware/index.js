const Comment = require('../models/comment');
const middlewareObj = {}

middlewareObj.checkCommentOwnership = function(req, res, next){
  if(req.isAuthenticated()){
    Comment.findById(req.params.comment_id, function(err, foundComment){
      if(err){
        res.redirect("back");
      } else {
        if(foundComment.author.id.equals(req.user._id)){
          next();
        } else {
          res.redirect("back")
        }
      }
    });
  } else {
    res.redirect("back");
  }
};

middlewareObj.checkSongsetOwnership = function(req, res, next){
  if(req.isAuthenticated()){
    Songset.findById(req.params.comment_id, function(err, foundSet){
      if(err){
        res.redirect("back");
      } else {
        if(foundSet.author.id.equals(req.user._id)){
          next();
        } else {
          res.redirect("back")
        }
      }
    });
  } else {
    res.redirect("back");
  }
};

middlewareObj.isLoggedIn = function(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  req.flash("error", "Please log in.")
  res.redirect("/login");
}

middlewareObj.checkSongAuth = function(req, res, next){
  if(req.isAuthenticated()){
    Song.findById(req.params.id, function(err, foundSong){
      if(err){
        res.redirect("back");
      } else {
        let contributorTest = function(){
            return foundSong.contributors.findIndex(element => element.id.equals(req.user.id));
        };
        if(contributorTest() === 0){
          return next();
        } else {
          console.log("You need to be the only contributor dude");
          res.redirect("back");
        }
      }
    });
  } else {
    console.log("You aint logged in mate");
    res.redirect("back")
  }
}

middlewareObj.usernameToLowerCase = function(req, res, next){
    req.body.username = req.body.username.toLowerCase();
    next();
}

module.exports = middlewareObj;
