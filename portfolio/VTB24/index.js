const banner = document.querySelector(".banner");
const handContainer = document.querySelector(".hand-container");
const firstScreen = document.querySelector(".first-screen");
const secondScreen = document.querySelector(".second-screen");
const thirdScreen = document.querySelector(".third-screen");
const fourthScreen = document.querySelector(".fourth-screen");
const hand = document.querySelector(".hand");
const card = document.querySelector(".card");
const transition = document.querySelector(".transition");
const chair = document.querySelector(".chair");
const cart = document.querySelector(".cart");
const vtbCard = document.querySelector(".vtb-card");
const coctail = document.querySelector(".coctail");

let clickCounter = 0;

banner.addEventListener("mousemove", moveOnMouse);
banner.addEventListener("mousemove", handMoveX);
banner.addEventListener("mousemove", handMoveY);
banner.addEventListener("mouseout", handDefault);
banner.addEventListener("mouseout", moveToDefault);

function handMoveX(event) {
    if (event.pageX - 170 + "px" < -38 + "px") {
        hand.style.left = -38 + "px !important";
    } else {
        hand.style.left = event.pageX - 170 + "px";
    }
}

function handMoveY(event) {
    hand.style.top = event.pageY - 100 + "px";
}

function handDefault() {
    hand.classList.add("hand-default");
}

function moveOnMouse() {
    hand.classList.remove("hand-default");
    card.classList.remove("card-anim-deactive");
    firstScreen.addEventListener("click", changeAnim);
    secondScreen.addEventListener("click", moveChair);
    thirdScreen.addEventListener("click", moveCart);
    fourthScreen.addEventListener("click", moveCard);
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
        }, 1000);
        setTimeout(function () {
            transition.classList.remove("transition-anim");
        }, 2000);
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
        }, 1000);
        setTimeout(function () {
            transition.classList.remove("transition-anim");
        }, 2000);
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
        transition.classList.add("transition-anim");
        setTimeout(function () {
            thirdScreen.style.display = "none";
            fourthScreen.style.display = "block";
            moveToDefault();
            setTimeout(function () {
                transition.classList.remove("transition-anim");
            }, 2000);
        }, 1000);
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
            moveToDefault();

            setTimeout(function () {
                vtbCard.classList.remove("anim-to-transparency");
                coctail.classList.remove("anim-to-visibility");
                transition.classList.remove("transition-anim");
            }, 2000);
        }, 1000);
    }
}
