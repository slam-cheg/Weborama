const banner = document.querySelector(".banner");

banner.addEventListener("mouseenter", showFullscreen);
banner.addEventListener("mouseleave", setDefault);

function showFullscreen() {
    setTimeout(() => {
        document.location.href = "./fs.html";
    }, 3000);
}