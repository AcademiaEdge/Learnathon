function checkScroll(){
  var startY = $('#navbar').height(); //The point where the navbar changes in px

  if($(window).scrollTop() > startY){
      $('#navbar').addClass("frosted");
      console.log("sup");
  }else{
      $('#navbar').removeClass("frosted");
  }
}

if($('#navbar').length > 0){
  $(window).on("scroll load resize", function(){
      checkScroll();
  });
}