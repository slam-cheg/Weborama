const player = document.querySelector(".player");
const closeBtn = document.querySelector(".close");
const fullscreen = document.querySelector("#fullscreen");

screenad.hide();
screenad.setZIndex(1200000);
screenad.position("width=100%&height=100%&hor=left&ver=top&hide=false&sticky=true&offx=0&offy=0&cliprect=auto,auto,auto,auto&antizoom=false&smooth=1");

player.volume = 0;
player.muted = true;

closeBtn.addEventListener("click", () => {
    player.pause();
    screenad.event("FS_userclose");
    player.currentTime = 0;
    closeFS();
});
player.addEventListener("ended", () => {
    screenad.event("VIDEO_ended");
    closeFS();
});

screenad.shared.showFullScreen = () => {
    screenad.setBlockPageTouches(true);
    screenad.executeScript("document.body.style.overflow='hidden'");
    screenad.show();
    screenad.event("FS_open");

    setTimeout(function () {
        fullscreen.classList.add("anim");
        setTimeout(function () {
            player.play();
        }, 1000);
    }, 100);
};

function closeFS() {
    screenad.setBlockPageTouches(false);
    screenad.executeScript("document.body.style.overflow=''");
    screenad.hide();
}
