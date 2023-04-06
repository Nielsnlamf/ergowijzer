function makeActive(event) {
  var previous = document.getElementsByClassName("active");
  if (previous.length > 0) {
     previous[0].className = previous[0].className.replace(" active", "");
  }
  event.target.className += " active";
}

document.addEventListener("DOMContentLoaded", () => {
  var list = document.getElementsByClassName("topic");
  var list2 = document.getElementsByClassName("topic1");
  for (let i = 0; i < list.length; i++) {
    list[i].classList.add("hidden");
  }
  for (let i = 0; i < list2.length; i++) {
    list2[i].classList.remove("hidden");
  }

})
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function swapContent(e) {
  makeActive(event);
  let topicNum = parseInt(e.getAttribute("data-topic"));
  var paragraphs = e.parentElement.parentElement.getElementsByClassName("topic");
  for (let i = 0; i < paragraphs.length; i++) {
    // console.log(paragraphs[i]);
    paragraphs[i].classList.add("hidden");
  }
  e.parentElement.parentElement.getElementsByClassName("topic")[topicNum-1].classList.remove("hidden");
};

