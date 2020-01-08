
var aside = document.querySelector('.aside');
var burger = document.querySelector('.burger');
var cleaner = document.querySelector('.aside__cleaner');
var overlay = document.querySelector('.main__overlay');

function changeState() {
    aside.classList.toggle("aside_hidden");
    overlay.classList.toggle("main__overlay_show");
}

burger.addEventListener("click", changeState);
cleaner.addEventListener("click", changeState);