//AUTOMATIC SLIDESHOW

// var slideIndex = 0;

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("container-slider");
//   var dots = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {
//     slideIndex = 1;
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
//   setTimeout(showSlides, 3000);
// }

// showSlides();

var slideIndex = 1;
showSlides(slideIndex);

//next and prev controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("container-slider");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// open
var menu = document.getElementById("dashes");
menu.addEventListener("click", openNav);

var cancel = document.getElementById("times");

cancel.addEventListener("click", closeNav);
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

//close
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
