const banner = document.querySelector(".banner");
const star = document.querySelector(".star");
const button = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
const lights = document.querySelector(".auto-lights");
let customEvent = "DEFAULT";
let customClick = `DEFAULT_CLICK`;

button.addEventListener("click", function () {
    screenad.click();
    screenad.event(`${customClick}`);
});
banner.addEventListener("click", function () {
    screenad.click();
    screenad.event(`${customClick}`);
});

animation();

function animation() {
    setTimeout(function () {
        wrapper.classList.add("screen-one");
        lights.classList.add("auto-lights-anim");
        setTimeout(function () {
            wrapper.classList.add("screen-two");
            star.classList.add("star-rotate");
            lights.classList.remove("auto-lights-anim");
            setTimeout(function () {
                setTimeout(function () {
                    star.classList.remove("star-rotate");
                    wrapper.classList.add("screen-three");
                    setTimeout(function () {
                        wrapper.classList.remove("screen-three");
                        wrapper.classList.remove("screen-two");
                        wrapper.classList.remove("screen-one");
                        setTimeout(function () {
                            animation();
                        }, 500);
                    }, 4000);
                }, 3000);
            }, 1000);
        }, 4000);
    }, 500);
}

const titleWrapper = document.querySelector(".title-wrapper");
const titleLineOne = document.querySelector(".title-line-one");
const titleLineTwo = document.querySelector(".title-line-two");
const titleLineThree = document.querySelector(".title-line-three");
const textWrapper = document.querySelector(".text-wrapper");
const text = textWrapper.querySelector(".text-one");
const auto = document.querySelector(".auto");
const autoLights = document.querySelector(".auto-lights");

const words = [
    ["Не собирались с\u00A0семьёй давно?", "На помощь идёт", '"Русское лото"!'],
    ["Ничто так не сближает,", "как семейное участие в\u00A0игре", '"Русское лото"!'],
    ["А ты уже выбрала", "подарок для него?"],
];
rotation();
function rotation() {
    let randomArr = words[Math.floor(Math.random() * words.length)];
    titleWrapper.style.lineHeight = "1.1";
    if (randomArr === words[0]) {
        titleWrapper.style.fontSize = "24px";
        titleWrapper.style.width = "280px";
        titleWrapper.style.left = "10px";
        titleWrapper.style.top = "80px";
        text.style.fontSize = "28px";
        auto.style.top = "105px";
        autoLights.style.top = "288px";
        banner.style.backgroundPosition = "100% 55%";
        customEvent = "FAMILY_ONE";
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[1]) {
        titleWrapper.style.fontSize = "14.5px";
        titleWrapper.style.width = "280px";
        titleWrapper.style.top = "100px";
        titleWrapper.style.left = "10px";
        text.style.fontSize = "28px";
        auto.style.top = "105px";
        autoLights.style.top = "288px";
        banner.style.backgroundPosition = "100% 55%";
        titleLineThree.style.fontSize = "25px";
        customEvent = "FAMILY_TWO";
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[2]) {
        titleWrapper.style.fontSize = "19px";
        titleWrapper.style.width = "280px";
        titleWrapper.style.left = "10px";
        customEvent = "FAMILY_THREE";
        customClick = `${customEvent}_CLICK`;
    }
    titleLineOne.textContent = randomArr[0];
    titleLineTwo.textContent = randomArr[1];
    titleLineThree.textContent = randomArr[2];
}
