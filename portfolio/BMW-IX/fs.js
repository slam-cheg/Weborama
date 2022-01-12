screenad.hide();
screenad.setZIndex(1200000);
screenad.position("width=100%&height=100%&hor=left&ver=top&hide=false&sticky=true&offx=0&offy=0&cliprect=auto,auto,auto,auto&antizoom=false&smooth=1");

// ALL
const page = document.querySelector(".page");
const allSlides = document.querySelector(".slide");
const fllscreen = document.querySelector(".fullscreen");
const content = document.querySelector(".content");
const cursor = document.querySelector(".cursor");
const navButtons = document.querySelectorAll(".nav__list-item");
const firstButton = document.querySelector(".nav__list-item_first");
const secondButton = document.querySelector(".nav__list-item_second");
const thirdButton = document.querySelector(".nav__list-item_third");
const fourthButton = document.querySelector(".nav__list-item_fourth");
const fifthButton = document.querySelector(".nav__list-item_fifth");
const allMainScreens = document.querySelectorAll(".main-content");
const closeButton = document.querySelector(".close");
const allButtons = document.querySelectorAll(".click__button");
var isDrawing;
var canvas;
var context;

// DEFAULT SCREEN
const defaultScreen = document.querySelector(".default-screen");

// FIRST SCREEN
const firstScreen = document.querySelector(".first-screen");
const canvasContainer = firstScreen.querySelector(".canvas-container");
const bottomTextFirst = firstScreen.querySelector(".text-wrapper-bottom");
const arrow = firstScreen.querySelector(".arrow");
const tryText = firstScreen.querySelector(".try-text");
const borders = firstScreen.querySelector(".border-wrapper");

// SECOND SCREEN
const secondScreen = document.querySelector(".second-screen");
const bottomTextSecond = secondScreen.querySelector(".text-wrapper-bottom");
const arrowSecond = secondScreen.querySelector(".arrow");
const soundBtn = secondScreen.querySelector(".sound-btn");
const tryTextSecond = secondScreen.querySelector(".first-line");

// THIRD SCREEN
const thirdScreen = document.querySelector(".third-screen");
const bottomTextThird = thirdScreen.querySelector(".text-wrapper-bottom");
const roofButton = thirdScreen.querySelector(".change-btn");
const arrowThird = thirdScreen.querySelector(".arrow");
const tryTextThird = thirdScreen.querySelector(".first-line");
const tryButton = thirdScreen.querySelector(".change-btn");

// FOURTH SCREEN
const fourthScreen = document.querySelector(".fourth-screen");
const arrowFourth = fourthScreen.querySelector(".arrow");
const lengthBar = fourthScreen.querySelector(".length-bar");
const distLine = lengthBar.querySelector(".line");
const distNum = lengthBar.querySelector(".num-kilometers");
const tryButtonFourth = fourthScreen.querySelector(".fuel-btn");
const tryTextFourth = fourthScreen.querySelector(".first-line");
const clock = fourthScreen.querySelector(".clock");
const clockArrow = clock.querySelector(".line-two");
const clockSec = clock.querySelector(".seconds");
const clockMinText = clock.querySelector(".minutes");
const bottomTextFourth = fourthScreen.querySelector(".text-wrapper-bottom");

// LAST SCREEN
const lastScreen = document.querySelector(".last-screen");
const videoPlayBtn = lastScreen.querySelector(".play-button");
const contentWrapper = lastScreen.querySelector(".wrapper");
const cover = lastScreen.querySelector(".cover");
const player = lastScreen.querySelector(".player");
const videoDescription = lastScreen.querySelector(".video-description");

window.onload = function () {
    canvas = document.getElementById("drawingCanvas");
    context = canvas.getContext("2d");
    border = borders.querySelectorAll(".border");
    border.forEach((brd) => {
        brd.addEventListener("mouseenter", stopDrawing);
    });

    canvas.onmousedown = startDrawing;
    canvas.onmouseleave = stopDrawing;
    canvas.onmouseup = stopDrawing;
    canvas.onmouseout = stopDrawing;
    canvas.onmousemove = draw;
};

allButtons.forEach((button) => {
    button.addEventListener("click", () => {
        screenad.click();
    });
});

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
fifthButton.addEventListener("click", lastSlide);
soundBtn.addEventListener("click", soundOn);
tryButton.addEventListener("click", openRoof);
tryButtonFourth.addEventListener("click", chargeCar);
videoPlayBtn.addEventListener("click", playVideo);
player.addEventListener("click", stopVideo);
player.addEventListener("ended", stopVideo);

function minimizeCursor() {
    cursor.classList.add("cursor_active");
}
function maximizeCursor() {
    cursor.classList.remove("cursor_active");
}

function firstSlide() {
    setDefault();
    navButtons.forEach((btn) => {
        btn.classList.remove("nav__list-item_active");
    });
    allMainScreens.forEach((scr) => {
        scr.classList.add("deactive-screen");
    });
    defaultScreen.classList.add("deactive-screen");
    firstButton.classList.add("nav__list-item_active");
    firstScreen.classList.remove("deactive-screen");
}

function secondSlide() {
    setDefault();
    navButtons.forEach((btn) => {
        btn.classList.remove("nav__list-item_active");
    });
    allMainScreens.forEach((scr) => {
        scr.classList.add("deactive-screen");
    });
    defaultScreen.classList.add("deactive-screen");
    secondButton.classList.add("nav__list-item_active");
    secondScreen.classList.remove("deactive-screen");
}

