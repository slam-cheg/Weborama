const firstBg = document.querySelector(".banner__first-slide-bg");
const filter = document.querySelector(".banner__filter");
const transition = document.querySelector(".transition");
const firstSlide = document.querySelector(".banner__first-slide");
const secondSlide = document.querySelector(".banner__second-slide");
const firstTitles = firstSlide.querySelectorAll(".banner__title");
const secondTitles = secondSlide.querySelectorAll(".banner__title");

animate();

function animate() {
    setTimeout(function () {
        firstBg.classList.add("first-bg-anim");
        filter.classList.add("corner-anim");
        setTimeout(function () {
            firstTitles.forEach((title) => {
                title.classList.add("text-anim");
            });
            setTimeout(function () {
                transition.classList.add("transition-anim");
                setTimeout(function () {
                    firstTitles.forEach((title) => {
                        title.classList.remove("text-anim");
                    });
                    firstSlide.style.display = "none";
                    secondSlide.style.display = "block";
                    setTimeout(function () {
                        animate();
                    }, 2000);
                }, 3000);
            }, 3000);
        }, 5000);
    }, 500);
}
