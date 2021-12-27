let customEvent = "default";

var params = parent.window.document.location.search;
var segment = params.slice(params.indexOf("?segment=") + 9);

var data;

// JSON Data Cities
function getCsv(latitude, longitude, regionPlace) {
    return fetch("./cities.json", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(checkResponse)
        .then((res) => {
            for (let i = 0; i < res.length; i++) {
                if (latitude - res[i].latitude < 0.05 && longitude - res[i].longitude < 0.05) {
                    regionPlace.textContent = `${res[i].name_ru}`;
                    customEvent = res[i].event;
                    banner.addEventListener("click", () => {
                        screenad.click();
                        screenad.event(`${customEvent}_CLICK`);
                    });
                    screenad.event(customEvent);
                    break;
                }
            }
        })
        .catch((err) => {
            console.warn(err);
        });
}

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
};

var banner;
document.addEventListener("DOMContentLoaded", function () {
    banner = document.querySelector(".banner");
    if (segment == "default") banner.classList.add("default");
    setTimeout(function () {
        animation();
    }, 200);

    // GEO
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = Math.round(position.coords.latitude);
        const longitude = Math.round(position.coords.longitude);
        const regionPlace = document.querySelector("#city");
        getCsv(latitude, longitude, regionPlace);
    });
});

function animation() {
    banner.classList.remove("anim6");
    banner.classList.add("anim1");
    /*banner.classList.add("anim2");
banner.classList.add("anim3");
banner.classList.add("anim4");
banner.classList.add("anim5");*/
    setTimeout(function () {
        banner.classList.add("anim2");
        setTimeout(function () {
            banner.classList.add("anim3");
            setTimeout(function () {
                banner.classList.add("anim4");
                setTimeout(function () {
                    banner.classList.add("anim5");
                    setTimeout(function () {
                        banner.classList.remove("anim1");
                        banner.classList.remove("anim2");
                        banner.classList.remove("anim3");
                        banner.classList.remove("anim4");
                        banner.classList.remove("anim5");
                        banner.classList.add("anim6");
                        animation();
                    }, 4000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 4000);
}
