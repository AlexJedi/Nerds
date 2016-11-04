var link = document.querySelector(".js-form");
var popup = document.querySelector(".pop-up");
var close = document.querySelector(".close");
var namex = document.querySelector(".name");
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("pop-up-show");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("pop-up-show");
});

var link = document.querySelector(".js-slide");
var popup = document.querySelector("slide");
link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("slider-active");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("slider-active");
});
