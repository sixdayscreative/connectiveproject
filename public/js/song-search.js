$(document).ready(function(){

    var $results = $("#searchResult"),
        $searchBox = $("#song_search");

    $searchBox.on("keyup", function(e){
      let searchVal = $(this).val();
      let expression = new RegExp(searchVal, "i");
      if(searchVal.length > 2){
        $results.html("")
        $.getJSON('/share/new', function(data){
          $.each(data, function(key, value){
            if(value.title.search(expression) != -1 || value.author.search(expression) != -1){
               $results.append('<li class="list-group-item"><a href="#" data-id="'+value._id+'" data-title="'+value.title+'" data-artist="'+value.author+'">'+value.title+', <em>'+value.author+'</em></a></li>');
            }
          })
        });
      } else {
        $results.html("")
      }
    });

    $searchBox.blur(function(){
      // if(!$(document.activeElement).closest("div").hasClass("search-result")){
      //   $results.hide();
      // }
    });
    $searchBox.focusin(function(){
      if($(this).val().length > 2){
        $results.show();
      }
    });

    $results.on("click", "a", function(e){
      let addedSong = '<li class="list-group-item song-added"><span class="songNum">'+($("#songList li").length + 1)+'</span><strong class="song-title">'+$(this).attr("data-title")+'</strong><em class="song-author">'+$(this).attr("data-artist")+'</em><a href="#0" class="remove-song" data-id="'+$(this).attr("data-id")+'"><i class="fa fa-times-circle-o"></i></a></li>';
      $(`<input type="hidden" id="${$(this).attr("data-id")}" name="songset[songs]" value="${$(this).attr("data-id")}" />`).insertAfter("#songset_description");
      $(addedSong).appendTo("#songList ul");

      $(this).closest("li").remove();
      emptyCheck();
    });

    $("#songList").on("click", "a.remove-song", function(){
      $(`#${$(this).attr("data-id")}`).remove();
      $(this).parent().remove();
      emptyCheck();
    });
    function emptyCheck(){
      console.log($("#songList ul li").length);
      if($("#songList ul li").length < 2){
        $("#submitSongs").attr("disabled", true);
      } else {
        $("#submitSongs").removeAttr("disabled");
      }
      if($("#searchResult ul li").length){
        $results.addClass("active");
      } else {
        $results.removeClass("active");
      }
    }
    emptyCheck();
});
