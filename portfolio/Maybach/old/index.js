screenad.position("width=100%&height=250&hor=left&ver=banner&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto&antizoom=false&smooth=1");
screenad.setZIndex(29);

const firstBg = document.querySelector(".banner__first-slide-bg");
const filter = document.querySelector(".banner__filter");
const transition = document.querySelector(".transition");
const firstSlide = document.querySelector(".banner__first-slide");
const secondSlide = document.querySelector(".banner__second-slide");
const thirdSlide = document.querySelector(".banner__third-slide");
const fourthSlide = document.querySelector(".banner__fourth-slide");
const lastSlide = document.querySelector(".banner__last-slide");
const firstTitles = firstSlide.querySelectorAll(".banner__title");
const secondTitles = secondSlide.querySelectorAll(".banner__title");
const thirdTitles = thirdSlide.querySelectorAll(".banner__title");
const fourthTitles = fourthSlide.querySelectorAll(".banner__title");
const secondBg = document.querySelector(".banner__second-slide-bg");
const lastTitles = lastSlide.querySelectorAll(".banner__title");
const button = lastSlide.querySelector(".banner__button");
const banner = document.querySelector(".banner__wrapper");
let timer;

banner.addEventListener("mouseenter", function () {
    timer = setTimeout(function () {
        screenad.shared.callMethod("showFullScreen");
    }, 3000);
});
banner.addEventListener("mouseleave", function () {
    clearTimeout(timer);
});

animate();

function animate() {
    setTimeout(function () {
        firstBg.classList.add("first-bg-anim");
        filter.classList.add("corner-anim");
        setTimeout(function () {
            firstTitles.forEach((title) => {
                title.classList.add("text-anim");
            });
            transition.classList.remove("transition-anim");
            setTimeout(function () {
                transition.classList.add("transition-anim");
                setTimeout(function () {
                    firstSlide.classList.add("deactive");
                    secondSlide.classList.remove("deactive");
                    firstTitles.forEach((title) => {
                        title.classList.remove("text-anim");
                    });
                    setTimeout(function () {
                        secondTitles.forEach((title) => {
                            title.classList.add("text-anim");
                        });
                        setTimeout(function () {
                            thirdTitles.forEach((title) => {
                                title.classList.add("text-anim");
                            });
                            setTimeout(function () {
                                secondTitles.forEach((title) => {
                                    title.classList.remove("text-anim");
                                });
                                thirdTitles.forEach((title) => {
                                    title.classList.remove("text-anim");
                                });
                                secondBg.classList.add("banner__second-slide-bg_modif");
                                fourthSlide.classList.remove("deactive");
                                fourthTitles.forEach((title) => {
                                    title.classList.add("text-anim");
                                });
                                transition.classList.remove("transition-anim");
                                setTimeout(function () {
                                    transition.classList.add("transition-anim");
                                    setTimeout(function () {
                                        secondSlide.classList.add("deactive");
                                        thirdSlide.classList.add("deactive");
                                        fourthSlide.classList.add("deactive");
                                        fourthTitles.forEach((title) => {
                                            title.classList.remove("text-anim");
                                        });
                                        lastSlide.classList.remove("deactive");
                                        setTimeout(function () {
                                            lastTitles.forEach((title) => {
                                                title.classList.add("text-anim-last");
                                            });
                                            button.classList.add("text-anim-last");
                                            transition.classList.remove("transition-anim");
                                            setTimeout(function () {
                                                transition.classList.add("transition-anim");

                                                setTimeout(function () {
                                                    lastTitles.forEach((title) => {
                                                        title.classList.remove("text-anim-last");
                                                    });
                                                    lastSlide.classList.add("deactive");
                                                    firstSlide.classList.remove("deactive");
                                                    secondBg.classList.remove("banner__second-slide-bg_modif");
                                                    setTimeout(function () {
                                                        animate();
                                                    }, 500);
                                                }, 3000);
                                            }, 3000);
                                        }, 1000);
                                    }, 3000);
                                }, 3000);
                            }, 2000);
                        }, 4000);
                    }, 3000);
                }, 3000);
            }, 2000);
        }, 4000);
    }, 500);
}
