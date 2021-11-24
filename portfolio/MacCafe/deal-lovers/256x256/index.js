const start = document.querySelector(".first-iteration");
const texts = document.querySelector(".banner__texts");
const firstTitles = document.querySelector(".title__first");
const secondTitles = document.querySelector(".title__second");
const cup = document.querySelector(".banner__cup");
const logo = document.querySelector(".banner__logo");
const phone = document.querySelector(".banner__phone");
const price = document.querySelector(".banner__price");
const button = document.querySelector(".banner__button");
const end = document.querySelector(".banner__end");

const firstStroke = document.querySelector(".title__stroke_one");
const secondStroke = document.querySelector(".title__stroke_two");
const thirdStroke = document.querySelector(".title__stroke_three");
const fourthStroke = document.querySelector(".title__stroke_four");

let clickout;
let clickEvent;

const now = new Date();
const hour = now.getHours();

animate();
changeTexts();

function changeTexts() {
    if (hour >= 0 && hour < 12) {
        firstStroke.textContent = "Начните день";
        secondStroke.textContent = "с выгодного";
        thirdStroke.textContent = "МакКафе";
        clickout = "default";
        screenad.event("IMPRESSION_1");
        clickEvent = "CLICK_1";
    } else if (hour >= 12 && hour < 15) {
        firstStroke.textContent = "МакКафе —";
        secondStroke.textContent = "выгодная";
        thirdStroke.textContent = "компания";
        fourthStroke.textContent = "для обеда";
        clickout = "extra1";
        screenad.event("IMPRESSION_2");
        clickEvent = "CLICK_2";
    } else if (hour >= 15 && hour < 18) {
        firstStroke.textContent = "Сделайте";
        secondStroke.textContent = "перерыв";
        thirdStroke.textContent = "с МакКафе";
        clickout = "extra2";
        screenad.event("IMPRESSION_3");
        clickEvent = "CLICK_3";
    } else if (hour >= 18 && hour < 24) {
        firstStroke.textContent = "Начните день";
        secondStroke.textContent = "с выгодного";
        thirdStroke.textContent = "МакКафе";
        clickout = "default";
        screenad.event("IMPRESSION_1");
        clickEvent = "CLICK_1";
    }
}

function animate() {
    end.classList.remove("end__anim");
    setTimeout(function () {
        texts.classList.add("title__anim");
        cup.classList.add("cup__anim");
        logo.classList.add("logo__anim");
        secondTitles.style.opacity = "0";
        phone.classList.add("phone__anim");

        setTimeout(function () {
            button.classList.add("button__anim");
            secondTitles.style.opacity = "1";
            firstTitles.style.opacity = "0";
            price.classList.add("price__anim");
            texts.classList.remove("title__anim");
            texts.classList.add("title__anim_second");

            setTimeout(function () {
                end.classList.add("end__anim");
                setTimeout(function () {
                    phone.classList.remove("phone__anim");
                    texts.classList.remove("title__anim");
                    cup.classList.remove("cup__anim");
                    logo.classList.remove("logo__anim");
                    button.classList.remove("button__anim");
                    price.classList.remove("price__anim");
                    texts.classList.remove("title__anim_second");
                    secondTitles.style.opacity = "0";
                    firstTitles.style.opacity = "1";
                    setTimeout(function () {
                        animate();
                    }, 1500);
                }, 500);
            }, 4000);
        }, 4000);
    }, 0);
}
