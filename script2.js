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
