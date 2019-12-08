
var aside = document.querySelector('.aside');
var burger = document.querySelector('.burger');
var cleaner = document.querySelector('.aside__cleaner');

function changeState() {
    aside.classList.toggle("aside_hidden");
}

burger.addEventListener("click", changeState);
cleaner.addEventListener("click", changeState);