const express = require('express');
const router = express.Router({mergeParams: true});
const Song = require('../models/song');
const Score = require('../models/songscore');
const middleware = require('../middleware');

//SCORE ===================


router.post("/:songid/score", middleware.isLoggedIn, function(req, res){
  scoreType = `${req.body.type}Scores`;
  Song.findById(req.params.songid).populate(scoreType).exec(function(err, foundSong){
    if(err){
      console.log(err);
    } else {
      let score = {
        score: req.body.score,
        author: {
          id: req.user.id
        }
      };



      let ratedBefore = false;
      let userScoreId;

      if(foundSong[scoreType].length){
        foundSong[scoreType].forEach(function(doc){

          if(doc.author.id.equals(req.user.id)){
            ratedBefore = true;
            userScoreId = doc._id;
            return;
          };

        });
      }

      if(!ratedBefore){
        console.log("Not rated before");
        Score.create(score, function(err, newScore){
          if(err){
            console.log(err);
          } else {

            foundSong[scoreType].push(newScore);

            let scoreSum = 0;
            foundSong[scoreType].forEach((entry) => {
              scoreSum += entry.score;
            });

            foundSong[req.body.type] = Math.round((scoreSum / foundSong[scoreType].length) * 10) / 10;
            foundSong.save();

            res.status(201).json(foundSong);
          }
        });
      } else {
        console.log("Rated before. New score: "+score.score);
        Score.findByIdAndUpdate(userScoreId, score, function(err, updatedScore){

          if(err){
            console.log(err);
          } else {
            let scoreSum = 0;
            foundSong[scoreType].forEach((entry) => {
              scoreSum += entry.score;
            });

            foundSong[req.body.type] = Math.round((scoreSum / foundSong[scoreType].length) * 10) / 10;
            foundSong.save();

            res.status(201).json(foundSong);
          }

        })
      }



    }
  });
});


//============================


module.exports = router;
