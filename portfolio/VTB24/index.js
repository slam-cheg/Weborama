const banner = document.querySelector(".banner");
const firstScreen = document.querySelector(".first-screen");
const secondScreen = document.querySelector(".second-screen");
const thirdScreen = document.querySelector(".third-screen");
const fourthScreen = document.querySelector(".fourth-screen");
const hand = document.querySelector(".hand");
const card = document.querySelector(".card");
const transition = document.querySelector(".transition");
const chair = document.querySelector(".chair");
const cart = document.querySelector(".cart");

let clickCounter = 0;

banner.addEventListener("mousemove", moveOnMouse);
banner.addEventListener("mouseout", moveToDefault);

function moveOnMouse(event) {
    hand.style.top = event.pageY - 100 + "px";
    hand.style.left = event.pageX - 170 + "px";
    card.classList.remove("card-anim-deactive");
    card.addEventListener("click", changeAnim);
    secondScreen.addEventListener("click", zoomChair);
    thirdScreen.addEventListener("click", moveCart);
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
    hand.style.top = "100px";
    hand.style.left = "-70px";
    card.classList.add("card-anim-deactive");
    card.removeEventListener("click", changeAnim);
}

function zoomChair() {
    chair.style.transform = `scale(1.${clickCounter * 2})`;
    clickCounter++;

    if (clickCounter === 2) {
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
    clickCounter++

    cart.classList.add("vtb-card-anim");
    setTimeout(function () {
        cart.classList.remove("vtb-card-anim");
    }, 1000);
}
