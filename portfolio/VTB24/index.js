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

let clickCounter = 0;

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
    card.classList.add("card-anim-active");
    setTimeout(function () {
        card.classList.remove("card-anim-active");
    }, 1000);
    clickCounter++;
    if (clickCounter === 2) {
        clickCounter = 0;
        transition.classList.add("transition-anim");
        setTimeout(function () {
            firstScreen.style.display = "none";
            secondScreen.style.display = "block";
            moveToDefault();
        }, 500);
        setTimeout(function () {
            transition.classList.remove("transition-anim");
        }, 550);
    }
}

function moveToDefault() {
    card.classList.add("card-anim-deactive");
    card.removeEventListener("click", changeAnim);
}

function moveChair() {
    clickCounter++;

    chair.classList.add("chair-anim-one");
    setTimeout(function () {
        chair.classList.remove("chair-anim-one");
    }, 1100);

    if (clickCounter === 2) {
        chair.classList.add("chair-anim-two");
        setTimeout(function () {
            chair.classList.remove("chair-anim-two");
        }, 2100);
        clickCounter = 0;
        transition.classList.add("transition-anim");
        setTimeout(function () {
            secondScreen.style.display = "none";
            thirdScreen.style.display = "block";
            moveToDefault();
        }, 500);
        setTimeout(function () {
            transition.classList.remove("transition-anim");
        }, 500);
    }
}

function moveCart() {
    clickCounter++;

    cart.classList.add("cart-anim-one");
    setTimeout(function () {
        cart.classList.remove("cart-anim-one");
    }, 1000);

    if (clickCounter === 2) {
        cart.classList.add("cart-anim-two");
        setTimeout(function () {
            cart.classList.remove("cart-anim-two");
        }, 1500);
        clickCounter = 0;
        setTimeout(function () {
            transition.classList.add("transition-anim");
            setTimeout(function () {
                thirdScreen.style.display = "none";
                fourthScreen.style.display = "block";
                moveToDefault();
                setTimeout(function () {
                    transition.classList.remove("transition-anim");
                }, 500);
            }, 500);
        }, 500);
    }
}

function moveCard() {
    clickCounter++;

    vtbCard.classList.add("anim-to-transparency");
    coctail.classList.add("anim-to-visibility");

    if (clickCounter === 2) {
        clickCounter = 0;
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
    }
}

function fiveScreen() {
    clickCounter++;

    aircraft.classList.add("aircraft-anim");

    setTimeout(function () {
        aircraft.classList.remove("aircraft-anim");
    }, 3000);

    if (clickCounter === 2) {
        aircraft.classList.add("aircraft-anim-two");
        setTimeout(function () {
            aircraft.classList.remove("aircraft-anim-two");
        }, 1000);
        clickCounter = 0;
        setTimeout(function () {
            transition.classList.add("transition-anim");
            setTimeout(function () {
                fifthScreen.style.display = "none";
                sixthScreen.style.display = "block";
                setTimeout(function () {
                    transition.classList.remove("transition-anim");
                }, 500);
            }, 500);
        }, 500);
    }
}

function movePercent() {
    clickCounter++;

    percent.classList.add("percent-anim");
    setTimeout(function () {
        percent.classList.remove("percent-anim");
    }, 2000);

    if (clickCounter === 2) {
        clickCounter = 0;
        transition.classList.add("transition-anim");
        setTimeout(function () {
            sixthScreen.style.display = "none";
            seventhScreen.style.display = "block";
            loop();
            setTimeout(function () {
                percent.classList.remove("percent-anim");
                transition.classList.remove("transition-anim");
            }, 500);
        }, 500);
    }
}

function loop() {
    transition.style.backgroundColor = "#1657d0";
    hand.style.display = "none";
    header.style.cursor = "auto";
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
