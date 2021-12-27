const regionPlace = document.querySelector(".title_geo");
const latitudePlace = document.querySelector(".latitude_geo");
const longitudePlace = document.querySelector(".longitude_geo");
const addButton = document.querySelector(".add-city");
const editButton = document.querySelector(".edit-city");

const addForm = document.querySelector(".form-add-city");
const editForm = document.querySelector(".form-edit-city");

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

addButton.addEventListener("click", openAddForm);
editButton.addEventListener("click", openEditForm);
addForm.addEventListener("submit", handlerAddForm);
editForm.addEventListener("submit", handlerEditForm);

function openAddForm() {
    editForm.classList.add("form_hidden");
    addForm.classList.remove("form_hidden");
}
function openEditForm() {
    addForm.classList.add("form_hidden");
    editForm.classList.remove("form_hidden");
}
function handlerAddForm() {}
function handlerEditForm() {}

// GEO
navigator.geolocation.getCurrentPosition((position, error, options) => {
    latitudePlace.textContent = position.coords.latitude;
    longitudePlace.textContent = position.coords.longitude;
    const latitude = Math.round(position.coords.latitude);
    const longitude = Math.round(position.coords.longitude);
    getCsv(latitude, longitude);
});

// JSON Data Cities
function getCsv(latitude, longitude) {
    return fetch("./new-cities.json", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        .then(checkResponse)
        .then((res) => {
            for (let i = 0; i < res.length; i++) {
                if (Math.abs(latitude - res[i].latitude) < 0.05 && Math.abs(longitude - res[i].longitude) < 0.05) {
                    regionPlace.textContent = `${res[i].name_ru} и\u00A0${res[i].region_ru}`;
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
