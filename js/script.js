function showMovies(date, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    document.getElementById(date).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  document.getElementById("defaultOpen").click();

window.onscroll = function() {myFunction()};
var header = document.getElementById("nav");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function showMenu() {
  var x = document.getElementById("nav");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}