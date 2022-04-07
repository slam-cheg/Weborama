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
    ["Играйте", "всей семьёй!"],
    ["Ищете для семьи всей затею?", 'Пора играть в\u00A0"Жилищную лотерею"!'],
    ["Красивых Дам вдохновляет,", "когда мужчины в\u00A0лотерею играют!"],
];

rotation();

function rotation() {
    let randomArr = words[Math.floor(Math.random() * words.length)];
    if (randomArr === words[0]) {
        titleWrapper.style.fontSize = "20px";
        titleWrapper.style.width = "180px";
        titleWrapper.style.lineHeight = "1";
        titleWrapper.style.top = "80px";
        customEvent = "FAMILY_ONE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[1]) {
        titleWrapper.style.fontSize = "17px";
        titleWrapper.style.width = "170px";
        titleWrapper.style.top = "60px";
        customEvent = "FAMILY_TWO";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[2]) {
        titleWrapper.style.fontSize = "17px";
        titleWrapper.style.width = "200px";
        titleWrapper.style.lineHeight = "1";
        titleWrapper.style.top = "70px";
        customEvent = "FAMILY_THREE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    titleLineOne.textContent = randomArr[0];
    titleLineTwo.textContent = randomArr[1];
    titleLineThree.textContent = randomArr[2];
}