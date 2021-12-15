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

const cities = [
    {
        name: "Люберцы",
        x: 55.6772,
        y: 37.8932,
    },
    {
        name: "Москва",
        x: 55.7522,
        y: 37.6156,
    },
];

const options = {
    enableHighAccuracy: false,
    timeout: 0,
    maximumAge: 0,
};

let timer = setInterval(changeSlides, 4000);
let city = "";

navigator.geolocation.getCurrentPosition(success, error, options);

function success(pos) {
    const crd = pos.coords;
    const shirotaUser = Math.round(crd.latitude);
    const dolgotaUser = Math.round(crd.longitude);

    perebor(shirotaUser, dolgotaUser);

    if (city === "") {
        return console.log("Нет совпадений!!!");
    } else {
        return (regionPlace.textContent = city);
    }
}

function perebor(shirotaUser, dolgotaUser) {
    for (let i = 0; i < cities.length; i++) {
        let shirotaCity = Math.round(cities[i].x);
        let dolgotaCity = Math.round(cities[i].y);

        if (shirotaUser === shirotaCity && dolgotaUser === dolgotaCity) {
            city = cities[i].name;
            console.log(`Ваши координаты: ${shirotaUser}:${dolgotaUser}. Координаты города ${cities[i].name} : ${shirotaCity}:${dolgotaCity} `);
            break;
        }
    }
}

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

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
        });
        animIll();
    }, 1500);
    setTimeout(() => {
        spray.forEach((gif) => {
            gif.src = "";
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
