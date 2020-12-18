var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("photos");
  var cercles = document.getElementsByClassName("cercle");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < cercles.length; i++) {
    cercles[i].className = cercles[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  cercles[slideIndex - 1].className += " active";
}
