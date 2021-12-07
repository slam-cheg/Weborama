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
const canvasContainer = document.querySelector(".canvas-container");
var isDrawing;
var canvas;
var context;

window.onload = function () {
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");

    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
};

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

function startDrawing(e) {
    context.strokeStyle = "rgb(255,255,255)";
    context.lineWidth = "3";
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    isDrawing = true;
    context.beginPath();
}

function draw(e) {
    if (isDrawing === true) {
        var x = e.pageX - 547 - canvas.offsetLeft;
        var y = e.pageY - 395 - canvas.offsetTop;

        context.lineTo(x, y);
        context.stroke();
    }
}

function stopDrawing() {
    isDrawing = false;
    transition();
}

function transition() {
    canvasContainer.classList.add("canvas-hidden");
    setTimeout(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        canvasContainer.classList.remove("canvas-hidden");
    }, 300);
}
