function changeBurgerState() {
    if (burger.className == "burger burger_active") {
        burger.className = "burger";
    }
        else {
            burger.className = "burger burger_active";
        }
}

function changeAsideState() {
    if (aside.className == "aside aside_active") {
        aside.className = "aside";
    }
        else {
            aside.className = "aside aside_active";
        }
}

// function onClickClose(event) {
//     if (!aside.contains(event.target) && aside.className == "aside_active") {
//         aside.className = "aside";
//         burger.className = "burger";
//     }
// }

let burger = document.querySelector(".burger");
let aside = document.querySelector(".aside");

burger.addEventListener("click", changeBurgerState);
burger.addEventListener("click", changeAsideState);
document.addEventListener("click", onClickClose);