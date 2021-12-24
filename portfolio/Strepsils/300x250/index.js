const banner = document.querySelector(".banner");
const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");
const thirdSlide = document.querySelector(".third-slide");
const transition = document.querySelector(".transition");
const spray = document.querySelectorAll(".spray");
const illLeft = secondSlide.querySelector(".img_left");
const illRight = secondSlide.querySelector(".img_right");
const firstTitle = firstSlide.querySelector(".alert__descr");
const flare = firstSlide.querySelector(".flare");

const regionPlace = firstSlide.querySelector(".region");
const leftPain = secondSlide.querySelector(".img_left");
const rightPain = secondSlide.querySelector(".right_left");

const freeze = thirdSlide.querySelector(".freeze");
const hours = thirdSlide.querySelector(".hours");

// GEO
navigator.geolocation.getCurrentPosition((position) => {
    const latitude = Math.round(position.coords.latitude);
    const longitude = Math.round(position.coords.longitude);
    getCsv(latitude, longitude);
});

// JSON Data Cities
function getCsv(latitude, longitude) {
    return fetch("./cities.json", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(checkResponse)
        .then((res) => {
            for (let i = 0; i < res.length; i++) {
                if (latitude - res[i].latitude < 0.05 && longitude - res[i].longitude < 0.05) {
                    regionPlace.textContent = `${res[i].name_ru} и\u00A0${res[i].region_ru}`;
                    customEvent = res[i].event;
                    banner.addEventListener("click", () => {
                        screenad.click();
                        screenad.event(`${customEvent}_CLICK`);
                    });
                    screenad.event(customEvent);
                    break;
                }
            }
        })
        .catch((err) => {
            console.warn(err);
        });
}

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

let timer = setInterval(changeSlides, 4000);

function changeSlides() {
    let currentSlide = document.querySelector(".active");
    let nextSlide = currentSlide.nextElementSibling;

    if (nextSlide.classList.contains("second-slide")) {
        toggleSpray();
        firstTitle.classList.remove("scale-anim");
        flare.classList.remove("flare-anim");
    }
    if (nextSlide.classList.contains("third-slide")) {
        thirdAnims();
    }

    if (nextSlide.classList.contains("transition")) {
        nextSlide = firstSlide;
        setTimeout(() => {
            flare.classList.add("flare-anim");
            firstTitle.classList.add("scale-anim");
        }, 500);

        transition.classList.add("anim");
        setTimeout(() => {
            currentSlide.classList.remove("active");
            nextSlide.classList.add("active");
            setTimeout(() => {
                transition.classList.remove("anim");
            }, 1000);
        }, 500);
    } else {
        transition.classList.add("anim");
        setTimeout(() => {
            currentSlide.classList.remove("active");
            nextSlide.classList.add("active");
            setTimeout(() => {
                transition.classList.remove("anim");
            }, 1000);
        }, 500);
    }
}

function thirdAnims() {
    freeze.classList.add("scale-anim");
    setTimeout(() => {
        hours.classList.add("scale-anim");
    }, 2000);
    setTimeout(() => {
        freeze.classList.remove("scale-anim");
        hours.classList.remove("scale-anim");
    }, 4000);
}

function toggleSpray() {
    setTimeout(() => {
        spray.forEach((gif) => {
            gif.src = "./spray.gif";
            gif.style.visibility = "visible";
        });
        animIll();
    }, 1500);
    setTimeout(() => {
        spray.forEach((gif) => {
            gif.src = "";
            gif.style.visibility = "hidden";
        });
    }, 4000);
}

function animIll() {
    setTimeout(() => {
        illLeft.classList.add("ill-anim-left");
        illRight.classList.add("ill-anim-right");
    }, 100);
    setTimeout(() => {
        illLeft.classList.remove("ill-anim-left");
        illRight.classList.remove("ill-anim-right");
    }, 4000);
}
