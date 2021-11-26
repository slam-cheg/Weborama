const titles = document.querySelectorAll(".banner__title");
const nurofen = document.querySelector(".banner__main-image");
const paint = document.querySelector(".banner__paint-one");
const girl = document.querySelector(".banner__girl");
const starText = document.querySelector(".banner__star-text");
const disclamer = document.querySelector(".banner__disclamer");
const transition = document.querySelector(".transition");

animate();
function animate() {
    transition.classList.add("transition-anim");
    setTimeout(function () {

        setTimeout(function () {
            titles.forEach((title) => {
                title.classList.remove("title-anim");
            });
            nurofen.classList.remove("title-anim");
            paint.classList.remove("paint-anim");
            girl.classList.remove("girl-anim");
            disclamer.classList.remove("disclamer-anim");
            starText.classList.remove("disclamer-anim");
            setTimeout(function () {
                titles.forEach((title) => {
                    title.classList.add("title-anim");
                });
                nurofen.classList.add("title-anim");
                paint.classList.add("paint-anim");
                girl.classList.add("girl-anim");
                disclamer.classList.add("disclamer-anim");
                starText.classList.add("disclamer-anim");
                transition.classList.remove("transition-anim");
                animate();
            }, 100);
        }, 900);
    }, 6000);
}
