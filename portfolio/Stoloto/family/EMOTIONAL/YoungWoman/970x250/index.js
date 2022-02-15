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
        star.classList.add("star-rotate");
        setTimeout(function () {
            wrapper.classList.add("screen-two");
            lights.classList.remove("auto-lights-anim");
            setTimeout(function () {
                setTimeout(function () {
                    wrapper.classList.add("screen-three");
                    star.classList.remove("star-rotate");
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

const words = [
    ["Не собирались с\u00A0семьёй давно?", 'На помощь идёт "Русское лото"!'],
    ["Ничто так не сближает, как семейное участие", 'в\u00A0игре "Русское лото"!'],
    ["А ты уже выбрала", "подарок для него?"],
];
rotation();
function rotation() {
    let randomArr = words[Math.floor(Math.random() * words.length)];
    titleWrapper.style.lineHeight = "1.1";
    if (randomArr === words[0]) {
        titleWrapper.style.fontSize = "23px";
        titleWrapper.style.left = "155px";
        titleWrapper.style.width = "310px";
        customEvent = "FAMILY_ONE";
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[1]) {
        titleWrapper.style.fontSize = "22px";
        titleWrapper.style.left = "145px";
        titleWrapper.style.width = "357px";
        titleWrapper.style.top = "54px";
        customEvent = "FAMILY_TWO";
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[2]) {
        titleWrapper.style.fontSize = "25px";
        titleWrapper.style.top = "65px";
        customEvent = "FAMILY_THREE";
        customClick = `${customEvent}_CLICK`;
    }
    titleLineOne.textContent = randomArr[0];
    titleLineTwo.textContent = randomArr[1];
}
