screenad.position("width=750&height=250&hor=center&ver=banner&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto&antizoom=false&smooth=1");
screenad.setZIndex(100);

const banner = document.querySelector(".banner");
const btnFullscreen = document.querySelector(".button_fullscreen");
const loadBar = document.querySelector(".load-bar");

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
