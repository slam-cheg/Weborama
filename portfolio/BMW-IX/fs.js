const page = document.querySelector(".page");
const content = document.querySelector(".content");
const cursor = document.querySelector(".cursor");
const firstButton = document.querySelector(".nav__list-item_first");
const secondButton = document.querySelector(".nav__list-item_second");
const thirdButton = document.querySelector(".nav__list-item_third");
const fourthButton = document.querySelector(".nav__list-item_fourth");
const fifthButton = document.querySelector(".nav__list-item_fifth");
const defaultScreen = document.querySelector(".default-screen");
const firstScreen = document.querySelector(".first-screen");

page.addEventListener("mousedown", minimizeCursor);
page.addEventListener("mouseup", maximizeCursor);

firstButton.addEventListener("click", firstSlide);
secondButton.addEventListener("click", secondSlide);
thirdButton.addEventListener("click", thirdSlide);
fourthButton.addEventListener("click", fourthSlide);
fifthButton.addEventListener("click", fifthSlide);

function minimizeCursor() {
    cursor.classList.add("cursor_active");
}
function maximizeCursor() {
    cursor.classList.remove("cursor_active");
}

function firstSlide() {
    firstButton.classList.add("nav__list-item_active");
    secondButton.classList.remove("nav__list-item_active");
    thirdButton.classList.remove("nav__list-item_active");
    fourthButton.classList.remove("nav__list-item_active");
    fifthButton.classList.remove("nav__list-item_active");
    defaultScreen.classList.add("deactive-screen");
    firstScreen.classList.remove("deactive-screen");
}

function secondSlide() {
    firstButton.classList.remove("nav__list-item_active");
    secondButton.classList.add("nav__list-item_active");
    thirdButton.classList.remove("nav__list-item_active");
    fourthButton.classList.remove("nav__list-item_active");
    fifthButton.classList.remove("nav__list-item_active");
}

function thirdSlide() {
    firstButton.classList.remove("nav__list-item_active");
    secondButton.classList.remove("nav__list-item_active");
    thirdButton.classList.add("nav__list-item_active");
    fourthButton.classList.remove("nav__list-item_active");
    fifthButton.classList.remove("nav__list-item_active");
}

function fourthSlide() {
    firstButton.classList.remove("nav__list-item_active");
    secondButton.classList.remove("nav__list-item_active");
    thirdButton.classList.remove("nav__list-item_active");
    fourthButton.classList.add("nav__list-item_active");
    fifthButton.classList.remove("nav__list-item_active");
}

function fifthSlide() {
    firstButton.classList.remove("nav__list-item_active");
    secondButton.classList.remove("nav__list-item_active");
    thirdButton.classList.remove("nav__list-item_active");
    fourthButton.classList.remove("nav__list-item_active");
    fifthButton.classList.add("nav__list-item_active");
}
