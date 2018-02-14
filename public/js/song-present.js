function slideShowNav(){

  var slides = $(".slides");

  $(window).on("keydown", function(e){
    switch(e.which){
      case 39:
        nextSlide();
        break;
      case 37:
        prevSlide();
    }
  });

  slides.on("click", function(){
    nextSlide();
  });

  function prevSlide(){
    var activeSlide = "";

    activeSlide = slides.find(".active");
    if(activeSlide){
      if(activeSlide.prev()){
        activeSlide.prev().addClass("active");
        activeSlide.removeClass("active");
      }
    } else {
      slides.find(".slide:last-child").addClass("active");
    }
  }

  function nextSlide(){
    var activeSlide = "";

    activeSlide = slides.find(".active");
    if(activeSlide){
      if(activeSlide.next()){
        activeSlide.next().addClass("active");
        activeSlide.removeClass("active");
      } else {
        activeSlide.removeClass("active");
      }
    } else {
      slides.find(".slide").addClass("active");
    }
  }
}


slideShowNav();
