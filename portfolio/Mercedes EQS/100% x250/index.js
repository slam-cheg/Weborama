let bannerWidth = document.querySelector("#adrPos728x90").offsetWidth;
// PROBLEM
screenad.position(`width=${bannerWidth}&height=250&hor=left&ver=banner&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto&antizoom=false&smooth=1`);
screenad.setZIndex(100);

console.log(screenad);

const banner = document.querySelector(".banner");
const btnFullscreen = document.querySelector(".button_fullscreen");
const loadBar = document.querySelector(".load-bar");

// let bannerWidth = 9;
// let bannerHeight = 250;

// screenad.onSync = () => {
//     setBillPosition(bannerWidth, bannerHeight);
// };

btnFullscreen.addEventListener("click", showVideo);
banner.addEventListener("click", () => {
    screenad.event("BANNER_click");
});

banner.addEventListener("mouseenter", () => {
    loadBar.classList.add("load-bar-anim");
    timer = setTimeout(function () {
        showVideo();
    }, 2000);
});

banner.addEventListener("mouseleave", () => {
    loadBar.classList.remove("load-bar-anim");
    clearTimeout(timer);
});

function showVideo() {
    screenad.shared.callMethod("showFullScreen");
}
