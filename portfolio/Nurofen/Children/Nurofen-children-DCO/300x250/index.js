const params = parent.window.document.location.search;
const cityFont = document.querySelector(".city_wrajpper");
const segment = params.slice(params.indexOf("?segment=") + 9);
const banner = document.querySelector(".banner");
const regionPlace = document.querySelector("#city");

let customEvent = "DEFAULT";
let customClick = `DEFAULT_CLICK`;

banner.addEventListener("click", () => {
    screenad.click();
    screenad.event(`${customClick}`);
    console.log(`${customClick}`);
});

// GEO
navigator.geolocation.getCurrentPosition((position) => {
    const latitude = Math.round(position.coords.latitude);
    const longitude = Math.round(position.coords.longitude);
    getCsv(latitude, longitude);
});

// JSON Data Cities
function getCsv(latitude, longitude) {
    return fetch("./cities.json", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(checkResponse)
        .then((res) => {
            for (let i = 0; i < res.length; i++) {
                if (Math.abs(latitude - res[i].latitude) < 0.5 && Math.abs(longitude - res[i].longitude) < 0.5) {
                    regionPlace.textContent = `${res[i].name_ru}`;
                    customEvent = res[i].event;
                    customClick = `${customEvent}_CLICK`;
                    screenad.event(customEvent);
                    if (customEvent !== "DEFAULT") {
                        cityFont.classList.remove("default__city");
                    }
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

setTimeout(function () {
    animation();
}, 200);

function animation() {
    banner.classList.remove("anim6");
    banner.classList.add("anim1");
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
