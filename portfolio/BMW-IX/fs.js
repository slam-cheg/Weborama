const page = document.querySelector(".page");
const fllscreen = document.querySelector(".fullscreen");
const content = document.querySelector(".content");
const cursor = document.querySelector(".cursor");
const navButtons = document.querySelectorAll(".nav__list-item");
const firstButton = document.querySelector(".nav__list-item_first");
const secondButton = document.querySelector(".nav__list-item_second");
const thirdButton = document.querySelector(".nav__list-item_third");
const fourthButton = document.querySelector(".nav__list-item_fourth");
const fifthButton = document.querySelector(".nav__list-item_fifth");
const defaultScreen = document.querySelector(".default-screen");
const allMainScreens = document.querySelectorAll(".main-content");
const firstScreen = document.querySelector(".first-screen");
const canvasContainer = document.querySelector(".canvas-container");
const closeButton = document.querySelector(".close");
const bottomTextFirst = document.querySelector(".text-wrapper-bottom");
const arrow = document.querySelector(".arrow");
const tryText = document.querySelector(".try-text");
var isDrawing;
var canvas;
var context;

screenad.hide();
screenad.setZIndex(1200000);
screenad.position("width=100%&height=100%&hor=left&ver=top&hide=false&sticky=true&offx=0&offy=0&cliprect=auto,auto,auto,auto&antizoom=false&smooth=1");

window.onload = function () {
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");

    canvas.onmousedown = startDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
};

closeButton.addEventListener("click", () => {
    screenad.event("FS_userclose");
    closeFS();
});
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
        showText();
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

function showText() {
    bottomTextFirst.classList.add("show-hidden-text");
    setTimeout(() => {
        tryText.classList.add("deactive-screen");
        arrow.classList.add("deactive-screen");
    }, 1000);
}

screenad.shared.showFullScreen = () => {
    screenad.setBlockPageTouches(true);
    screenad.executeScript("document.body.style.overflow='hidden'");
    screenad.show();
    page.classList.add("fs-visible");
    screenad.event("FS_open");

    setTimeout(() => {
        fullscreen.classList.add("anim");
        setTimeout(() => {}, 1000);
    }, 100);
};

function setDefault() {
    page.classList.remove("fs-visible");
    tryText.classList.remove("deactive-screen");
    arrow.classList.remove("deactive-screen");
    bottomTextFirst.classList.remove("show-hidden-text");
    navButtons.forEach((btn) => {
        btn.classList.remove("nav__list-item_active");
    });
    allMainScreens.forEach((scr) => {
        scr.classList.add("deactive-screen");
    });
    defaultScreen.classList.remove("deactive-screen");
}

function closeFS() {
    screenad.setBlockPageTouches(false);
    screenad.executeScript("document.body.style.overflow=''");
    screenad.hide();
    setDefault();
}
