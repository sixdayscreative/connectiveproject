$(document).ready(function(){

  var songid = $("#song").attr("data-songid");
  function getScores(){

  }

  $("#simplicity").on("click", "a", function(){
    var score = $(this).attr("data-score");
    addScore("simplicity", score);
  });
  $("#teaching").on("click", "a", function(){
    var score = $(this).attr("data-score");
    addScore("teaching", score);
  });
  $("#worship").on("click", "a", function(){
    var score = $(this).attr("data-score");
    addScore("worship", score);
  });

  function addScore(type, score){
    var postUrl = "/api/"+songid+"/score";
    $.post(postUrl, {type: type, score: score})
    .done(function(newScore){
      console.log(newScore);
      updateScore(newScore, type);
    })
    .fail(function(err){
      console.log(err);
    });

  }
  function updateScore(update, type){
    $("#"+type+"_score").html(update[type])
  }

});
