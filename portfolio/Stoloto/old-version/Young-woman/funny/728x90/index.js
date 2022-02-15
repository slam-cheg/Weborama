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
    ["Пена и\u00A0носки уже не то?", 'Подарите ему билет "Русского лото"!'],
    ["Хотите машину, в\u00A0отпуск и\u00A0много всего?", 'Пора играть в\u00A0"Русское лото"!'],
    ["Праздничное утро начинается", 'с\u00A0билета "Русского\u00A0лото"!'],
];
rotation();
function rotation() {
    let randomArr = words[Math.floor(Math.random() * words.length)];
    titleWrapper.style.lineHeight = "1.1";
    if (randomArr === words[0]) {
        titleWrapper.style.fontSize = "13px";
        customEvent = "FUNNY_ONE";
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[1]) {
        titleWrapper.style.fontSize = "14px";
        customEvent = "FUNNY_TWO";
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[2]) {
        titleWrapper.style.fontSize = "14px";
        customEvent = "FUNNY_THREE";
        customClick = `${customEvent}_CLICK`;
    }
    titleLineOne.textContent = randomArr[0];
    titleLineTwo.textContent = randomArr[1];
}
