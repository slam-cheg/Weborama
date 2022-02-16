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
const titleLineThree = document.querySelector(".title-line-three");
const textWrapper = document.querySelector(".text-wrapper");
const text = textWrapper.querySelector(".text-one");
const textTwo = textWrapper.querySelector(".text-two");

const words = [
    ['Билет "Русское лото" дешевле,', " чем поход в\u00A0кино!"],
    ["Наши традиции -", 'играть в\u00A0"Русское\u00A0лото"!'],
    ["Ваш праздник -", "ваш шанс!"],
];
rotation();
function rotation() {
    let randomArr = words[Math.floor(Math.random() * words.length)];
    titleWrapper.style.lineHeight = "1.1";
    if (randomArr === words[0]) {
        titleWrapper.style.fontSize = "25px";
        titleWrapper.style.left = "150px";
        titleWrapper.style.width = "310px";
        titleWrapper.style.top = "50px";
        customEvent = "FAMILY_ONE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[1]) {
        titleWrapper.style.fontSize = "27px";
        titleWrapper.style.left = "110px";
        customEvent = "FAMILY_TWO";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    if (randomArr === words[2]) {
        titleWrapper.style.fontSize = "30px";
        titleWrapper.style.top = "62px";
        titleWrapper.style.left = "110px";
        customEvent = "FAMILY_THREE";
        screenad.event(`${customEvent}`);
        customClick = `${customEvent}_CLICK`;
    }
    titleLineOne.textContent = randomArr[0];
    titleLineTwo.textContent = randomArr[1];
    titleLineThree.textContent = randomArr[2];
    textTwo.textContent = randomArr[3];
}
