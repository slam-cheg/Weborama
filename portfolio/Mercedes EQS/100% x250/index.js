screenad.position("width=100%&height=250&hor=left&ver=banner&hide=false&sticky=false&offx=0&offy=0&cliprect=auto,auto,auto,auto&antizoom=false&smooth=1");
screenad.setZIndex(100);

const banner = document.querySelector(".banner");
const btnFullscreen = document.querySelector(".button_fullscreen");
const loadBar = document.querySelector(".load-bar");

var bannerWidth = 9;
var bannerHeight = 250;
var s, l, w, t;
var slot;
var z = 30;

var host = document.referrer;

function getSize() {
    screenad.executeScript(
        '(function () { return [document.querySelector("' +
            slot +
            '").getBoundingClientRect().left, document.querySelector("' +
            slot +
            '").getBoundingClientRect().width, document.querySelector("' +
            slot +
            '").getBoundingClientRect().top]; })()',
        function (sizes) {
            s = sizes.split(",");
            l = s[0];
            w = s[1];
            t = s[2];
            console.log(l, w, t);
            setPosition();
        }
    );
}

function setPosition() {
    screenad.setSize(w, bannerHeight); //resize layer to adslot size
    screenad.resize(w, bannerHeight); //resize layer to adslot size
    if (host.indexOf("style.rbc.ru") != -1) {
        screenad.setAlignment("left", "banner");
        screenad.setOffset(l, 0);
    } else {
        screenad.setAlignment("left", "banner");
        screenad.setOffset(l, 0);
    }
    screenad.position();
    screenad.setZIndex(z);
    screenad.show();
}

setTimeout(function () {
    if (host.indexOf("autonews.ru") != -1) {
        slot = ".g-desktop-visible.g-tablet-visible .banner";
        screenad.setSticky(false);
        z = 20;
    } else if (host.indexOf("style.rbc.ru") != -1) {
        slot = ".g-banner-wide .banner DIV DIV";
        screenad.setSticky(false);
    } else if (host.indexOf("realty.rbc.ru") != -1) {
        slot = ".banner__filmstrip.g-desktop-visible.g-tablet-visible";
    } else if (host.indexOf("quote.rbc.ru") != -1) {
        slot = ".banner__filmstrip.g-no-separate-tab-mob.g-desktop-visible.g-tablet-visible";
        z = 20;
    } else if (host.indexOf("cash.rbc.ru") != -1) {
        slot = ".banner__top.js-banner-top .banner";
    } else if (host.indexOf("sportrbc.ru") != -1) {
        slot = ".banner.banner__filmstrip.g-desktop-visible.g-tablet-visible";
    } else {
        if (screenad.browserwidth > 960) {
            slot = ".js-funny-banner";
        } else {
            slot = ".banner__filmstrip";
        }
    }
    getSize();
}, 1000);

screenad.onResize = function () {
    getSize();
};

screenad.hide();

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
