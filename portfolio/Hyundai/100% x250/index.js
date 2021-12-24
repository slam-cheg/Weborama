screenad.position("width=100%&height=250&hor=left&ver=banner&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto&antizoom=false&smooth=1");
screenad.setZIndex(100);


const banner = document.querySelector(".banner");
// const btnFullscreen = document.querySelector(".button_fullscreen");
const loadBar = document.querySelector(".load-bar");

// btnFullscreen.addEventListener("click", showVideo);
banner.addEventListener("click", () => {
    screenad.event("BANNER_click");
});

function showVideo() {
    screenad.shared.callMethod("showFullScreen");
}
