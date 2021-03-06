const banner = document.querySelector(".banner");
const money = document.querySelector(".money");
const moneypot = document.querySelector(".moneypot");
const auto = document.querySelector(".auto");
const button = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
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
        setTimeout(function () {
            wrapper.classList.add("screen-two");
            setTimeout(function () {
                moneypot.classList.add("moneypot-scale");
                setTimeout(function () {
                    wrapper.classList.add("screen-three");
                    setTimeout(function () {
                        moneypot.classList.remove("moneypot-scale");
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
    ["А вам слабо сыграть", 'в\u00A0"Русское\u00A0лото"?'],
    ["Надоело казино?", 'Играйте в\u00A0"Русское\u00A0лото"!'],
    ["Это ваш день,", "будьте в выигрыше!"],
];
rotation();
function rotation() {
    let randomArr = words[Math.floor(Math.random() * words.length)];
    titleWrapper.style.lineHeight = "1.1";
    if (randomArr === words[0]) {
        titleWrapper.style.fontSize = "19px";
        titleWrapper.style.width = "280px";
        titleWrapper.style.left = "10px";
        customEvent = "GAMBLE_ONE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[1]) {
        titleWrapper.style.fontSize = "23px";
        titleWrapper.style.width = "280px";
        titleWrapper.style.left = "10px";
        titleWrapper.style.top = "90px";
        customEvent = "GAMBLE_TWO";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[2]) {
        titleWrapper.style.fontSize = "25px";
        titleWrapper.style.width = "280px";
        titleWrapper.style.left = "10px";
        titleWrapper.style.top = "90px";
        customEvent = "GAMBLE_THREE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    titleLineOne.textContent = randomArr[0];
    titleLineTwo.textContent = randomArr[1];
}
