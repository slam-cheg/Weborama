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

const words = [
    ['Билет\u00A0"Русское лото" дешевле,', " чем поход в\u00A0кино!"],
    ["Наши традиции -", 'играть в\u00A0"Русское\u00A0лото"!'],
    ["Ваш праздник -", "ваш шанс!"],
];
rotation();
function rotation() {
    let randomArr = words[Math.floor(Math.random() * words.length)];
    titleWrapper.style.lineHeight = "1.1";
    if (randomArr === words[0]) {
        customEvent = "FAMILY_ONE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[1]) {
        titleWrapper.style.top = "90px";
        titleWrapper.style.fontSize = "14px";
        customEvent = "FAMILY_TWO";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[2]) {
        titleWrapper.style.fontSize = "16px";
        titleWrapper.style.top = "95px";
        customEvent = "FAMILY_THREE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    titleLineOne.textContent = randomArr[0];
    titleLineTwo.textContent = randomArr[1];
}
