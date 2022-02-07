const banner = document.querySelector(".banner");
const star = document.querySelector(".star");
const button = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");
const lights = document.querySelector(".auto-lights");

button.addEventListener("click", function () {
    screenad.click();
});
banner.addEventListener("click", function () {
    screenad.click();
});

animation();

function animation() {
    lights.classList.add("auto-lights-anim");
    star.classList.add("star-rotate");
    setTimeout(function () {
        wrapper.classList.add("screen-two");
        lights.classList.remove("auto-lights-anim");
        setTimeout(function () {
            star.classList.remove("star-rotate");
            wrapper.classList.add("screen-three");
            setTimeout(function () {
                wrapper.classList.remove("screen-two");
                wrapper.classList.remove("screen-three");
                setTimeout(function () {
                    animation();
                }, 500);
            }, 4000);
        }, 4000);
    }, 4000);
}
