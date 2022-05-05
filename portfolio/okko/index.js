const switcher = document.querySelector(".banner__switcher");
const switcherItem = document.querySelector(".banner__switcher-item");

switcher.addEventListener("click", switchOnOff);

function switchOnOff() {
    if (!switcher.hasAttribute("on")) {
        switcher.setAttribute("on", true);
        switcher.classList.add("banner__switcher_on");
        switcherItem.classList.add("banner__switcher-item_on");
    } else {
        switcher.removeAttribute("on", true)
        switcher.classList.remove("banner__switcher_on");
        switcherItem.classList.remove("banner__switcher-item_on");
    }
}
