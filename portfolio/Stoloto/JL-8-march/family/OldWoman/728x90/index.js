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

const words = [
    ["Играйте", "всей семьёй!"],
    ["Передавайте традиции новому поколению\u00A0-", "играйте в Жилищную лотерею."],
    ["День может стать немножко добрее", 'с билетом "Жилищная лотерея"'],
];
rotation();
function rotation() {
    let randomArr = words[Math.floor(Math.random() * words.length)];
    titleWrapper.style.lineHeight = "1.1";
    if (randomArr === words[0]) {
        titleWrapper.style.fontSize = "20px";
        titleWrapper.style.width = "300px";
        titleWrapper.style.left = "70px";
        titleWrapper.style.top = "25px";
        titleWrapper.style.lineHeight = "1";
        customEvent = "FAMILY_ONE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[1]) {
        titleWrapper.style.fontSize = "16px";
        titleWrapper.style.width = "270px";
        titleWrapper.style.top = "10px";
        titleWrapper.style.left = "90px";
        customEvent = "FAMILY_TWO";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[2]) {
        titleWrapper.style.fontSize = "14.5px";
        titleWrapper.style.width = "300px";
        titleWrapper.style.top = "30px";
        customEvent = "FAMILY_THREE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    titleLineOne.textContent = randomArr[0];
    titleLineTwo.textContent = randomArr[1];
}