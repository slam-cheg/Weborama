const banner = document.querySelector(".banner");
const topAuto = document.querySelector(".top");
const button = document.querySelector(".button");
const wrapper = document.querySelector(".wrapper");

button.addEventListener("click", function () {
    screenad.click();
});
banner.addEventListener("click", function () {
    screenad.click();
});

animation();

function animation() {
    topAuto.classList.add("auto-fly");
    setTimeout(function () {
        wrapper.classList.add("screen-two");
        topAuto.classList.remove("auto-fly");
        setTimeout(function () {
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
