//  MODAL
var modal = document.getElementById("myModal");
var btn = document.getElementById("place-order");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
  var orderSummary = document.getElementById("orderSummary");
  var orderSummaryNew = orderSummary.innerHTML;
  var modalSummary = document.getElementById("modal-summary");
  modalSummary.innerHTML = orderSummaryNew;
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

