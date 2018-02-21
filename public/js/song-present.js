// $(".present-song").click(function(e){
//
//     var postUrl = "/api/"+songid+"/score";
//     $.getJSON('/songs/new', function(data){
//       $.each(data, function(key, value){
//         if(value.title.search(expression) != -1 || value.author.search(expression) != -1){
//            $results.append('<li class="list-group-item"><a href="#" data-id="'+value._id+'" data-title="'+value.title+'" data-artist="'+value.author+'">'+value.title+', <em>'+value.author+'</em></a></li>');
//         }
//       })
//     });
//
// });

$(".slides").slick({
  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-right"></i></button>',
  prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-left"></i></button>'
});

// function slideShowNav(){
//
//   var slides = $(".slides");
//
//   $(window).on("keydown", function(e){
//     switch(e.which){
//       case 39:
//         nextSlide();
//         break;
//       case 37:
//         prevSlide();
//     }
//   });
//
//   slides.on("click", function(){
//     nextSlide();
//   });
//
//   function prevSlide(){
//     var activeSlide = "";
//
//     activeSlide = slides.find(".active");
//     if(activeSlide){
//       if(activeSlide.prev()){
//         activeSlide.prev().addClass("active");
//         activeSlide.removeClass("active");
//       }
//     } else {
//       slides.find(".slide:last-child").addClass("active");
//     }
//   }
//
//   function nextSlide(){
//     var activeSlide = "";
//
//     activeSlide = slides.find(".active");
//     if(activeSlide){
//       if(activeSlide.next()){
//         activeSlide.next().addClass("active");
//         activeSlide.removeClass("active");
//       } else {
//         activeSlide.removeClass("active");
//       }
//     } else {
//       slides.find(".slide").addClass("active");
//     }
//   }
// }
//
//
// slideShowNav();
