const banner = document.querySelector(".banner");
const firstScreen = document.querySelector(".first-screen");
const secondScreen = document.querySelector(".second-screen");
const thirdScreen = document.querySelector(".third-screen");
const fourthScreen = document.querySelector(".fourth-screen");
const fifthScreen = document.querySelector(".fifth-screen");
const sixthScreen = document.querySelector(".sixth-screen");
const seventhScreen = document.querySelector(".seventh-screen");
const disclamerScreenOne = document.querySelector(".disclamer-one");
const disclamerScreenTwo = document.querySelector(".disclamer-two");
const percent = document.querySelector(".percent");
const header = document.querySelector(".header");

const hand = document.querySelector(".hand");
const card = document.querySelector(".card");
const transition = document.querySelector(".transition");
const chair = document.querySelector(".chair");
const cart = document.querySelector(".cart");
const vtbCard = document.querySelector(".vtb-card");
const coctail = document.querySelector(".coctail");
const aircraft = document.querySelector(".aircraft");

let timer = setInterval(wait, 1000);
let seconds = 0;

banner.addEventListener("mousemove", moveOnMouse);
banner.addEventListener("mousemove", handMoveX);
banner.addEventListener("mousemove", handMoveY);
banner.addEventListener("mouseout", handDefault);
banner.addEventListener("mouseout", moveToDefault);
firstScreen.addEventListener("click", changeAnim);
secondScreen.addEventListener("click", moveChair);
thirdScreen.addEventListener("click", moveCart);
fourthScreen.addEventListener("click", moveCard);
fifthScreen.addEventListener("click", fiveScreen);
sixthScreen.addEventListener("click", movePercent);

function wait() {
    seconds++;
    console.log(seconds);
    if (seconds === 15) {
        loop();
        firstScreen.style.display = "none";
        seventhScreen.style.display = "block";
        hand.style.display = "none";
        header.style.cursor = "auto";
        banner.style.cursor = "auto";
        deleteInterval();
    }
}

function deleteInterval() {
    clearInterval(timer);
}

function handMoveX(event) {
    hand.style.left = event.pageX - 350 + "px";
}
function handMoveY(event) {
    hand.style.top = event.pageY - 240 + "px";
}

function handDefault() {
    hand.classList.add("hand-default");
}

function moveOnMouse() {
    hand.classList.remove("hand-default");
    card.classList.remove("card-anim-deactive");
}

function changeAnim() {
    deleteInterval();
    card.classList.add("card-anim-active");
    setTimeout(() => {
        transition.classList.add("transition-anim");
        setTimeout(() => {
            firstScreen.style.display = "none";
            secondScreen.style.display = "block";
            hand.style.display = "none";
            header.style.cursor = "pointer";
            banner.style.cursor = "pointer";
            moveToDefault();
            setTimeout(() => {
                card.classList.remove("card-anim-active");
            }, 500);
        }, 500);
    }, 1000);
}

function moveToDefault() {
    card.classList.add("card-anim-deactive");
}

function moveChair() {
    transition.classList.remove("transition-anim");
    chair.classList.add("chair-anim-one");
    setTimeout(() => {
        transition.classList.add("transition-anim");
        setTimeout(function () {
            secondScreen.style.display = "none";
            thirdScreen.style.display = "block";
            setTimeout(function () {
                chair.classList.remove("chair-anim-one");
            }, 500);
        }, 500);
    }, 1500);
}

function moveCart() {
    transition.classList.remove("transition-anim");
    cart.classList.add("cart-anim-two");
    setTimeout(() => {
        setTimeout(function () {
            transition.classList.add("transition-anim");
            setTimeout(function () {
                thirdScreen.style.display = "none";
                fourthScreen.style.display = "block";
                moveToDefault();
                setTimeout(function () {
                    transition.classList.remove("transition-anim");
                    cart.classList.remove("cart-anim-two");
                }, 500);
            }, 500);
        }, 500);
    }, 1000);
}

function moveCard() {
    vtbCard.classList.add("anim-to-transparency");
    coctail.classList.add("anim-to-visibility");

    setTimeout(() => {
        transition.classList.add("transition-anim");
        setTimeout(function () {
            fourthScreen.style.display = "none";
            fifthScreen.style.display = "block";
            setTimeout(function () {
                vtbCard.classList.remove("anim-to-transparency");
                coctail.classList.remove("anim-to-visibility");
                transition.classList.remove("transition-anim");
            }, 500);
        }, 500);
    }, 1000);
}

function fiveScreen() {
    aircraft.classList.add("aircraft-anim-two");
    setTimeout(() => {
        setTimeout(function () {
            transition.classList.add("transition-anim");
            setTimeout(function () {
                fifthScreen.style.display = "none";
                sixthScreen.style.display = "block";
                setTimeout(function () {
                    transition.classList.remove("transition-anim");
                    aircraft.classList.remove("aircraft-anim-two");
                }, 500);
            }, 500);
        }, 500);
    }, 1000);
}

function movePercent() {
    transition.classList.remove("transition-anim");

    percent.classList.add("percent-anim");
    setTimeout(() => {
        transition.classList.add("transition-anim");
        setTimeout(function () {
            sixthScreen.style.display = "none";
            seventhScreen.style.display = "block";
            loop();
            setTimeout(function () {
                percent.classList.remove("percent-anim");
                transition.classList.remove("transition-anim");
                percent.classList.remove("percent-anim");
            }, 500);
        }, 500);
    }, 1000);
}

function loop() {
    transition.style.backgroundColor = "#1657d0";
    setTimeout(() => {
        transition.style.backgroundColor = "#6F0A4E";
        transition.classList.add("transition-anim");
        setTimeout(() => {
            seventhScreen.style.display = "none";
            disclamerScreenOne.style.display = "block";
            setTimeout(() => {
                transition.classList.remove("transition-anim");
            }, 500);
            setTimeout(() => {
                transition.classList.add("transition-anim");
                setTimeout(() => {
                    disclamerScreenOne.style.display = "none";
                    disclamerScreenTwo.style.display = "block";
                    setTimeout(() => {
                        transition.classList.remove("transition-anim");
                    }, 500);
                    setTimeout(() => {
                        transition.style.backgroundColor = "#1657d0";
                        transition.classList.add("transition-anim");
                        setTimeout(() => {
                            disclamerScreenTwo.style.display = "none";
                            seventhScreen.style.display = "block";
                            setTimeout(() => {
                                transition.classList.remove("transition-anim");
                            }, 500);
                            loop();
                        }, 500);
                    }, 2000);
                }, 500);
            }, 2000);
        }, 500);
    }, 6000);
}