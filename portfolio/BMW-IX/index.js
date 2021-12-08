screenad.position("width=1290&height=250&hor=center&ver=banner&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto&antizoom=false&smooth=1");
screenad.setZIndex(100);

const banner = document.querySelector(".banner");
const loadBar = document.querySelector(".load-bar");

banner.addEventListener("click", () => {
    screenad.event("BANNER_click");
    screenad.click();
});

banner.addEventListener("mouseenter", () => {
    loadBar.classList.add("load-bar-anim");
    timer = setTimeout(function () {
        screenad.shared.callMethod("showFullScreen");
    }, 2000);
});

banner.addEventListener("mouseleave", () => {
    loadBar.classList.remove("load-bar-anim");
    clearTimeout(timer);
});
