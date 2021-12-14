const firstSlide = document.querySelector(".first-slide");
const secondSlide = document.querySelector(".second-slide");
const thirdSlide = document.querySelector(".third-slide");
const transition = document.querySelector(".transition");

const regionPlace = firstSlide.querySelector(".region");
const leftPain = secondSlide.querySelector(".img_left");
const rightPain = secondSlide.querySelector(".right_left");

const freeze = thirdSlide.querySelector(".freeze");
const hours = thirdSlide.querySelector(".hours");

let timer = setInterval(changeSlides, 6000);

function changeSlides() {
    let currentSlide = document.querySelector(".active");
    let nextSlide = currentSlide.nextElementSibling;
    if (nextSlide.classList.contains("third-slide")) {
        thirdAnims();
    }
    if (nextSlide.classList.contains("transition")) {
        nextSlide = firstSlide;
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
