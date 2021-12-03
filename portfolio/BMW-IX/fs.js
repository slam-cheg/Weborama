const page = document.querySelector(".page");
const content = document.querySelector(".content");
const cursor = document.querySelector(".cursor");

page.addEventListener("mousedown", minimizeCursor);
page.addEventListener("mouseup", maximizeCursor);

function minimizeCursor() {
    cursor.classList.add("cursor_active");
}
function maximizeCursor() {
    cursor.classList.remove("cursor_active");
}
