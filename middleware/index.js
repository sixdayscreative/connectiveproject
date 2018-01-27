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

module.exports = middlewareObj;
