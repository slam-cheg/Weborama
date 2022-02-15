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
const textWrapper = document.querySelector(".text-wrapper");
const text = textWrapper.querySelector(".text-one");
const textTwo = textWrapper.querySelector(".text-two");

const words = [
    ["Не собирались", "с семьёй давно?", "На помощь идёт", '"Русское лото"!'],
    ["Ничто так не сближает,", "как семейное участие в", '"Русское лото"!'],
    ["А ты уже выбрала", "подарок для него?"],
];
rotation();
function rotation() {
    let randomArr = words[Math.floor(Math.random() * words.length)];
    titleWrapper.style.lineHeight = "1.1";
    if (randomArr === words[0]) {
        titleWrapper.style.fontSize = "19px";
        titleWrapper.style.width = "220px";
        titleWrapper.style.left = "10px";
        textWrapper.style.width = "220px";
        textWrapper.style.top = "260px";
        textWrapper.style.left = "10px";
        text.style.fontSize = "20px";
        textTwo.style.fontSize = "22px";
        customEvent = "FAMILY_ONE";
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[1]) {
        titleWrapper.style.fontSize = "14px";
        titleWrapper.style.width = "220px";
        titleWrapper.style.left = "10px";
        text.style.fontSize = "22px";
        customEvent = "FAMILY_TWO";
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[2]) {
        titleWrapper.style.fontSize = "17px";
        titleWrapper.style.width = "220px";
        titleWrapper.style.left = "10px";
        customEvent = "FAMILY_THREE";
        customClick = `${customEvent}_CLICK`;
    }
    titleLineOne.textContent = randomArr[0];
    titleLineTwo.textContent = randomArr[1];
    text.textContent = randomArr[2];
    textTwo.textContent = randomArr[3];
}
