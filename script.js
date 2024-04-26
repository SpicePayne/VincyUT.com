var contactBtn = document.getElementById("contactBtn");
var contactPopup = document.getElementById("contactPopup");

contactBtn.onclick = function() {
  contactPopup.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == contactPopup) {
    contactPopup.style.display = "none";
  }
}

document.getElementsByClassName("close")[0].onclick = function() {
  contactPopup.style.display = "none";
}