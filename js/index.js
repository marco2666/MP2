
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










// function before(){
//     document.getElementById('myImage')
//     .src="https://cdn-icons-png.flaticon.com/128/8065/8065294.png";
//     document.getElementById('message')
//     .innerHTML="Hii! GeeksforGeeks people";
// }
     
// function afterr(){
//     document.getElementById('myImage')
//     .src="https://cdn-icons-png.flaticon.com/128/8065/8065209.png";
//     document.getElementById('message')
//     .innerHTML="Bye! GeeksforGeeks people";
// }

//             var images = new Array();
//             images[0] = "home.jpg";
//             images[1] = "https://cdn-icons-png.flaticon.com/128/8065/8065179.png" ;
//             images[2] = "https://cdn-icons-png.flaticon.com/128/10588/10588547.png";
//             var currentpic = 0;
//             var lastpic = images.length-1;
//             function nextslide()
//             {
//                 if (currentpic == lastpic)
//                 {
//                     currentpic = 0; 
//                     document.getElementById('slide').src = images[currentpic];
//                 }
//                 else
//                 {
//                     currentpic++;
//                     document.getElementById('slide').src = images[currentpic];
//                 }
//             }

//             function beforeslide()
//             {
//                nextSlide =(get)
//             }
      





//             var images = new Array(
//                 "http://placekitten.com/500/200",
//                 "http://placekitten.com/499/200",
//                 "http://placekitten.com/501/200",
//                 "http://placekitten.com/500/199");
            
//             function getCurrentImageIndex() {
//                 return images.indexOf(document.getElementById("image").src);
//             }
            
//             function nextImage() {
//                 nextImage = (getCurrentImageIndex() + 1) % images.length;
//                 document.getElementById("image").src = images[nextImage];
//             }
            
//             function prevImage() {
//                 nextImage = (getCurrentImageIndex() - 1 + images.length) % images.length;
//                 document.getElementById("image").src = images[nextImage];
//             }