var slideIndex = 0;
moveSlidesUp();
function moveSlidesUp() {
  var focusHeight = $(".focus").height();
  $("#bgimg1").css('margin-top', -focusHeight);
  $("#bgimg2").css('margin-top', -focusHeight);
  $("#bgimg3").css('margin-top', -focusHeight);
}

showSlides();


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");


  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";



  setTimeout(showSlides, 4000); 
  // Change image every 2 seconds

};