const banner = document.querySelector(".banner");
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
                setTimeout(function () {
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

const words = [
    ["Не води её в кино\u00A0-", "Пригласи играть в\u00A0лото!"],
    ['Билет "Русское лото"\u00A0- лучший подарок', "для той, у\u00A0которой есть всё!"],
    ["Девушку баловать не\u00A0забывай,", "билет в\u00A0лотерею ей\u00A0покупай!"],
];

rotation();
function rotation() {
    let randomArr = words[Math.floor(Math.random() * words.length)];
    titleWrapper.style.lineHeight = "1.1";
    if (randomArr === words[0]) {
        titleWrapper.style.fontSize = "18px";
        titleWrapper.style.width = "290px";
        titleWrapper.style.top = "30px";
        titleWrapper.style.left = "110px";
        customEvent = "FUNNY_ONE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[1]) {
        titleWrapper.style.fontSize = "14px";
        titleWrapper.style.width = "260px";
        titleWrapper.style.top = "20px";
        customEvent = "FUNNY_TWO";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[2]) {
        titleWrapper.style.fontSize = "16px";
        titleWrapper.style.width = "240px";
        titleWrapper.style.top = "10px";
        customEvent = "FUNNY_THREE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    titleLineOne.textContent = randomArr[0];
    titleLineTwo.textContent = randomArr[1];
    titleLineThree.textContent = randomArr[2];
}