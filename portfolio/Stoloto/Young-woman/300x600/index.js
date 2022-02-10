const banner = document.querySelector(".banner");
const money = document.querySelector(".money");
const moneypot = document.querySelector(".moneypot");
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