function thirdSlide() {
    setDefault();
    navButtons.forEach((btn) => {
        btn.classList.remove("nav__list-item_active");
    });
    allMainScreens.forEach((scr) => {
        scr.classList.add("deactive-screen");
    });
    defaultScreen.classList.add("deactive-screen");
    thirdButton.classList.add("nav__list-item_active");
    thirdScreen.classList.remove("deactive-screen");
}

function fourthSlide() {
    setDefault();
    navButtons.forEach((btn) => {
        btn.classList.remove("nav__list-item_active");
    });
    allMainScreens.forEach((scr) => {
        scr.classList.add("deactive-screen");
    });
    defaultScreen.classList.add("deactive-screen");
    fourthButton.classList.add("nav__list-item_active");
    fourthScreen.classList.remove("deactive-screen");
}

function lastSlide() {
    setDefault();
    navButtons.forEach((btn) => {
        btn.classList.remove("nav__list-item_active");
    });
    allMainScreens.forEach((scr) => {
        scr.classList.add("deactive-screen");
    });
    defaultScreen.classList.add("deactive-screen");
    fifthButton.classList.add("nav__list-item_active");
    lastScreen.classList.remove("deactive-screen");
}

function startDrawing(e) {
    context.strokeStyle = "rgb(255,255,255)";
    context.lineWidth = "2";
    context.moveTo(e.pageX - canvas.offsetLeft, e.pageY - canvas.offsetTop);
    isDrawing = true;
    context.beginPath();
}

function draw(event) {
    if (isDrawing === true) {
        // let x = event.pageX - 460 - canvas.offsetLeft;
        // let y = event.pageY - 232 - canvas.offsetTop;

        let x = event.offsetX - canvas.offsetLeft;
        let y = event.offsetY - canvas.offsetTop;

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
    soundBtn.classList.remove("sound-btn_active");
    bottomTextSecond.classList.remove("show-hidden-text");
    arrowSecond.classList.remove("deactive-screen");
    tryTextSecond.classList.remove("deactive-screen");
    thirdScreen.classList.remove("roof-active");
    bottomTextThird.classList.remove("show-hidden-text");
    arrowThird.classList.remove("deactive-screen");
    tryTextThird.classList.remove("deactive-screen");
    arrowFourth.classList.remove("deactive-screen");
    tryTextFourth.classList.remove("deactive-screen");
    tryButtonFourth.classList.remove("deactive-screen");
    clock.classList.add("deactive-screen");
    lengthBar.classList.add("deactive-screen");
    distLine.classList.remove("dist-anim");
    clockArrow.classList.remove("clock-anim");
    bottomTextFourth.classList.remove("show-hidden-text");
    tryButton.classList.remove("deactive-screen");
    videoPlayBtn.classList.remove("deactive-screen");
    cover.classList.remove("deactive-screen");
    videoDescription.classList.remove("deactive-screen");
    player.classList.add("player_paused");
    player.pause();
    player.currentTime = 0;
}

function closeFS() {
    screenad.setBlockPageTouches(false);
    screenad.executeScript("document.body.style.overflow=''");
    screenad.hide();
    page.classList.remove("fs-visible");
    setDefault();
}

function soundOn() {
    soundBtn.classList.toggle("sound-btn_active");
    bottomTextSecond.classList.toggle("show-hidden-text");
    arrowSecond.classList.toggle("deactive-screen");
    tryTextSecond.classList.toggle("deactive-screen");
}

function openRoof() {
    thirdScreen.classList.toggle("roof-active");
    bottomTextThird.classList.toggle("show-hidden-text");
    arrowThird.classList.toggle("deactive-screen");
    tryTextThird.classList.toggle("deactive-screen");
    tryButton.classList.toggle("deactive-screen");
}

function chargeCar() {
    clockSec.textContent = 0;
    distNum.textContent = 0;
    arrowFourth.classList.toggle("deactive-screen");
    tryTextFourth.classList.toggle("deactive-screen");
    tryButtonFourth.classList.toggle("deactive-screen");
    clock.classList.toggle("deactive-screen");
    lengthBar.classList.toggle("deactive-screen");
    distLine.classList.toggle("dist-anim");
    clockArrow.classList.toggle("clock-anim");
    bottomTextFourth.classList.toggle("show-hidden-text");

    let timer = setInterval(secondsCounter, 1000);

    function secondsCounter() {
        clockSec.textContent++;
        if (clockSec.textContent > 5) {
            deleteInterval(timer);
        }
    }

    function deleteInterval(interval) {
        clearInterval(interval);
    }

    let counter = setInterval(distCount, 60);

    function distCount() {
        distNum.textContent++;
        if (distNum.textContent > 99) {
            deleteInterval(counter);
        }
    }
}

function playVideo() {
    player.play();
    player.classList.remove("player_paused");
    videoPlayBtn.classList.add("deactive-screen");
    videoDescription.classList.add("deactive-screen");
    contentWrapper.classList.add("deactive-screen");
}

function stopVideo() {
    player.pause();
    player.classList.add("player_paused");
    videoPlayBtn.classList.remove("deactive-screen");
    videoDescription.classList.remove("deactive-screen");
    contentWrapper.classList.remove("deactive-screen");
}