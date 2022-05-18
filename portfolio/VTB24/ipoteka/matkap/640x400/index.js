const banner = document.querySelector(".banner");
const minPayment = banner.querySelector(".description__minpay");
const plate = banner.querySelector(".plate");
const percent = banner.querySelector(".percent");
const title = banner.querySelector(".title");
const description = banner.querySelectorAll(".description");
const slash = banner.querySelector(".slash");
const button = banner.querySelector(".button");
const disclamerText = banner.querySelector(".disclamer__text");
const disclamerChange = banner.querySelector(".disclamer__change");
const tel = banner.querySelector(".tel");

let customEvent = "DEFAULT";
let customClick = `DEFAULT_CLICK`;

banner.addEventListener("click", function () {
    screenad.click(`${customClick}`);
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
                // region check
                if (Math.abs(latitude - res[i].latitude) < 2 && Math.abs(longitude - res[i].longitude) < 2) {
                    // city check
                    if (Math.abs(latitude - res[i].latitude) < 0.5 && Math.abs(longitude - res[i].longitude) < 0.5) {
                        minPayment.textContent = `${res[i].min_payment}`;
                        disclamerChange.textContent = `${res[i].legal}`;
                        customEvent = res[i].event;
                        customClick = `${customEvent}_CLICK`;
                        screenad.event(customEvent);
                        break;
                    }
                    minPayment.textContent = `${res[i].min_payment}`;
                    disclamerChange.textContent = `${res[i].legal}`;
                    customEvent = res[i].event;
                    customClick = `${customEvent}_CLICK`;
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

setTimeout(function () {
    plate.style.transform = "translateX(0)";
    percent.style.transform = "scale(1)";
    setTimeout(function () {
        title.style.opacity = "1";
        description.forEach((p) => {
            p.style.opacity = "1";
        });
        slash.style.opacity = "1";
        button.style.transform = "translateX(0)";
        tel.style.transform = "translateX(0)";
        setTimeout(function () {
            percent.classList.add("scale-anim");
            disclamerText.style.transform = "translateY(0)";
        }, 500);
    }, 500);
}, 1000);
