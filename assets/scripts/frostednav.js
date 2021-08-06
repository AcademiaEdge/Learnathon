function checkScroll(){
  var startY = $('#navbar').height(); //The point where the navbar changes in px

  if($(window).scrollTop() > startY){
      $('#navbar ul').addClass("frosted");
      console.log("sup");
  }else{
      $('#navbar ul').removeClass("frosted");
  }
}

if($('#navbar').length > 0){
  $(window).on("scroll load resize", function(){
      checkScroll();
  });
}