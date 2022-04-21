var div = document.querySelector(".div");

var windowRes = window.screen.availHeight * window.screen.availWidth;
var divRes = div.offsetWidth * div.offsetHeight

function resRatio() {
    var ratio = Math.round((divRes * 100) / windowRes) + "%";
    return ratio, console.log(ratio)
}
resRatio()

console.log(window.screen)