const banner = document.querySelector(".banner");
const money = document.querySelector(".money");
const auto = document.querySelector(".auto");
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
    money.classList.add("money-fly");
    auto.classList.add("auto-fly");
    setTimeout(function () {
        wrapper.classList.add("screen-two");
        money.classList.remove("money-fly");
        auto.classList.remove("auto-fly");
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
